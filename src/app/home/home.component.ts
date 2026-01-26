import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

type Card = {
  title: string;
  description: string;
  route: string;
};

type Category = {
  title: string;
  description: string;
  items: Card[];
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  selectedCategoryIndex = signal<number | null>(null);

  @ViewChild('subTopicsSection') subTopicsSection!: ElementRef<HTMLDivElement>;
  @ViewChild('pageTop') pageTop!: ElementRef<HTMLDivElement>;

  categories = signal<Category[]>([
    {
      title: 'Basics of Angular',
      description: 'Angular fundamentals + ecosystem overview',
      items: [
        {
          title: 'Angular CLI',
          description: 'CLI basics, generate/build/serve.',
          route: 'angular-cli',
        },
        {
          title: 'Angular vs AngularJS',
          description: 'Key differences.',
          route: 'angular-vs-angularjs',
        },
        {
          title: 'Conventions & Style Guide',
          description: 'Conventions and style.',
          route: 'angular-style-guide',
        },
        {
          title: 'Framework Features',
          description: 'DI, routing, forms, etc.',
          route: 'angular-features',
        },
        {
          title: 'Basic of Angular Quiz',
          description: 'Test your Angular basics knowledge.',
          route: 'angular-quiz',
        },
        {
          title: 'Interview Questions (Basics of Angular)',
          description: 'Angular fundamentals interview Q/A with examples',
          route: 'interview-questions/basics-of-angular',
        },
      ],
    },

    {
      title: 'Basics of Components',
      description: 'Components fundamentals and template basics',
      items: [
        {
          title: 'Component Selector',
          description: 'selector usage and best practices.',
          route: 'component-selector',
        },
        {
          title: 'One-way & Two-way Binding',
          description: 'Property/event binding + ngModel.',
          route: 'one-and-two-way-binding',
        },
        {
          title: '@Input and @Output',
          description: 'Parent-child communication.',
          route: 'sharing-data-using-input-output',
        },
        {
          title: 'Template Expressions & Syntax',
          description: 'Interpolation, template rules.',
          route: 'template-syntax',
        },
        {
          title: 'Components Quiz (Mid-Level)',
          description: 'Selectors, binding, @Input/@Output, templates',
          route: 'components-quiz',
        },
        {
          title: 'Interview Questions (Basics of Components)',
          description: 'Most asked component interview Q/A with code',
          route: 'interview-questions/basics-of-components',
        },
      ],
    },

    {
      title: 'Signals',
      description: 'Signals, computed, effect and RxJS interop',
      items: [
        {
          title: 'Create & Update Signals',
          description: 'signal() creation and updates.',
          route: 'sharing-data-using-signal',
        },
        {
          title: 'Characteristics of Signals',
          description: 'Signals reactivity model.',
          route: 'signals-characteristics',
        },
        {
          title: 'computed() and effect()',
          description: 'Derived state + side effects.',
          route: 'signals-computed-effect',
        },
        {
          title: 'RxJS Interoperability',
          description: 'Signals ↔ RxJS interop.',
          route: 'signals-rxjs-interop',
        },
        {
          title: 'Interview Questions (Signals)',
          description: 'Signals interview Q/A with code examples',
          route: 'interview-questions/signals',
        },
      ],
    },

    {
      title: 'Intermediate Components',
      description: 'More component concepts + standalone approach',
      items: [
        {
          title: 'Template Reference Variables',
          description: '#ref variables usage.',
          route: 'template-ref-vars',
        },
        {
          title: 'Lifecycle Hooks',
          description: 'ngOnInit, ngOnChanges, ngOnDestroy.',
          route: 'lifecycle-hooks',
        },
        {
          title: 'ViewChild',
          description: 'Decorators and equivalents.',
          route: 'view-child-decorator',
        },
        {
          title: 'ContentChild',
          description: 'Decorators and equivalents.',
          route: 'content-child-decorator',
        },
        {
          title: 'ng-template vs ng-container',
          description: 'Rendering vs grouping.',
          route: 'ng-template-vs-ng-container',
        },
        {
          title: 'Standalone Components',
          description: 'Standalone components & imports.',
          route: 'standalone-components',
        },
        {
          title: 'Intermediate Components Quiz (Mid-Level)',
          description:
            'Lifecycle, ViewChild/ContentChild, templates, standalone',
          route: 'intermediate-components-quiz',
        },
        {
          title: 'Interview Questions (Intermediate Components)',
          description: 'Mid/advanced component interview Q/A with code',
          route: 'interview-questions/intermediate-components',
        },
      ],
    },

    {
      title: 'TypeScript',
      description: 'Core TS concepts needed in Angular',
      items: [
        {
          title: 'What is TypeScript?',
          description: 'Why TS, types, tooling.',
          route: 'what-is-typescript',
        },
        {
          title: 'Variables, Arrays & Classes',
          description: 'TS syntax basics.',
          route: 'ts-basics',
        },
        {
          title: 'Backticks & Template Strings',
          description: 'Template literals.',
          route: 'ts-template-strings',
        },
        {
          title: 'TypeScript Quiz (Mid-Level)',
          description: 'Core TS: types, arrays, classes, template literals',
          route: 'typescript-quiz',
        },
        {
          title: 'Interview Questions (TypeScript Core)',
          description: 'TS fundamentals interview Q/A with examples',
          route: 'interview-questions/typescript-core',
        },
      ],
    },

    {
      title: 'Intermediate TypeScript',
      description: 'More TS features used in real apps',
      items: [
        {
          title: 'Union Types',
          description: 'Union + Partial/Pick/Omit.',
          route: 'union-types-example',
        },
        {
          title: 'Utility Types',
          description: 'WIll Update',
          route: 'utility-types-example',
        },
        {
          title: 'Constructor Syntax Options',
          description: 'Parameter properties etc.',
          route: 'constructor-syntax-options',
        },
        {
          title: 'Enums',
          description: 'Enum basics and usage.',
          route: 'enums-example',
        },
        {
          title: 'Nullish Coalescing Operator',
          description: '?? operator usage.',
          route: 'null-coalescing-operator-example',
        },
        {
          title: 'Intermediate TypeScript Quiz (Mid-Level)',
          description: 'Unions, utility types, enums, ??, constructor props',
          route: 'intermediate-typescript-quiz',
        },
        {
          title: 'Interview Questions (Intermediate TypeScript)',
          description: 'Advanced TS interview Q/A with code',
          route: 'interview-questions/intermediate-typescript',
        },
      ],
    },

    {
      title: 'Intermediate JavaScript',
      description: 'JS concepts that matter in Angular/TS',
      items: [
        {
          title: 'Scope with let/const',
          description: 'Block scope + hoisting basics.',
          route: 'let-var-example',
        },
        {
          title: 'Destructuring Using Rest Operator',
          description: 'Array/object destructuring.',
          route: 'rest-operator-example',
        },
        {
          title: 'Destructuring Spread Assignment',
          description: 'Array/object destructuring.',
          route: 'spread-operator-example',
        },
        {
          title: 'Arrow Functions',
          description: '() => syntax and this.',
          route: 'arrow-functions',
        },
        {
          title: 'Intermediate JavaScript Quiz (Mid-Level)',
          description: 'Scope, hoisting, rest/spread, arrow functions',
          route: 'intermediate-javascript-quiz',
        },
        {
          title: 'Interview Questions (Intermediate JavaScript)',
          description: 'Important JS interview Q/A for Angular devs',
          route: 'interview-questions/intermediate-javascript',
        },
      ],
    },

    {
      title: 'Services',
      description: 'DI + services usage patterns',
      items: [
        {
          title: 'Dependency Injection Basics',
          description: 'How DI works in Angular.',
          route: 'dependency-injection-basics',
        },
        {
          title: 'Inject Service into Component',
          description: 'constructor inject / inject().',
          route: 'inject-service',
        },
        {
          title: 'When to Use Services',
          description: 'Shared logic/state/data.',
          route: 'when-to-use-services',
        },
        {
          title: 'Services & DI Quiz (Mid-Level)',
          description:
            'DI basics, injecting services, provider scope, best practices',
          route: 'services-quiz',
        },
        {
          title: 'Interview Questions (Services & DI)',
          description: 'DI/services interview Q/A with patterns',
          route: 'interview-questions/services',
        },
      ],
    },

    {
      title: 'Basics of Directives',
      description: 'Core directives and categories',
      items: [
        {
          title: 'ngIf and ngFor',
          description: 'Structural directives basics.',
          route: 'ngif-ngfor-basics',
        },
        {
          title: 'Structural vs Attribute',
          description: 'Difference + examples.',
          route: 'structural-vs-attribute',
        },
        {
          title: 'Common Directives',
          description: 'ngClass, ngStyle etc.',
          route: 'attribute-directives-example',
        },
        {
          title: 'Directives Quiz (Basics)',
          description: 'ngIf/ngFor, structural vs attribute, ngClass/ngStyle',
          route: 'directives-quiz',
        },
        {
          title: 'Interview Questions (Directives Basics)',
          description: 'Directive fundamentals Q/A with code',
          route: 'interview-questions/basic-directives',
        },
      ],
    },

    {
      title: 'Intermediate Directives',
      description: 'Host bindings + advanced patterns',
      items: [
        {
          title: 'HostListener & HostBinding',
          description: 'Listen events + bind props.',
          route: 'host-listener-example',
        },
        {
          title: 'Advanced ngIf/ngFor',
          description: 'trackBy, else, templates.',
          route: 'advanced-ngif-ngfor',
        },
        {
          title: 'Intermediate Directives Quiz (Mid-Level)',
          description: 'HostListener/HostBinding + advanced ngIf/ngFor',
          route: 'intermediate-directives-quiz',
        },
        {
          title: 'Interview Questions (Intermediate Directives)',
          description: 'Advanced directives Q/A with examples',
          route: 'interview-questions/intermediate-directives',
        },
      ],
    },

    {
      title: 'Basics of Routing',
      description: 'Router setup and everyday routing',
      items: [
        {
          title: 'RouterModule Configuration',
          description: 'Basic routes config.',
          route: 'routermodule-basics',
        },
        {
          title: 'RouterOutlet & RouterLink',
          description: 'Outlet + routerLink.',
          route: 'routeroutlet-routerlink',
        },
        {
          title: 'Router Guards',
          description: 'Auth guards and basics.',
          route: 'router-guards-basics',
        },
        {
          title: 'Routing Quiz (Basics)',
          description: 'Router setup, routerLink/outlet, guards',
          route: 'routing-quiz',
        },
        {
          title: 'Interview Questions (Routing Basics)',
          description: 'Routing fundamentals Q/A with examples',
          route: 'interview-questions/basic-routing',
        },
      ],
    },

    {
      title: 'Intermediate Routing',
      description: 'Performance + advanced routing patterns',
      items: [
        {
          title: 'Lazy-loading',
          description: 'Load on demand.',
          route: 'lazy-loading',
        },
        {
          title: 'Functional Guards',
          description: 'Function-based guards.',
          route: 'functional-guards',
        },
        {
          title: 'HashLocationStrategy',
          description: 'Hash based routing.',
          route: 'hash-location-strategy',
        },
        {
          title: 'Read Route Parameters',
          description: 'params/queryParams.',
          route: 'read-route-params',
        },
        {
          title: 'Intermediate Routing Quiz (Mid-Level)',
          description: 'Lazy loading, functional guards, hash routing, params',
          route: 'intermediate-routing-quiz',
        },
        {
          title: 'Interview Questions (Intermediate Routing)',
          description: 'Advanced routing Q/A with code',
          route: 'interview-questions/intermediate-routing',
        },
      ],
    },

    {
      title: 'RxJS',
      description: 'Observables, operators, subscriptions',
      items: [
        {
          title: 'Observables Basics',
          description: 'What & how to use.',
          route: 'rxjs-observables-example',
        },
        {
          title: 'Operators & Syntax',
          description: 'pipe, map, switchMap.',
          route: 'rxjs-operators',
        },
        {
          title: 'Unsubscribe Strategies',
          description: 'takeUntil, async pipe.',
          route: 'rxjs-unsubscribe',
        },
        {
          title: 'RxJS Quiz (Mid-Level)',
          description: 'Observables, operators, unsubscribe patterns',
          route: 'rxjs-quiz',
        },
        {
          title: 'Interview Questions (RxJS)',
          description: 'RxJS interview Q/A with examples',
          route: 'interview-questions/rxjs',
        },
      ],
    },

    {
      title: 'Basics of Pipes',
      description: 'Using pipes and creating custom pipes',
      items: [
        {
          title: 'Common Angular Pipes',
          description: 'date, currency, percent.',
          route: 'common-pipes',
        },
        {
          title: 'Pipe Syntax & Params',
          description: 'args pass karna.',
          route: 'pipe-syntax-params',
        },
        {
          title: 'When to Use Pipes',
          description: 'Where pipes make sense.',
          route: 'when-to-use-pipes',
        },
        {
          title: 'Custom Pipes',
          description: 'Create your own pipe.',
          route: 'custom-pipes',
        },
        {
          title: 'Pipes Quiz (Basics)',
          description: 'Built-in pipes, syntax/params, custom pipes',
          route: 'pipes-quiz',
        },
        {
          title: 'Interview Questions (Pipes)',
          description: 'Pipes interview Q/A with examples',
          route: 'interview-questions/pipes',
        },
      ],
    },

    {
      title: 'Forms',
      description: 'Forms basics + template vs reactive',
      items: [
        {
          title: 'Forms CSS Classes',
          description: 'ng-valid/ng-invalid etc.',
          route: 'forms-css-classes',
        },
        {
          title: 'FormControl',
          description: 'FormControl + valueChanges.',
          route: 'formcontrol-basics',
        },
        {
          title: 'Template vs Reactive Forms',
          description: 'Differences + when to use.',
          route: 'template-vs-reactive-forms',
        },
        {
          title: 'Forms Quiz (Basics)',
          description: 'CSS classes, FormControl, template vs reactive',
          route: 'forms-quiz',
        },
        {
          title: 'Interview Questions (Forms)',
          description: 'Forms interview Q/A with examples',
          route: 'interview-questions/forms',
        },
      ],
    },

    {
      title: 'NG Modules',
      description: 'NgModule basics + AppModule',
      items: [
        {
          title: 'NgModule Decorator Properties',
          description: 'declarations/imports/providers.',
          route: 'ngmodule-properties',
        },
        {
          title: 'Main AppModule',
          description: 'AppModule role and bootstrap.',
          route: 'main-appmodule',
        },
        {
          title: 'NG Modules Quiz (Basics)',
          description: 'NgModule props + AppModule role',
          route: 'ng-modules-quiz',
        },
        {
          title: 'Interview Questions (NG Modules)',
          description: 'NgModule interview Q/A with examples',
          route: 'interview-questions/ng-modules',
        },
      ],
    },
    {
      title: 'IS A Definition',
      description: 'Basic Definition',
      items: [
        {
          title: 'IS A Definition',
          description: 'is a definition',
          route: 'is-a-definition',
        },
      ],
    },
    {
      title: 'Practice Projects',
      description: 'Few Practice Projects',
      items: [
        {
          title: 'crud operation example',
          description: 'crud operation example',
          route: 'crud-operation-example',
        },
        {
          title: 'crud with reactive forms example',
          description: 'crud-with-reactive-forms-example',
          route: 'crud-with-reactive-forms-example',
        },
        {
          title: 'tesla-project',
          description: 'tesla-project',
          route: 'tesla-project',
        },
        {
          title: 'tesla-project-without-signal',
          description: 'tesla-project',
          route: 'tesla-project-without-signal',
        },
      ],
    },
  ]);

  constructor(private router: Router) { }

  toggleCategory(i: number) {
    const current = this.selectedCategoryIndex();
    const next = current === i ? null : i;

    this.selectedCategoryIndex.set(next);

    // if opening a category -> smooth scroll to sub topics
    if (next !== null) {
      setTimeout(() => {
        this.subTopicsSection?.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
