import { Routes } from '@angular/router';

export const practiceProjectsRoutes: Routes = [
  {
    path: 'crud-operation-example',
    loadComponent: () =>
      import('./crud-operation-example/crud-operation-example.component')
        .then(m => m.CrudOperationExampleComponent),
  },
  {
    path: 'crud-with-reactive-forms-example',
    loadComponent: () =>
      import(
        './crud-operation-using-reactive-forms-example/crud-operation-using-reactive-forms-example.component'
      ).then((m) => m.CrudOperationUsingReactiveFormsExampleComponent),
  },
  {
    path: 'tesla-project',
    loadComponent: () =>
      import('./tesla-project/tesla-project.component')
        .then((m) => m.TeslaProjectComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'step1' },

      {
        path: 'step1',
        loadComponent: () =>
          import('./tesla-project/tesla-step-1/tesla-step-1.component')
            .then(m => m.TeslaStep1Component),
      },
      {
        path: 'step2',
        loadComponent: () =>
          import('./tesla-project/tesla-step-2/tesla-step-2.component')
            .then(m => m.TeslaStep2Component),
      },
      {
        path: 'step3',
        loadComponent: () =>
          import('./tesla-project/tesla-step-3/tesla-step-3.component')
            .then(m => m.TeslaStep3Component),
      },
    ],
  },
  {
    path: 'tesla-project-without-signal',
    loadComponent: () =>
      import('./tesla-project-without-signal/tesla-project-without-signal.component')
        .then((m) => m.TeslaProjectWithoutSignalComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'step1' },

      {
        path: 'step1',
        loadComponent: () =>
          import('./tesla-project-without-signal/step-1/step-1.component')
            .then(m => m.Step1Component),
      },
      {
        path: 'step2',
        loadComponent: () =>
          import('./tesla-project-without-signal/step-2/step-2.component')
            .then(m => m.Step2Component),
      },
      {
        path: 'step3',
        loadComponent: () =>
          import('./tesla-project-without-signal/step-3/step-3.component')
            .then(m => m.Step3Component),
      },
    ],
  },
  {
    path: 'ryanair-cheap-flights',
    loadComponent: () => import('./ryanair-cheap-flights-app/ryanair-cheap-flights-app.component').then((m) => m.RyanairCheapFlightsAppComponent)
  }

];
