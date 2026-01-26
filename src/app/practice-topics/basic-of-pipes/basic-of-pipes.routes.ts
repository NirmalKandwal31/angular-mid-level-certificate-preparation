import { Routes } from '@angular/router';

export const pipesRoutes: Routes = [
  {
    path: 'common-pipes',
    loadComponent: () =>
      import('./common-angular-pipes/common-angular-pipes.component').then(
        (m) => m.CommonPipesExampleComponent
      ),
  },
  {
    path: 'pipe-syntax-params',
    loadComponent: () =>
      import('./pipe-syntax-params/pipe-syntax-params.component').then(
        (m) => m.PipeSyntaxParametersComponent
      ),
  },
  {
    path: 'when-to-use-pipes',
    loadComponent: () =>
      import('./when-to-use-pipes/when-to-use-pipes.component').then(
        (m) => m.WhenToUsePipesComponent
      ),
  },
  {
    path: 'custom-pipes',
    loadComponent: () =>
      import('./custom-pipes/custom-pipes.component').then(
        (m) => m.CustomPipesComponent
      ),
  },
  {
    path: 'pipes-quiz',
    loadComponent: () =>
      import('./pipes-quiz/pipes-quiz.component').then(
        (m) => m.PipesQuizComponent
      ),
  },
];
