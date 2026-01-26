import { Routes } from '@angular/router';

export const formsRoutes: Routes = [
  {
    path: 'forms-css-classes',
    loadComponent: () =>
      import('./form-css-classes/form-css-classes.component').then(
        (m) => m.AngularFormCssClassesComponent
      ),
  },
  {
    path: 'formcontrol-basics',
    loadComponent: () =>
      import('./form-control-example/form-control-example.component').then(
        (m) => m.FormControlExampleComponent
      ),
  },
  {
    path: 'template-vs-reactive-forms',
    loadComponent: () =>
      import(
        './template-vs-reactive-forms/template-vs-reactive-forms.component'
      ).then((m) => m.TemplateVsReactiveFormsComponent),
  },
  {
    path: 'forms-quiz',
    loadComponent: () =>
      import('./forms-quiz/forms-quiz.component').then(
        (m) => m.FormsQuizComponent
      ),
  },
];
