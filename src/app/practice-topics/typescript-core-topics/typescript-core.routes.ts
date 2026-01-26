import { Routes } from '@angular/router';

export const typescriptCoreRoutes: Routes = [
  {
    path: 'what-is-typescript',
    loadComponent: () =>
      import('./what-is-typescript/what-is-typescript.component').then(
        (m) => m.WhatIsTypescriptComponent
      ),
  },
  {
    path: 'ts-basics',
    loadComponent: () =>
      import('./typescript-syntax/typescript-syntax.component').then(
        (m) => m.TypescriptSyntaxComponent
      ),
  },
  {
    path: 'ts-template-strings',
    loadComponent: () =>
      import('./template-strings/template-strings.component').then(
        (m) => m.TemplateStringsComponent
      ),
  },
  {
    path: 'typescript-quiz',
    loadComponent: () =>
      import('./typescript-quiz/typescript-quiz.component').then(
        (m) => m.TypescriptQuizComponent
      ),
  },
];
