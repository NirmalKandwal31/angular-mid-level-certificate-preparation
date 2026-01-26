import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Observable,
  Subject,
  Subscription,
  catchError,
  delay,
  filter,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';

type User = { id: number; name: string; isAdmin: boolean };

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.scss',
})
export class RxjsOperatorsComponent implements OnDestroy {
  // -------------------------
  // Content
  // -------------------------
  intro =
    'RxJS operators transform, filter, and control streams. You can chain operators using pipe().';

  operatorsSummary = [
    {
      name: 'map',
      meaning: 'Transforms each emitted value into a new value.',
      example: 'numbers -> numbers * 2',
    },
    {
      name: 'filter',
      meaning: 'Allows only values that pass a condition.',
      example: 'users -> only admins',
    },
    {
      name: 'switchMap',
      meaning: 'Switches to a new inner observable; cancels previous one.',
      example: 'search input -> latest API call only',
    },
    {
      name: 'tap',
      meaning: 'Side effects (logging, debugging) without changing values.',
      example: 'log values inside pipeline',
    },
    {
      name: 'catchError',
      meaning: 'Handles errors and returns a fallback observable.',
      example: 'API fails -> show default data',
    },
  ];

  keyPoints: string[] = [
    'Operators are used inside pipe(): source$.pipe(map(...), filter(...))',
    'map changes values, filter removes values, tap does side-effects.',
    'switchMap is common for API calls based on user actions (search, route params).',
    'catchError prevents stream from breaking and lets you return fallback data.',
  ];

  // -------------------------
  // Demo 1: map + filter + tap
  // -------------------------
  users: User[] = [
    { id: 1, name: 'Alex', isAdmin: true },
    { id: 2, name: 'Sara', isAdmin: false },
    { id: 3, name: 'John', isAdmin: true },
    { id: 4, name: 'Maya', isAdmin: false },
  ];

  mapFilterResult: string[] = [];
  tapLogs: string[] = [];

  runMapFilterDemo() {
    this.mapFilterResult = [];
    this.tapLogs = [];

    of(...this.users)
      .pipe(
        tap((u) => this.tapLogs.unshift(`tap: received user "${u.name}"`)),
        filter((u) => u.isAdmin),
        tap((u) =>
          this.tapLogs.unshift(`tap: passed filter (admin) "${u.name}"`)
        ),
        map((u) => `#${u.id} ${u.name.toUpperCase()} (ADMIN)`),
        tap((label) => this.tapLogs.unshift(`tap: mapped label -> "${label}"`))
      )
      .subscribe((label) => this.mapFilterResult.push(label));
  }

  // -------------------------
  // Demo 2: switchMap (search -> latest request only)
  // -------------------------
  private search$ = new Subject<string>();
  private sub = new Subscription();

  latestSearchTerm = '';
  searchResult = '';
  searchStatus = 'Idle';

  constructor() {
    // switchMap cancels previous "API" call if new term comes in quickly
    this.sub.add(
      this.search$
        .pipe(
          tap((term) => {
            this.latestSearchTerm = term;
            this.searchStatus = `Searching for "${term}"...`;
          }),
          switchMap((term) => this.fakeSearchApi(term).pipe(delay(500))),
          tap(() => (this.searchStatus = 'Done ✅'))
        )
        .subscribe({
          next: (result) => (this.searchResult = result),
          error: () => (this.searchStatus = 'Error ❌'),
        })
    );
  }

  emitSearch(term: string) {
    const t = (term || '').trim();
    if (!t) return;
    this.searchResult = '';
    this.searchStatus = 'Typing...';
    this.search$.next(t);
  }

  // Fake API observable for switchMap demo
  private fakeSearchApi(term: string): Observable<string> {
    return of(`Result for "${term}" (only latest request wins)`);
  }

  // -------------------------
  // Demo 3: catchError
  // -------------------------
  errorDemoStatus = 'Idle';
  errorDemoResult = '';

  runCatchErrorDemo(shouldFail: boolean) {
    this.errorDemoStatus = 'Loading...';
    this.errorDemoResult = '';

    this.fakeApiCall(shouldFail)
      .pipe(
        catchError((err) => {
          this.errorDemoStatus = 'Recovered with fallback ✅';
          return of(`Fallback result (because API failed): ${err.message}`);
        })
      )
      .subscribe((res) => {
        if (this.errorDemoStatus === 'Loading...') {
          this.errorDemoStatus = 'Success ✅';
        }
        this.errorDemoResult = res;
      });
  }

  private fakeApiCall(shouldFail: boolean): Observable<string> {
    if (shouldFail) {
      return throwError(() => new Error('Server error 500'));
    }
    return of('API success: Data loaded!');
  }

  // -------------------------
  // Code snippets (safe)
  // -------------------------
  pipeSyntaxSnippet = `source$
  .pipe(
    map(v => v * 2),
    filter(v => v > 10),
    tap(v => console.log(v))
  )
  .subscribe();`;

  mapSnippet = `map(v => v * 2) // transforms values`;

  filterSnippet = `filter(user => user.isAdmin) // keeps only matching values`;

  switchMapSnippet = `search$
  .pipe(
    switchMap(term => http.get('/api?q=' + term))
  )
  .subscribe(); // only latest request stays active`;

  tapSnippet = `tap(v => console.log('debug:', v)) // side effect only`;

  catchErrorSnippet = `http.get('/api')
  .pipe(
    catchError(err => of([])) // fallback
  )
  .subscribe();`;

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
