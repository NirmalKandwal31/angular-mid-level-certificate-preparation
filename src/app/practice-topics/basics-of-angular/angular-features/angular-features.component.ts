import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Feature = {
  title: string;
  description: string;
  whyItMatters: string;
  example?: string;
  tips?: string[];
};

@Component({
  selector: 'app-angular-features',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './angular-features.component.html',
  styleUrl: './angular-features.component.scss',
})
export class AngularFeaturesComponent {
  introBullets: string[] = [
    'Angular is a full framework for building large, scalable single-page applications.',
    'It provides an opinionated structure: routing, forms, HTTP, DI, and testing support out of the box.',
    'It is TypeScript-first, which improves maintainability and refactoring safety.',
  ];

  features: Feature[] = [
    {
      title: 'Component-Based Architecture',
      description:
        'Angular apps are built from reusable components (UI + logic + template). Components help you split the UI into small, maintainable parts.',
      whyItMatters:
        'It improves reusability, makes the app easier to scale, and encourages clean separation of concerns.',
      example: `@Component({
  selector: 'app-user-card',
  template: '<h3>{{name}}</h3>'
})
export class UserCardComponent {
  name = 'John';
}`,
      tips: [
        'Keep components small and focused.',
        'Move business logic to services.',
      ],
    },
    {
      title: 'Dependency Injection (DI)',
      description:
        'Angular has a built-in DI system to provide services and shared logic across the app.',
      whyItMatters:
        'DI improves testability, reduces tight coupling, and makes code more modular.',
      example: `@Injectable({ providedIn: 'root' })
export class UsersService {}

export class UsersComponent {
  constructor(private usersService: UsersService) {}
}`,
      tips: [
        'Prefer `providedIn: "root"` for singleton services.',
        'Use services for API calls and shared state.',
      ],
    },
    {
      title: 'Powerful Templates',
      description:
        'Angular templates support data binding, directives, pipes, and a rich syntax for building dynamic UIs.',
      whyItMatters:
        'You can keep UI logic declarative and readable using bindings and directives.',
      example: `<h2>{{ title }}</h2>
<button (click)="save()">Save</button>
<div *ngIf="isLoggedIn">Welcome!</div>`,
      tips: [
        'Avoid complex logic in templates.',
        'Prefer computed values in TS (or signals) for readability.',
      ],
    },
    {
      title: 'Routing',
      description:
        'Angular Router enables navigation between pages/views with features like lazy loading, guards, and route parameters.',
      whyItMatters:
        'You can build SPA navigation with scalable patterns and good performance.',
      example: `export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users/:id', component: UserDetailComponent }
];`,
      tips: [
        'Use lazy loading for large feature areas.',
        'Use guards for auth/permissions.',
      ],
    },
    {
      title: 'Forms (Template-driven + Reactive)',
      description:
        'Angular supports two approaches for forms: template-driven and reactive forms.',
      whyItMatters:
        'Reactive forms are great for complex validation and dynamic forms; template forms are quick for simple cases.',
      example: `const name = new FormControl('', { nonNullable: true });
name.valueChanges.subscribe(v => console.log(v));`,
      tips: [
        'Use reactive forms for complex business forms.',
        'Keep validation rules consistent and testable.',
      ],
    },
    {
      title: 'HttpClient for API Calls',
      description:
        'Angular provides HttpClient for making HTTP requests with observables, interceptors, and typed responses.',
      whyItMatters:
        'It standardizes API communication and allows cross-cutting concerns like auth headers and logging.',
      example: `this.http.get<User[]>('/api/users')
  .subscribe(users => this.users = users);`,
      tips: [
        'Use interceptors for auth tokens.',
        'Prefer typed responses for safety.',
      ],
    },
    {
      title: 'RxJS Integration',
      description:
        'Angular heavily uses RxJS for asynchronous operations (HTTP, events, streams).',
      whyItMatters:
        'RxJS helps manage async flows, cancellation, debouncing, and composition.',
      example: `this.search.valueChanges.pipe(
  debounceTime(300),
  switchMap(q => this.api.search(q))
).subscribe(results => this.results = results);`,
      tips: [
        'Use async pipe when possible.',
        'Know when to unsubscribe (or use takeUntil).',
      ],
    },
    {
      title: 'Signals (Modern Reactivity)',
      description:
        'Signals provide a simple, synchronous, reactive state model to manage state and derive values using computed/effect.',
      whyItMatters:
        'It can simplify state management and reduce RxJS usage for local UI state.',
      example: `count = signal(0);
double = computed(() => this.count() * 2);

inc() { this.count.update(v => v + 1); }`,
      tips: [
        'Use signals for local UI state.',
        'Use RxJS for async streams and complex flows.',
      ],
    },
    {
      title: 'Standalone APIs',
      description:
        'Standalone components reduce the need for NgModules in many cases, making Angular apps simpler to structure.',
      whyItMatters:
        'Less boilerplate, easier feature composition, and simpler routing with loadComponent.',
      example: `@Component({
  standalone: true,
  imports: [CommonModule],
  template: 'Hello'
})
export class HelloComponent {}`,
      tips: [
        'Use standalone for new projects.',
        'Keep imports minimal and feature-based.',
      ],
    },
    {
      title: 'Compilation & Performance Tooling',
      description:
        'Angular provides build optimization, tree-shaking, lazy loading, and ahead-of-time compilation.',
      whyItMatters:
        'Better load time, smaller bundles, and improved runtime performance for real-world apps.',
      tips: [
        'Lazy-load feature routes.',
        'Avoid heavy work in templates and change cycles.',
      ],
    },
    {
      title: 'Testing Support',
      description:
        'Angular supports unit testing and integration testing patterns with DI, TestBed, and mocks.',
      whyItMatters:
        'Testing becomes easier because dependencies can be injected and replaced with fakes.',
      tips: [
        'Test services independently.',
        'Test components by mocking dependencies.',
      ],
    },
  ];

  closingNotes: string[] = [
    'Use Angular when you need a strong structure for large applications.',
    'Prefer services for shared logic and keep components focused on UI.',
    'Signals + RxJS together give you powerful tools for state and async handling.',
  ];
}
