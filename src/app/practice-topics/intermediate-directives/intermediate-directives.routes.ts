import { Routes } from '@angular/router';

export const intermediateDirectivesRoutes: Routes = [
  {
    path: 'host-listener-example',
    loadComponent: () =>
      import('./host-listner-example/host-listner-example.component').then(
        (m) => m.HostListnerExampleComponent
      ),
  },
  {
    path: 'advanced-ngif-ngfor',
    loadComponent: () =>
      import('./advanced-ngif-ngfor/advanced-ngif-ngfor.component').then(
        (m) => m.AdvancedNgIfNgForComponent
      ),
  },
  {
    path: 'intermediate-directives-quiz',
    loadComponent: () =>
      import(
        './intermediate-directives-quiz/intermediate-directives-quiz.component'
      ).then((m) => m.IntermediateDirectivesQuizComponent),
  },
];
