import { Routes } from '@angular/router';

export const intermediateComponentsRoutes: Routes = [
  {
    path: 'template-ref-vars',
    loadComponent: () =>
      import('./template-ref-vars/template-ref-vars.component').then(
        (m) => m.TemplateReferenceVariablesComponent
      ),
  },
  {
    path: 'lifecycle-hooks',
    loadComponent: () =>
      import('./lifecycle-hooks/lifecycle-hooks.component').then(
        (m) => m.LifecycleHooksComponent
      ),
  },
  {
    path: 'ng-template-vs-ng-container',
    loadComponent: () =>
      import(
        './ng-template-vs-ng-container/ng-template-vs-ng-container.component'
      ).then((m) => m.NgTemplateVsNgContainerComponent),
  },
  {
    path: 'standalone-components',
    loadComponent: () =>
      import('./standalone-components/standalone-components.component').then(
        (m) => m.StandaloneComponentsComponent
      ),
  },
  {
    path: 'view-child-decorator',
    loadComponent: () =>
      import('./view-child-decorator/view-child-decorator.component').then(
        (m) => m.ViewChildDecoratorComponent
      ),
  },
  {
    path: 'content-child-decorator',
    loadComponent: () =>
      import(
        './content-child-decorator/content-child-decorator.component'
      ).then((m) => m.ContentChildDecoratorComponent),
  },
  {
    path: 'intermediate-components-quiz',
    loadComponent: () =>
      import(
        './intermediate-components-quiz/intermediate-components-quiz.component'
      ).then((m) => m.IntermediateComponentsQuizComponent),
  },
];
