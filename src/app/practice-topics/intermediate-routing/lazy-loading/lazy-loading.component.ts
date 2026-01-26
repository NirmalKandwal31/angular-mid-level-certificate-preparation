import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy-loading',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lazy-loading.component.html',
  styleUrl: './lazy-loading.component.scss',
})
export class LazyLoadingComponent {
  intro =
    'Lazy loading is a technique where Angular loads code only when it is needed, instead of loading everything at application startup.';

  keyPoints: string[] = [
    'Lazy loading improves initial application load time.',
    'Code for a feature is loaded only when the user navigates to it.',
    'Angular supports lazy loading using loadComponent and loadChildren.',
    'Best for large applications with many routes and features.',
  ];

  loadComponentPoints: string[] = [
    'Used to lazy-load a standalone component.',
    'Recommended approach in modern Angular.',
    'Very simple and clean syntax.',
  ];

  loadChildrenPoints: string[] = [
    'Used to lazy-load a group of routes or a feature module.',
    'Common in older Angular projects using NgModules.',
    'Still supported and useful for large route trees.',
  ];

  benefits: string[] = [
    'Faster initial page load.',
    'Smaller main bundle size.',
    'Better performance on slow networks.',
    'Improved user experience.',
  ];

  // Safe code snippets
  eagerSnippet = `// ❌ Eager loading (everything loaded at startup)
import { FeatureComponent } from './feature.component';

const routes = [
  { path: 'feature', component: FeatureComponent }
];`;

  loadComponentSnippet = `// ✅ Lazy loading a standalone component
{
  path: 'profile',
  loadComponent: () =>
    import('./profile/profile.component')
      .then(m => m.ProfileComponent)
}`;

  loadChildrenSnippet = `// ✅ Lazy loading a route group / module
{
  path: 'admin',
  loadChildren: () =>
    import('./admin/admin.routes')
      .then(m => m.ADMIN_ROUTES)
}

// OR (NgModule based)
{
  path: 'admin',
  loadChildren: () =>
    import('./admin/admin.module')
      .then(m => m.AdminModule)
}`;

  networkNote =
    'When you open DevTools → Network tab, you can see new JS files being downloaded only when you visit a lazy-loaded route.';
}
