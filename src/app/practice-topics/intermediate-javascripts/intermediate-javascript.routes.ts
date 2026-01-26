import { Routes } from '@angular/router';

export const intermediateJavascriptRoutes: Routes = [
  {
    path: 'let-var-example',
    loadComponent: () =>
      import(
        './hoisting-let-var-example/hoisting-let-var-example.component'
      ).then((m) => m.HoistingLetVarExampleComponent),
  },
  {
    path: 'rest-operator-example',
    loadComponent: () =>
      import('./rest-operator-example/rest-operator-example.component').then(
        (m) => m.RestOperatorExampleComponent
      ),
  },
  {
    path: 'spread-operator-example',
    loadComponent: () =>
      import(
        './spread-operator-example/spread-operator-example.component'
      ).then((m) => m.SpreadOperatorExampleComponent),
  },
  {
    path: 'arrow-functions',
    loadComponent: () =>
      import('./arrow-functions/arrow-functions.component').then(
        (m) => m.ArrowFunctionsComponent
      ),
  },
  {
    path: 'intermediate-javascript-quiz',
    loadComponent: () =>
      import(
        './intermediate-javascript-quiz/intermediate-javascript-quiz.component'
      ).then((m) => m.IntermediateJavascriptQuizComponent),
  },
];
