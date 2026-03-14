import { Routes } from '@angular/router';

// feature-wise routes (alag files)
import { basicsOfAngularRoutes } from './practice-topics/basics-of-angular/basics-of-angular.routes';
import { basicsOfComponentsRoutes } from './practice-topics/basics-of-components/basics-of-components.routes';
import { signalsRoutes } from './practice-topics/basic-of-signals/basic-of-signals.routes';
import { typescriptCoreRoutes } from './practice-topics/typescript-core-topics/typescript-core.routes';
import { intermediateTypescriptRoutes } from './practice-topics/intermediate-typescripts-topics/intermediate-typescript.routes';
import { intermediateJavascriptRoutes } from './practice-topics/intermediate-javascripts/intermediate-javascript.routes';
import { intermediateComponentsRoutes } from './practice-topics/intermediate-components/intermediate-components.routes';
import { servicesRoutes } from './practice-topics/basic-of-services/basic-of-services.routes';
import { directivesRoutes } from './practice-topics/basic-of-directives/basic-of-directives.routes';
import { intermediateDirectivesRoutes } from './practice-topics/intermediate-directives/intermediate-directives.routes';
import { basicRoutingRoutes } from './practice-topics/basic-of-routing/basic-of-routing.routes';
import { intermediateRoutingRoutes } from './practice-topics/intermediate-routing/intermediate-routing.routes';
import { rxjsRoutes } from './practice-topics/basic-of-rxjs/basic-of-rxjs.routes';
import { pipesRoutes } from './practice-topics/basic-of-pipes/basic-of-pipes.routes';
import { formsRoutes } from './practice-topics/angular-forms/angular-forms.routes';
import { ngModulesRoutes } from './practice-topics/angular-ng-modules/angular-ng-modules.routes';
import { practiceProjectsRoutes } from './features/practice/practice-project-details/practice-project.routes';
import { TopicDetailComponent } from './features/topics/topic-detail/topic-detail.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  { path: 'topics/:topicId', component: TopicDetailComponent },

  // ✅ all topic routes from separate files
  ...basicsOfAngularRoutes,
  ...basicsOfComponentsRoutes,
  ...signalsRoutes,
  ...typescriptCoreRoutes,
  ...intermediateTypescriptRoutes,
  ...intermediateJavascriptRoutes,
  ...intermediateComponentsRoutes,
  ...servicesRoutes,
  ...directivesRoutes,
  ...intermediateDirectivesRoutes,
  ...basicRoutingRoutes,
  ...intermediateRoutingRoutes,
  ...rxjsRoutes,
  ...pipesRoutes,
  ...formsRoutes,
  ...ngModulesRoutes,
  ...practiceProjectsRoutes,

  // ✅ MISC routes inline (as you wanted)
  {
    path: 'sharing-data-without-signal',
    loadComponent: () =>
      import(
        './practice-topics/sharing-data-without-signals/sharing-data-without-signals.component'
      ).then((m) => m.SharingDataWithoutSignalsComponent),
  },

  {
    path: 'ng-template-example',
    loadComponent: () =>
      import(
        './practice-topics/ng-template-example/ng-template-example.component'
      ).then((m) => m.NgTemplateExampleComponent),
  },
  {
    path: 'ng-container-example',
    loadComponent: () =>
      import(
        './practice-topics/ng-container-example/ng-container-example.component'
      ).then((m) => m.NgContainerExampleComponent),
  },


  {
    path: 'interview-questions/:topic',
    loadComponent: () =>
      import(
        './features/interview/interview-questions/interview-questions.component'
      ).then((m) => m.InterviewQuestionsComponent),
  },
  {
    path: 'is-a-definition',
    loadComponent: () =>
      import(
        './practice-topics/is-a-definition/is-a-definition.component'
      ).then((m) => m.IsADefinitionComponent),
  },

  {
    path: 'practice-code',
    loadComponent: () =>
      import(
        './practice-topics/practice-code/practice-code.component'
      ).then((m) => m.PracticeCodeComponent),
  },

  { path: '**', redirectTo: 'home' },
];
