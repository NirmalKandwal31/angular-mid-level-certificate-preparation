import { Routes } from '@angular/router';

export const rxjsRoutes: Routes = [
  {
    path: 'rxjs-observables-example',
    loadComponent: () =>
      import(
        './rxjs-observables-examples/rxjs-observables-examples.component'
      ).then((m) => m.RxjsObservablesExamplesComponent),
  },
  {
    path: 'rxjs-operators',
    loadComponent: () =>
      import('./rxjs-operators/rxjs-operators.component').then(
        (m) => m.RxjsOperatorsComponent
      ),
  },
  {
    path: 'rxjs-unsubscribe',
    loadComponent: () =>
      import('./rxjs-unsubscribe/rxjs-unsubscribe.component').then(
        (m) => m.UnsubscribeStrategiesComponent
      ),
  },
  {
    path: 'rxjs-quiz',
    loadComponent: () =>
      import('./rxjs-quiz/rxjs-quiz.component').then(
        (m) => m.RxjsQuizComponent
      ),
  },
];
