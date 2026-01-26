import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type PropertyCard = {
  name: 'declarations' | 'imports' | 'providers' | 'bootstrap';
  short: string;
  definition: string;
  whenToUse: string[];
  commonMistakes: string[];
  example: string;
};

@Component({
  selector: 'app-ng-module-decorator-properties',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ng-module-decorator-properties.component.html',
  styleUrl: './ng-module-decorator-properties.component.scss',
})
export class NgModuleDecoratorPropertiesComponent {
  intro: string[] = [
    'NgModule is a metadata container that tells Angular how to compile and run your application.',
    'In modern Angular (standalone), you may use fewer NgModules, but you will still see them in many projects.',
    'The @NgModule decorator configures which building blocks are available in that module.',
  ];

  fullNgModuleExample = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, UserCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  cards: PropertyCard[] = [
    {
      name: 'declarations',
      short:
        'Declare components, directives, and pipes that belong to this module.',
      definition:
        'A list of components, directives, and pipes that are part of this NgModule. Angular compiles these and makes them usable in templates of this module.',
      whenToUse: [
        'Add your own components/directives/pipes that are created inside your app.',
        'If a component template uses a directive/pipe declared here, it will work inside this module.',
      ],
      commonMistakes: [
        'Declaring the same component in multiple modules (Angular will throw an error).',
        'Putting services in declarations (services never go in declarations).',
        'Forgetting to export a declaration when another module needs to use it (export is a separate property).',
      ],
      example: `@NgModule({
  declarations: [UserListComponent, UserCardComponent, HighlightDirective, CurrencyPipe],
})`,
    },
    {
      name: 'imports',
      short:
        'Import other modules (or standalone components) whose exports you want to use.',
      definition:
        'A list of modules whose exported classes are needed by components in this module. This is how you gain access to directives like *ngIf/*ngFor, forms, routing, etc.',
      whenToUse: [
        'Import CommonModule in feature modules to use *ngIf, *ngFor, pipes like date/currency.',
        'Import FormsModule/ReactiveFormsModule for forms.',
        'Import RouterModule for routerLink/router-outlet in NgModule-based apps.',
      ],
      commonMistakes: [
        'Forgetting CommonModule in a feature module (then *ngIf/*ngFor won’t work).',
        'Importing BrowserModule in feature modules (BrowserModule should be only in AppModule).',
      ],
      example: `@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
})`,
    },
    {
      name: 'providers',
      short: 'Register services with Angular’s dependency injection system.',
      definition:
        'A list of service providers available to this module injector. Providers define how dependencies (services) are created and shared.',
      whenToUse: [
        'Provide a service at module scope if you want a specific instance for that module.',
        'Prefer @Injectable({ providedIn: "root" }) for application-wide singletons in most cases.',
        'Use providers for tokens/interceptors/config values.',
      ],
      commonMistakes: [
        'Providing the same service in multiple places unintentionally (can create multiple instances).',
        'Using providers for components/pipes (those belong in declarations).',
      ],
      example: `@NgModule({
  providers: [
    UsersService,
    { provide: API_URL, useValue: 'https://api.example.com' }
  ],
})`,
    },
    {
      name: 'bootstrap',
      short: 'The root component Angular should load at application start.',
      definition:
        'A list of components that Angular should bootstrap (load) when this module is used to start the application. Typically only AppModule uses this.',
      whenToUse: [
        'Used in AppModule to start the app with AppComponent.',
        'Not commonly used in feature modules.',
      ],
      commonMistakes: [
        'Adding feature components here (bootstrap is not for feature components).',
        'Trying to bootstrap multiple unrelated roots (uncommon; usually only one root component).',
      ],
      example: `@NgModule({
  bootstrap: [AppComponent],
})`,
    },
  ];

  quickChecklist: string[] = [
    'declarations → Components/Directives/Pipes you own',
    'imports → Modules you need (CommonModule, FormsModule, RouterModule, etc.)',
    'providers → Services/tokens for dependency injection',
    'bootstrap → Root component (usually AppComponent in AppModule)',
  ];

  noteAboutStandalone: string =
    'In standalone Angular apps, many features are imported directly into standalone components and routing configuration instead of using NgModules. However, understanding @NgModule is still important for legacy codebases and interviews.';
}
