import { Routes } from '@angular/router';

export const basicRoutingRoutes: Routes = [
  {
    path: 'routermodule-basics',
    loadComponent: () =>
      import(
        './router-module-configuration/router-module-configuration.component'
      ).then((m) => m.RouterModuleConfigurationComponent),
  },
  {
    path: 'routeroutlet-routerlink',
    loadComponent: () =>
      import(
        './router-outlet-routerlink/router-outlet-routerlink.component'
      ).then((m) => m.RouterOutletRouterlinkComponent),
  },
  {
    path: 'router-guards-basics',
    loadComponent: () =>
      import('./router-guards/router-guards.component').then(
        (m) => m.RouterGuardsComponent
      ),
  },
  {
    path: 'routing-quiz',
    loadComponent: () =>
      import('./routing-quiz/routing-quiz.component').then(
        (m) => m.RoutingQuizComponent
      ),
  },
];
