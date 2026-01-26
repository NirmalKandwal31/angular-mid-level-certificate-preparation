import { Routes } from '@angular/router';

export const directivesRoutes: Routes = [
  {
    path: 'ngif-ngfor-basics',
    loadComponent: () =>
      import('./ng-if-and-ng-for/ng-if-and-ng-for.component').then(
        (m) => m.NgIfNgForBasicsComponent
      ),
  },
  {
    path: 'structural-vs-attribute',
    loadComponent: () =>
      import(
        './structural-directive-example/structural-directive-example.component'
      ).then((m) => m.StructuralDirectiveExampleComponent),
  },
  {
    path: 'attribute-directives-example',
    loadComponent: () =>
      import(
        './attribute-directive-example/attribute-directive-example.component'
      ).then((m) => m.AttributeDirectiveExampleComponent),
  },
  {
    path: 'directives-quiz',
    loadComponent: () =>
      import('./directives-quiz/directives-quiz.component').then(
        (m) => m.DirectivesQuizComponent
      ),
  },
];
