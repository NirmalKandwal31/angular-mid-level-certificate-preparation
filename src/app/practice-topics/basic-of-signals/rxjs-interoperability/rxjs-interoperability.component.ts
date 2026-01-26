import { CommonModule } from '@angular/common';
import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  Observable,
  Subscription,
  interval,
  map,
  of,
  switchMap,
  delay,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-interoperability',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rxjs-interoperability.component.html',
  styleUrl: './rxjs-interoperability.component.scss',
})
export class RxjsInteroperabilityComponent implements OnDestroy {
  intro =
    'Angular lets Signals and RxJS work together. Use toSignal() to convert an Observable into a Signal, and toObservable() to convert a Signal into an Observable.';

  keyPoints: string[] = [
    'Use RxJS for async streams: HTTP calls, WebSocket events, timers, user events, and complex stream composition.',
    'Use Signals for state: UI state, derived state with computed(), and simple reactive state management.',
    'toSignal(observable$) → Observable to Signal (great for showing async data in templates).',
    'toObservable(signal) → Signal to Observable (useful when you want to use RxJS operators).',
  ];

  whenUseRxjs: string[] = [
    'HTTP requests and polling',
    'WebSocket / server-sent events',
    'Debouncing user input (search)',
    'Combining multiple async sources (merge, combineLatest, switchMap)',
  ];

  whenUseSignals: string[] = [
    'Component/local state (toggle, counter, selected item)',
    'Derived values using computed()',
    'State you want to read synchronously',
  ];

  // --------------------------
  // Demo A: Observable -> Signal (toSignal)
  // --------------------------
  counter$ = interval(1000).pipe(map((n) => n + 1));

  // Signal created from observable
  // initialValue is important because Observable emits later (async)
  counterSignal = toSignal(this.counter$, { initialValue: 0 });

  // --------------------------
  // Demo B: Signal -> Observable (toObservable)
  // --------------------------
  searchTerm = signal('ang');
  searchTerm$ = toObservable(this.searchTerm);

  // Fake "search API"
  private fakeSearchApi(term: string): Observable<string> {
    return of(`API result for "${term}"`).pipe(delay(400));
  }

  searchResult = signal('Type to search...');
  status = signal<'Idle' | 'Loading' | 'Done'>('Idle');

  private sub = new Subscription();

  constructor() {
    // Use RxJS operators on signal changes
    // When searchTerm changes → switchMap calls API → update result signal
    this.sub.add(
      this.searchTerm$
        .pipe(
          switchMap((term) => {
            this.status.set('Loading');
            return this.fakeSearchApi(term);
          })
        )
        .subscribe((res) => {
          this.searchResult.set(res);
          this.status.set('Done');
        })
    );

    // Optional effect log (shows signals updating)
    effect(() => {
      // just to show that reading signals triggers effect
      this.searchResult();
      this.status();
    });
  }

  // UI helper
  setSearchTerm(v: string) {
    const t = (v || '').trim();
    this.searchTerm.set(t || 'ang');
    this.status.set('Idle');
  }

  // --------------------------
  // Snippets (safe)
  // --------------------------
  toSignalSnippet = `import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

const counter$ = interval(1000);

// Observable -> Signal
const counter = toSignal(counter$, { initialValue: 0 });

// template usage: {{ counter() }}`;

  toObservableSnippet = `import { toObservable } from '@angular/core/rxjs-interop';
import { signal } from '@angular/core';
import { map } from 'rxjs';

const term = signal('angular');

// Signal -> Observable
const term$ = toObservable(term);

// now you can use RxJS operators
term$.pipe(map(x => x.toUpperCase())).subscribe();`;

  ruleOfThumbSnippet = `// Rule of thumb:
  // RxJS → async streams (HTTP, events, timing, complex operators)
  // Signals → state (sync reads, derived state via computed, UI state)`;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
