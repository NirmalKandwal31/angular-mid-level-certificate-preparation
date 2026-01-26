import { Routes } from '@angular/router';

export const intermediateTypescriptRoutes: Routes = [
  {
    path: 'constructor-syntax-options',
    loadComponent: () =>
      import(
        './constructor-syntax-options/constructor-syntax-options.component'
      ).then((m) => m.ConstructorSyntaxOptionsComponent),
  },
  {
    path: 'union-types-example',
    loadComponent: () =>
      import('./union-type-example/union-type-example.component').then(
        (m) => m.UnionTypeExampleComponent
      ),
  },
  {
    path: 'utility-types-example',
    loadComponent: () =>
      import('./utility-type-example/utility-type-example.component').then(
        (m) => m.UtilityTypeExampleComponent
      ),
  },
  {
    path: 'null-coalescing-operator-example',
    loadComponent: () =>
      import(
        './null-coalescing-example/null-coalescing-example.component'
      ).then((m) => m.NullCoalescingExampleComponent),
  },
  {
    path: 'enums-example',
    loadComponent: () =>
      import('./enums-example/enums-example.component').then(
        (m) => m.EnumsExampleComponent
      ),
  },
  {
    path: 'intermediate-typescript-quiz',
    loadComponent: () =>
      import(
        './intermediate-typescript-quiz/intermediate-typescript-quiz.component'
      ).then((m) => m.IntermediateTypescriptQuizComponent),
  },
];
