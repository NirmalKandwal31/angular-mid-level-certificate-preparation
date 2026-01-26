import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { interval, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe-strategies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rxjs-unsubscribe.component.html',
  styleUrl: './rxjs-unsubscribe.component.scss',
})
export class UnsubscribeStrategiesComponent implements OnDestroy {
  intro =
    'Unsubscribing prevents memory leaks. If an Observable keeps emitting and you never unsubscribe, the component can keep listening even after it is destroyed.';

  strategies: string[] = [
    'Use the async pipe in templates (auto subscribe/unsubscribe).',
    'Use takeUntil with a destroy$ subject (common pattern).',
    'Store subscriptions and call unsubscribe() in ngOnDestroy.',
  ];

  // -------------------------
  // Demo Observables
  // -------------------------
  // interval emits 0,1,2... every second
  counter$ = interval(1000).pipe(map((n) => n + 1));

  // Strategy 1: async pipe demo (no manual unsubscribe)
  asyncPipeNote =
    'Async pipe automatically subscribes and unsubscribes when the view is destroyed.';

  // Strategy 2: takeUntil demo (manual but clean)
  private destroy$ = new Subject<void>();
  takeUntilValue = 0;
  takeUntilRunning = false;

  // Strategy 3: manual Subscription cleanup
  manualValue = 0;
  manualRunning = false;
  private manualSub: Subscription | null = null;

  // Safe code snippets (render with [textContent])
  asyncSnippet = `<!-- async pipe auto cleanup -->
<p>Counter: {{ counter$ | async }}</p>`;

  takeUntilSnippet = `private destroy$ = new Subject<void>();

ngOnInit() {
  interval(1000)
    .pipe(takeUntil(this.destroy$))
    .subscribe(v => this.value = v);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}`;

  manualSnippet = `private sub = new Subscription();

ngOnInit() {
  this.sub.add(
    this.obs$.subscribe(...)
  );
}

ngOnDestroy() {
  this.sub.unsubscribe();
}`;

  whySnippet = `// Why unsubscribe?
// If an observable never completes (like interval),
// it keeps emitting forever.
// Without unsubscribe, memory leaks can happen.`;

  // -------------------------
  // Demo actions
  // -------------------------
  startTakeUntil() {
    if (this.takeUntilRunning) return;
    this.takeUntilRunning = true;

    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((n) => {
        this.takeUntilValue = n + 1;
      });
  }

  stopTakeUntilManually() {
    // This doesn't end the subscription unless we emit destroy$
    this.destroy$?.next();
    this.takeUntilRunning = false;
  }

  startManual() {
    if (this.manualRunning) return;
    this.manualRunning = true;

    this.manualSub = interval(1000).subscribe((n) => {
      this.manualValue = n + 1;
    });
  }

  stopManual() {
    this.manualSub?.unsubscribe();
    this.manualSub = null;
    this.manualRunning = false;
  }

  reset() {
    this.takeUntilValue = 0;
    this.manualValue = 0;
  }

  ngOnDestroy(): void {
    // ✅ takeUntil cleanup
    this.destroy$.next();
    this.destroy$.complete();

    // ✅ manual cleanup
    this.manualSub?.unsubscribe();
  }
}
