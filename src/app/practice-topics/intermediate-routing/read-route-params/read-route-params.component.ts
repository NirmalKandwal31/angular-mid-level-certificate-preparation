import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-read-route-parameters',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './read-route-params.component.html',
  styleUrl: './read-route-params.component.scss',
})
export class ReadRouteParamsComponent implements OnDestroy {
  // Values you read from route
  paramIdSnapshot: string | null = null;
  paramIdSubscribed: string | null = null;

  querySearchSnapshot: string | null = null;
  querySearchSubscribed: string | null = null;

  // local demo values
  demoId = '101';
  demoSearch = 'angular';

  // subscriptions
  private sub = new Subscription();

  intro =
    'ActivatedRoute lets you read route params (path variables) and query params. You can read using snapshot (one-time) or subscribe (reactive updates).';

  keyPoints: string[] = [
    'Route params come from the URL path, e.g. /users/101 (id = 101).',
    'Query params come after ?, e.g. /users/101?search=angular (search = angular).',
    'snapshot reads values once (good if route won’t change while staying on same component).',
    'subscribe updates when params change without recreating the component (recommended for reactive behavior).',
  ];

  // Safe code snippets
  routeSetupSnippet = `// routes.ts
{
  path: 'users/:id',
  loadComponent: () =>
    import('./read-route-parameters.component')
      .then(m => m.ReadRouteParametersComponent),
}`;

  snapshotSnippet = `constructor(private route: ActivatedRoute) {
  // ✅ One-time read (snapshot)
  const id = this.route.snapshot.paramMap.get('id');
  const search = this.route.snapshot.queryParamMap.get('search');
}`;

  subscribeSnippet = `ngOnInit() {
  // ✅ Reactive read (subscribe)
  this.route.paramMap.subscribe(map => {
    const id = map.get('id');
  });

  this.route.queryParamMap.subscribe(map => {
    const search = map.get('search');
  });
}`;

  whenToUseSnippet = `// snapshot vs subscribe
// snapshot: use when component is recreated on navigation (most cases)
// subscribe: use when same component stays loaded and only params change`;

  constructor(private route: ActivatedRoute, private router: Router) {
    // ---------------------------
    // snapshot (one-time)
    // ---------------------------
    this.paramIdSnapshot = this.route.snapshot.paramMap.get('id');
    this.querySearchSnapshot = this.route.snapshot.queryParamMap.get('search');

    // ---------------------------
    // subscribe (reactive)
    // ---------------------------
    this.sub.add(
      this.route.paramMap.subscribe((map) => {
        this.paramIdSubscribed = map.get('id');
      })
    );

    this.sub.add(
      this.route.queryParamMap.subscribe((map) => {
        this.querySearchSubscribed = map.get('search');
      })
    );
  }

  // Demo: navigate to same route with new params
  goToDemoRoute() {
    this.router.navigate(['/users', this.demoId], {
      queryParams: { search: this.demoSearch },
    });
  }

  clearQueryParams() {
    // keep same path param, remove query
    const id = this.route.snapshot.paramMap.get('id') ?? this.demoId;
    this.router.navigate(['/users', id], { queryParams: {} });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
