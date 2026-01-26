import { Routes } from '@angular/router';

export const basicsOfAngularRoutes: Routes = [
  {
    path: 'angular-cli',
    loadComponent: () =>
      import('./angular-cli/angular-cli.component').then(
        (m) => m.AngularCliComponent
      ),
  },
  {
    path: 'angular-vs-angularjs',
    loadComponent: () =>
      import(
        './angular-vs-angularjs-difference/angular-vs-angularjs-difference.component'
      ).then((m) => m.AngularVsAngularjsDifferenceComponent),
  },
  {
    path: 'angular-style-guide',
    loadComponent: () =>
      import(
        './angular-conventions-and-style-guide/angular-conventions-and-style-guide.component'
      ).then((m) => m.AngularConventionsAndStyleGuideComponent),
  },
  {
    path: 'angular-features',
    loadComponent: () =>
      import('./angular-features/angular-features.component').then(
        (m) => m.AngularFeaturesComponent
      ),
  },
  {
    path: 'angular-quiz',
    loadComponent: () =>
      import('./basic-of-angular-quiz/basic-of-angular-quiz.component').then(
        (m) => m.BasicOfAngularQuizComponent
      ),
  },
];
