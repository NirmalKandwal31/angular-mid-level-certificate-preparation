import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type DefinitionItem = {
  term: string;
  definition: string[]; // 2-3 simple lines
  types?: string[]; // if applicable
  example?: {
    label?: string;
    code: string;
    lang?: 'ts' | 'html';
  }[];
  notes?: string[]; // optional extra short points
};

@Component({
  selector: 'app-is-a-definition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './is-a-definition.component.html',
  styleUrl: './is-a-definition.component.scss',
})
export class IsADefinitionComponent {
  // simple accordion open/close
  openIndex = signal<number | null>(0);

  items = signal<DefinitionItem[]>([
    {
      term: 'Component',
      definition: [
        'A component is a building block of an Angular app.',
        'It controls a part of the UI using template + logic.',
        'Angular screens are made by combining many components.',
      ],
      types: [
        'Root component',
        'Feature/Child component',
        'Reusable/shared component',
      ],
      example: [
        {
          label: 'Component example (TS)',
          lang: 'ts',
          code: `@Component({
  selector: 'app-user',
  template: '<h1>User</h1>'
})
export class UserComponent {}`,
        },
        {
          label: 'Use selector (HTML)',
          lang: 'html',
          code: `<app-user></app-user>`,
        },
      ],
    },

    {
      term: 'Directive',
      definition: [
        'A directive is an Angular feature that changes an element’s behavior or structure.',
        'It can show/hide elements or change styles/behavior.',
        'Directives are used directly inside templates.',
      ],
      types: [
        'Structural (*ngIf, *ngFor)',
        'Attribute (ngClass, ngStyle)',
        'Custom directive',
      ],
      example: [
        {
          label: 'Structural directive (HTML)',
          lang: 'html',
          code: `<p *ngIf="isLoggedIn">Welcome</p>`,
        },
        {
          label: 'Attribute directive (HTML)',
          lang: 'html',
          code: `<div [ngClass]="{ active: isActive }"></div>`,
        },
      ],
    },

    {
      term: 'Selector',
      definition: [
        'A selector is the name used to place a component/directive in HTML.',
        'Angular finds the selector and renders that component there.',
        'It works like a custom HTML tag or attribute.',
      ],
      types: [
        'Element selector (app-user)',
        'Attribute selector ([appHighlight])',
        'Class selector (.myClass)',
      ],
      example: [
        {
          label: 'Element selector use (HTML)',
          lang: 'html',
          code: `<app-user></app-user>`,
        },
        {
          label: 'Attribute selector use (HTML)',
          lang: 'html',
          code: `<p appHighlight>Text</p>`,
        },
      ],
    },

    {
      term: 'Service',
      definition: [
        'A service is a class used to keep reusable logic outside components.',
        'It is commonly used for API calls, shared state, or utility functions.',
        'Services are injected using Angular Dependency Injection (DI).',
      ],
      types: [
        'API/Data service',
        'State/service store',
        'Utility/helper service',
      ],
      example: [
        {
          label: 'Service example (TS)',
          lang: 'ts',
          code: `@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() { /* call API */ }
}`,
        },
        {
          label: 'Inject in component (TS)',
          lang: 'ts',
          code: `constructor(private userService: UserService) {}`,
        },
      ],
    },

    {
      term: 'Asynchronous',
      definition: [
        'Asynchronous means work happens without blocking the UI.',
        'Angular uses async for HTTP calls, timers, streams, etc.',
        'The UI stays responsive while data loads in background.',
      ],
      types: ['Promise-based async', 'Observable-based async (RxJS)'],
      example: [
        {
          label: 'Timer example (TS)',
          lang: 'ts',
          code: `setTimeout(() => console.log('Done'), 1000);`,
        },
      ],
    },

    {
      term: 'Observable',
      definition: [
        'An observable is a stream that can emit data over time.',
        'Angular uses observables in HttpClient and many async patterns.',
        'You subscribe to receive values from it.',
      ],
      types: [
        'Cold observable (common in HTTP)',
        'Hot observable (events, subjects)',
        'HTTP observable (HttpClient)',
      ],
      example: [
        {
          label: 'HTTP observable (TS)',
          lang: 'ts',
          code: `this.http.get('/api/users').subscribe();`,
        },
      ],
      notes: ['In Angular, HttpClient returns an Observable by default.'],
    },

    {
      term: 'Observer',
      definition: [
        'An observer is the object that receives data from an observable.',
        'It can handle next value, error, and completion.',
        'In Angular, it is usually passed to subscribe().',
      ],
      types: ['next handler', 'error handler', 'complete handler'],
      example: [
        {
          label: 'Observer in subscribe (TS)',
          lang: 'ts',
          code: `this.data$.subscribe({
  next: (v) => console.log(v),
  error: (e) => console.log(e),
  complete: () => console.log('done')
});`,
        },
      ],
    },

    {
      term: 'Decorator',
      definition: [
        'A decorator is metadata that tells Angular how to treat a class.',
        'It starts with @ and configures Angular features.',
        'Examples: @Component, @Injectable, @Directive, @Pipe.',
      ],
      types: [
        '@Component',
        '@Injectable',
        '@Directive',
        '@Pipe',
        '@Input/@Output (property decorators)',
      ],
      example: [
        {
          label: 'Decorator example (TS)',
          lang: 'ts',
          code: `@Component({ selector: 'app-home' })`,
        },
      ],
    },

    {
      term: 'Pipes',
      definition: [
        'A pipe transforms data in Angular templates.',
        'It changes how values are displayed (not the original value).',
        'Angular has built-in pipes and you can create custom pipes.',
      ],
      types: ['Built-in pipes (date, currency)', 'Custom pipe'],
      example: [
        {
          label: 'Pipe usage (HTML)',
          lang: 'html',
          code: `{{ name | uppercase }}`,
        },
        {
          label: 'Pipe with argument (HTML)',
          lang: 'html',
          code: `{{ price | currency:'INR' }}`,
        },
      ],
    },

    {
      term: 'Lazy Loading',
      definition: [
        'Lazy loading loads a module/route only when the user visits it.',
        'This reduces initial bundle size and improves app startup speed.',
        'Angular Router supports lazy loading using loadChildren.',
      ],
      types: ['Route-based lazy loading (most common)'],
      example: [
        {
          label: 'Lazy route config (TS)',
          lang: 'ts',
          code: `{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
}`,
        },
      ],
    },

    {
      term: 'Preloading',
      definition: [
        'Preloading loads lazy modules in the background after the app starts.',
        'It keeps fast startup (lazy) but makes next navigation faster.',
        'Angular provides strategies like PreloadAllModules.',
      ],
      types: [
        'NoPreloading',
        'PreloadAllModules',
        'Custom preloading strategy',
      ],
      example: [
        {
          label: 'Router preloading (TS)',
          lang: 'ts',
          code: `provideRouter(routes, withPreloading(PreloadAllModules))`,
        },
      ],
    },

    {
      term: 'Signals',
      definition: [
        'Signals are Angular’s reactive state system.',
        'When a signal value changes, Angular updates the UI automatically.',
        'Signals are simple for state, computed values, and effects.',
      ],
      types: ['signal()', 'computed()', 'effect()'],
      example: [
        {
          label: 'Signal example (TS)',
          lang: 'ts',
          code: `count = signal(0);

inc() {
  this.count.update(v => v + 1);
}`,
        },
        {
          label: 'Use in template (HTML)',
          lang: 'html',
          code: `{{ count() }}`,
        },
      ],
    },
  ]);

  toggle(i: number) {
    this.openIndex.set(this.openIndex() === i ? null : i);
  }

  isOpen(i: number) {
    return this.openIndex() === i;
  }

  trackByIndex = (i: number) => i;
}
