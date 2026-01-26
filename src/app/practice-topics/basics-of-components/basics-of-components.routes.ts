import { Routes } from '@angular/router';

export const basicsOfComponentsRoutes: Routes = [
  {
    path: 'component-selector',
    loadComponent: () =>
      import('./component-selector/component-selector.component').then(
        (m) => m.ComponentSelectorComponent
      ),
  },
  {
    path: 'template-syntax',
    loadComponent: () =>
      import(
        './template-expressions-and-syntax/template-expressions-and-syntax.component'
      ).then((m) => m.TemplateExpressionsAndSyntaxComponent),
  },
  {
    path: 'sharing-data-using-input-output',
    loadComponent: () =>
      import(
        './sharing-data-using-input-output/sharing-data-using-input-output.component'
      ).then((m) => m.SharingDataUsingInputOutputComponent),
  },
  {
    path: 'one-and-two-way-binding',
    loadComponent: () =>
      import(
        './one-and-two-way-binding/one-and-two-way-binding.component'
      ).then((m) => m.OneAndTwoWayBindingComponent),
  },
  {
    path: 'components-quiz',
    loadComponent: () =>
      import(
        './basic-of-components-quiz/basic-of-components-quiz.component'
      ).then((m) => m.BasicOfComponentsQuizComponent),
  },
];
