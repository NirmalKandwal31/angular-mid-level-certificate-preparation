import { Routes } from '@angular/router';

export const intermediateRoutingRoutes: Routes = [
  {
    path: 'lazy-loading',
    loadComponent: () =>
      import('./lazy-loading/lazy-loading.component').then(
        (m) => m.LazyLoadingComponent
      ),
  },
  {
    path: 'functional-guards',
    loadComponent: () =>
      import('./functional-guards/functional-guards.component').then(
        (m) => m.FunctionalGuardsComponent
      ),
  },
  {
    path: 'hash-location-strategy',
    loadComponent: () =>
      import('./hash-location-strategy/hash-location-strategy.component').then(
        (m) => m.HashLocationStrategyComponent
      ),
  },
  {
    path: 'read-route-params',
    loadComponent: () =>
      import('./read-route-params/read-route-params.component').then(
        (m) => m.ReadRouteParamsComponent
      ),
  },
  {
    path: 'intermediate-routing-quiz',
    loadComponent: () =>
      import(
        './intermediate-routing-quiz/intermediate-routing-quiz.component'
      ).then((m) => m.IntermediateRoutingQuizComponent),
  },
];
