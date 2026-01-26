import { Routes } from '@angular/router';

export const servicesRoutes: Routes = [
  {
    path: 'dependency-injection-basics',
    loadComponent: () =>
      import(
        './dependency-injection-basics/dependency-injection-basics.component'
      ).then((m) => m.DependencyInjectionBasicsComponent),
  },
  {
    path: 'inject-service',
    loadComponent: () =>
      import('./inject-service/inject-service.component').then(
        (m) => m.InjectServiceComponentComponent
      ),
  },
  {
    path: 'when-to-use-services',
    loadComponent: () =>
      import('./when-to-use-services/when-to-use-services.component').then(
        (m) => m.WhenToUseServicesComponent
      ),
  },
  {
    path: 'services-quiz',
    loadComponent: () =>
      import('./services-quiz/services-quiz.component').then(
        (m) => m.ServicesQuizComponent
      ),
  },
];
