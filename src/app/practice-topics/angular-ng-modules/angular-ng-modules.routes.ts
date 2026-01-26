import { Routes } from '@angular/router';

export const ngModulesRoutes: Routes = [
  {
    path: 'ngmodule-properties',
    loadComponent: () =>
      import(
        './ng-module-decorator-properties/ng-module-decorator-properties.component'
      ).then((m) => m.NgModuleDecoratorPropertiesComponent),
  },
  {
    path: 'main-appmodule',
    loadComponent: () =>
      import('./app-module-overview/app-module-overview.component').then(
        (m) => m.AppModuleOverviewComponent
      ),
  },
  {
    path: 'ng-modules-quiz',
    loadComponent: () =>
      import('./ng-modules-quiz/ng-modules-quiz.component').then(
        (m) => m.NgModulesQuizComponent
      ),
  },
];
