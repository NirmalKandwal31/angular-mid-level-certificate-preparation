import { TopicCategory } from '../models/topic.model';

export const TOPIC_CATEGORIES: TopicCategory[] = [
    {
        title: 'Basics of Angular',
        description: 'Angular fundamentals, architecture, tooling, and ecosystem overview.',
        items: [
            {
                title: 'Angular CLI',
                description: 'CLI basics for creating, serving, generating, and building Angular apps.',
                route: 'angular-cli',
                overview:
                    'Angular CLI is the official command-line tool used to create, develop, test, and maintain Angular applications in a consistent way.',
                keyPoints: [
                    'ng new creates a new Angular application with recommended defaults',
                    'ng serve runs the application locally with live reload',
                    'ng generate helps scaffold components, services, pipes, directives, and more',
                    'ng build creates optimized output for deployment',
                ],
                interviewTips: [
                    'Explain how Angular CLI improves productivity and consistency',
                    'Mention common commands like ng new, ng serve, ng generate, and ng build',
                ],
            },
            {
                title: 'Angular vs AngularJS',
                description: 'Key architectural and ecosystem differences between Angular and AngularJS.',
                route: 'angular-vs-angularjs',
                overview:
                    'Angular is a modern TypeScript-based framework built around components, while AngularJS was the older JavaScript-based framework built around controllers and scopes.',
                keyPoints: [
                    'Angular uses components; AngularJS used controllers and scope',
                    'Angular supports TypeScript and modern tooling',
                    'Angular has better performance, structure, and long-term maintainability',
                ],
                interviewTips: [
                    'Focus on architecture, performance, and tooling differences',
                    'Avoid saying Angular is just a newer version of AngularJS',
                ],
            },
            {
                title: 'Conventions & Style Guide',
                description: 'Naming conventions, file organization, and Angular style guide best practices.',
                route: 'angular-style-guide',
                overview:
                    'Angular style conventions help teams write predictable, scalable, and maintainable codebases across features and modules.',
                keyPoints: [
                    'Keep files and symbols consistently named',
                    'Use feature-based organization for larger apps',
                    'Prefer readable templates and strongly typed code',
                ],
                interviewTips: [
                    'Mention maintainability and team consistency',
                    'Relate style conventions to real-world collaboration',
                ],
            },
            {
                title: 'Framework Features',
                description: 'Core framework capabilities like DI, routing, forms, pipes, and templates.',
                route: 'angular-features',
                overview:
                    'Angular provides a complete framework experience with dependency injection, routing, forms, HTTP support, pipes, directives, and strong tooling.',
                keyPoints: [
                    'Angular is a full framework, not only a UI library',
                    'Built-in features reduce the need for many external packages',
                    'The framework encourages structured enterprise-grade development',
                ],
                interviewTips: [
                    'Explain Angular as an opinionated framework',
                    'Mention a few core built-in features confidently',
                ],
            },
            {
                title: 'Basic of Angular Quiz',
                description: 'Quick revision quiz for Angular fundamentals.',
                route: 'angular-quiz',
            },
            {
                title: 'Interview Questions (Basics of Angular)',
                description: 'Interview-focused questions and answers on Angular fundamentals.',
                route: 'interview-questions/basics-of-angular',
            },
        ],
    },

    {
        title: 'Basics of Components',
        description: 'Component fundamentals, bindings, communication, and template basics.',
        items: [
            {
                title: 'Component Selector',
                description: 'Selector usage, naming conventions, and best practices.',
                route: 'component-selector',
                overview:
                    'A selector defines how Angular identifies and renders a component in templates.',
                keyPoints: [
                    'Selectors are configured in the @Component decorator',
                    'Element selectors are common for components',
                    'Selector naming should follow Angular conventions',
                ],
                interviewTips: [
                    'Explain the difference between element and attribute selectors',
                    'Mention why naming consistency matters in large apps',
                ],
            },
            {
                title: 'One-way & Two-way Binding',
                description: 'Property binding, event binding, interpolation, and ngModel basics.',
                route: 'one-and-two-way-binding',
                overview:
                    'Angular supports one-way data flow through property and event bindings, and two-way binding in specific cases like forms.',
                keyPoints: [
                    'Interpolation displays component data in templates',
                    'Property binding sends data from component to view',
                    'Event binding sends actions from view to component',
                    'Two-way binding combines property and event binding patterns',
                ],
                interviewTips: [
                    'Differentiate one-way and two-way binding clearly',
                    'Mention ngModel as a common two-way binding example',
                ],
            },
            {
                title: '@Input and @Output',
                description: 'Parent-child communication between Angular components.',
                route: 'sharing-data-using-input-output',
                overview:
                    '@Input is used to pass data into a child component, while @Output is used to emit events from child to parent.',
                keyPoints: [
                    '@Input supports one-way data flow into child components',
                    '@Output typically uses EventEmitter for child-to-parent communication',
                    'This pattern is common in reusable component design',
                ],
                interviewTips: [
                    'Give a practical parent-child example',
                    'Mention unidirectional data flow clearly',
                ],
            },
            {
                title: 'Template Expressions & Syntax',
                description: 'Interpolation, expressions, and common template rules.',
                route: 'template-syntax',
                overview:
                    'Angular templates support expressions for rendering data and responding to interactions while keeping logic limited and readable.',
                keyPoints: [
                    'Templates should remain simple and presentation-focused',
                    'Avoid heavy logic directly in templates',
                    'Use component properties and methods carefully for clarity',
                ],
                interviewTips: [
                    'Mention readability and performance concerns',
                    'Explain why templates should not become logic-heavy',
                ],
            },
            {
                title: 'Components Quiz (Mid-Level)',
                description: 'Quiz covering selectors, bindings, component communication, and templates.',
                route: 'components-quiz',
            },
            {
                title: 'Interview Questions (Basics of Components)',
                description: 'Most asked component interview questions with practical examples.',
                route: 'interview-questions/basics-of-components',
            },
        ],
    },

    {
        title: 'Signals',
        description: 'Signals, computed, effect, and RxJS interoperability.',
        items: [
            {
                title: 'Create & Update Signals',
                description: 'signal() creation, reading, and updating values.',
                route: 'sharing-data-using-signal',
                overview:
                    'Signals provide a simple reactive state model in Angular for reading and updating values directly.',
                keyPoints: [
                    'Create a signal using signal(initialValue)',
                    'Read a signal by calling it like a function',
                    'Update a signal using set() or update()',
                ],
                interviewTips: [
                    'Explain how signals simplify local state',
                    'Mention the difference between reading and updating a signal',
                ],
            },
            {
                title: 'Characteristics of Signals',
                description: 'Signals reactivity model and practical behavior.',
                route: 'signals-characteristics',
                overview:
                    'Signals are synchronous, dependency-tracked reactive primitives designed to make local state more predictable and ergonomic.',
                keyPoints: [
                    'Signals automatically track reactive dependencies',
                    'They are useful for local and component-level state',
                    'They encourage explicit and readable reactive code',
                ],
                interviewTips: [
                    'Mention dependency tracking and predictable updates',
                    'Do not oversell signals as a universal replacement for everything',
                ],
            },
            {
                title: 'computed() and effect()',
                description: 'Derived state and side effects using Angular signals.',
                route: 'signals-computed-effect',
                overview:
                    'computed() creates derived values from signals, while effect() runs side effects whenever dependent signals change.',
                keyPoints: [
                    'computed() is for derived reactive state',
                    'effect() is for side effects, not for deriving data',
                    'Both automatically track dependencies',
                ],
                interviewTips: [
                    'Explain the difference between derived state and side effects',
                    'Avoid saying effect() should be used for everything',
                ],
            },
            {
                title: 'RxJS Interoperability',
                description: 'How signals and RxJS work together in Angular.',
                route: 'signals-rxjs-interop',
                overview:
                    'Angular supports interoperation between signals and RxJS so existing observable-driven code can coexist with newer signal-based state patterns.',
                keyPoints: [
                    'Signals are useful for local reactive state',
                    'RxJS remains valuable for streams, async events, and operators',
                    'Interop utilities help connect signals and observables cleanly',
                ],
                interviewTips: [
                    'Explain coexistence instead of competition',
                    'Mention when RxJS still makes more sense than signals',
                ],
            },
            {
                title: 'Interview Questions (Signals)',
                description: 'Interview-focused signals questions with practical coding context.',
                route: 'interview-questions/signals',
            },
        ],
    },

    {
        title: 'Intermediate Components',
        description: 'Lifecycle, references, advanced templates, and standalone component design.',
        items: [
            {
                title: 'Template Reference Variables',
                description: 'Using #ref variables inside Angular templates.',
                route: 'template-ref-vars',
                overview:
                    'Template reference variables provide direct access to DOM elements, components, or directives from within a template.',
                keyPoints: [
                    'Declared using the # syntax in templates',
                    'Often used with forms, inputs, and local template interaction',
                    'Useful for simple template-level access patterns',
                ],
                interviewTips: [
                    'Give a form input or DOM access example',
                    'Do not confuse template refs with @ViewChild',
                ],
            },
            {
                title: 'Lifecycle Hooks',
                description: 'ngOnInit, ngOnChanges, ngOnDestroy, and related lifecycle behavior.',
                route: 'lifecycle-hooks',
                overview:
                    'Lifecycle hooks let Angular components react to creation, change detection, view initialization, and destruction phases.',
                keyPoints: [
                    'ngOnInit is commonly used for initialization work',
                    'ngOnChanges reacts to input changes',
                    'ngOnDestroy is important for cleanup',
                ],
                interviewTips: [
                    'Mention common real-life use cases for ngOnInit and ngOnDestroy',
                    'Explain cleanup responsibilities clearly',
                ],
            },
            {
                title: 'ViewChild',
                description: 'Accessing child components, directives, and DOM references from a component.',
                route: 'view-child-decorator',
                overview:
                    'ViewChild allows a component to query and interact with a child component, directive, or template element after view initialization.',
                keyPoints: [
                    'Useful for child component access and DOM references',
                    'Often paired with ngAfterViewInit depending on the use case',
                    'Should be used thoughtfully to avoid tight coupling',
                ],
                interviewTips: [
                    'Explain timing and when the reference becomes available',
                    'Mention when direct child interaction is justified',
                ],
            },
            {
                title: 'ContentChild',
                description: 'Accessing projected content in Angular components.',
                route: 'content-child-decorator',
                overview:
                    'ContentChild is used to query projected content provided through ng-content, rather than content declared inside the component view itself.',
                keyPoints: [
                    'Used with content projection scenarios',
                    'Different from ViewChild because it targets projected content',
                    'Useful in reusable wrapper and layout components',
                ],
                interviewTips: [
                    'Clearly distinguish ViewChild vs ContentChild',
                    'Mention ng-content to ground the explanation',
                ],
            },
            {
                title: 'ng-template vs ng-container',
                description: 'Differences between rendering templates and grouping without extra DOM.',
                route: 'ng-template-vs-ng-container',
                overview:
                    'ng-template defines a template fragment that can be rendered conditionally or dynamically, while ng-container groups content without adding extra DOM nodes.',
                keyPoints: [
                    'ng-template is not rendered until used',
                    'ng-container adds no extra wrapper element',
                    'Both are common in structural directive patterns',
                ],
                interviewTips: [
                    'Mention no-extra-DOM benefit of ng-container',
                    'Give a conditional rendering example with ng-template',
                ],
            },
            {
                title: 'Standalone Components',
                description: 'Standalone component architecture and import-based composition.',
                route: 'standalone-components',
                overview:
                    'Standalone components remove the need for NgModule declarations and rely on direct imports for dependencies.',
                keyPoints: [
                    'Standalone components simplify application structure',
                    'Dependencies are imported directly into the component',
                    'This improves clarity and can reduce module complexity',
                ],
                interviewTips: [
                    'Explain the benefit in modern Angular apps',
                    'Mention migration and readability advantages',
                ],
            },
            {
                title: 'Intermediate Components Quiz (Mid-Level)',
                description: 'Quiz covering lifecycle hooks, decorators, advanced templates, and standalone patterns.',
                route: 'intermediate-components-quiz',
            },
            {
                title: 'Interview Questions (Intermediate Components)',
                description: 'Advanced component interview questions with mid-level examples.',
                route: 'interview-questions/intermediate-components',
            },
        ],
    },

    {
        title: 'TypeScript',
        description: 'Core TypeScript concepts required for Angular development.',
        items: [
            {
                title: 'What is TypeScript?',
                description: 'Why TypeScript matters in Angular and modern frontend apps.',
                route: 'what-is-typescript',
                overview:
                    'TypeScript is a statically typed superset of JavaScript that improves tooling, readability, and maintainability in large applications.',
                keyPoints: [
                    'TypeScript adds static typing on top of JavaScript',
                    'Angular uses TypeScript heavily for structure and tooling',
                    'It improves IDE support, refactoring, and developer confidence',
                ],
                interviewTips: [
                    'Mention maintainability and safer refactoring',
                    'Do not describe TypeScript as a completely different language from JavaScript',
                ],
            },
            {
                title: 'Variables, Arrays & Classes',
                description: 'Core TypeScript syntax and object-oriented basics.',
                route: 'ts-basics',
            },
            {
                title: 'Backticks & Template Strings',
                description: 'Using template literals for readable string construction.',
                route: 'ts-template-strings',
            },
            {
                title: 'TypeScript Quiz (Mid-Level)',
                description: 'Revision quiz for core TypeScript syntax and language basics.',
                route: 'typescript-quiz',
            },
            {
                title: 'Interview Questions (TypeScript Core)',
                description: 'Interview-oriented TypeScript questions with examples.',
                route: 'interview-questions/typescript-core',
            },
        ],
    },

    {
        title: 'Intermediate TypeScript',
        description: 'Advanced TypeScript features used in real Angular applications.',
        items: [
            {
                title: 'Union Types',
                description: 'Using unions and shaping safer flexible APIs.',
                route: 'union-types-example',
                overview:
                    'Union types allow a value to be one of multiple types and are useful when modeling flexible but still type-safe APIs.',
                keyPoints: [
                    'Union types improve flexibility without losing type safety',
                    'They are often combined with narrowing logic',
                    'They are common in Angular forms, APIs, and config objects',
                ],
                interviewTips: [
                    'Mention type narrowing while explaining unions',
                    'Give a practical example instead of only the syntax',
                ],
            },
            {
                title: 'Utility Types',
                description: 'Using Partial, Pick, Omit, and similar utility helpers.',
                route: 'utility-types-example',
                overview:
                    'TypeScript utility types help derive new types from existing ones, reducing duplication and improving consistency.',
                keyPoints: [
                    'Partial makes all properties optional',
                    'Pick and Omit help shape custom subsets of types',
                    'Utility types are useful in forms, DTOs, and API contracts',
                ],
                interviewTips: [
                    'Explain where utility types reduce duplication',
                    'Use a real data model example if asked',
                ],
            },
            {
                title: 'Constructor Syntax Options',
                description: 'Parameter properties and TypeScript constructor shorthand.',
                route: 'constructor-syntax-options',
            },
            {
                title: 'Enums',
                description: 'Enum basics, use cases, and trade-offs.',
                route: 'enums-example',
            },
            {
                title: 'Nullish Coalescing Operator',
                description: 'Using ?? safely for null and undefined fallbacks.',
                route: 'null-coalescing-operator-example',
            },
            {
                title: 'Intermediate TypeScript Quiz (Mid-Level)',
                description: 'Quiz covering unions, utility types, enums, and TS patterns.',
                route: 'intermediate-typescript-quiz',
            },
            {
                title: 'Interview Questions (Intermediate TypeScript)',
                description: 'Interview-focused advanced TypeScript questions for Angular developers.',
                route: 'interview-questions/intermediate-typescript',
            },
        ],
    },

    {
        title: 'Intermediate JavaScript',
        description: 'JavaScript fundamentals that matter in Angular and TypeScript projects.',
        items: [
            {
                title: 'Scope with let/const',
                description: 'Block scope, hoisting basics, and variable behavior.',
                route: 'let-var-example',
            },
            {
                title: 'Destructuring Using Rest Operator',
                description: 'Array and object destructuring with rest syntax.',
                route: 'rest-operator-example',
            },
            {
                title: 'Destructuring Spread Assignment',
                description: 'Using spread syntax for copying and merging values.',
                route: 'spread-operator-example',
            },
            {
                title: 'Arrow Functions',
                description: 'Arrow function syntax and lexical this behavior.',
                route: 'arrow-functions',
                overview:
                    'Arrow functions provide concise syntax and lexical this binding, which makes them useful in many callback and functional patterns.',
                keyPoints: [
                    'Arrow functions inherit this from the surrounding scope',
                    'They are commonly used in array methods and callbacks',
                    'They are not ideal in every situation, especially where function context matters differently',
                ],
                interviewTips: [
                    'Mention lexical this clearly',
                    'Compare briefly with traditional functions',
                ],
            },
            {
                title: 'Intermediate JavaScript Quiz (Mid-Level)',
                description: 'Quiz on scope, destructuring, spread, and arrow functions.',
                route: 'intermediate-javascript-quiz',
            },
            {
                title: 'Interview Questions (Intermediate JavaScript)',
                description: 'Interview questions covering JavaScript topics relevant to Angular developers.',
                route: 'interview-questions/intermediate-javascript',
            },
        ],
    },

    {
        title: 'Services',
        description: 'Dependency injection, service design, and shared logic patterns.',
        items: [
            {
                title: 'Dependency Injection Basics',
                description: 'How Angular DI works and why it matters.',
                route: 'dependency-injection-basics',
                overview:
                    'Dependency Injection is a core Angular pattern that provides services and dependencies to classes without manually creating them.',
                keyPoints: [
                    'Angular injector resolves and provides dependencies automatically',
                    'Services are commonly injected into components and other services',
                    'DI improves modularity, loose coupling, and testability',
                ],
                interviewTips: [
                    'Explain DI in simple language first',
                    'Mention constructor injection and inject() as practical patterns',
                ],
            },
            {
                title: 'Inject Service into Component',
                description: 'Constructor injection and inject() usage in Angular.',
                route: 'inject-service',
                overview:
                    'Services can be injected into Angular components either using constructor injection or the inject() function in modern Angular.',
                keyPoints: [
                    'Constructor injection has been a common Angular pattern for years',
                    'inject() is the newer function-based approach',
                    'Both patterns rely on Angular DI under the hood',
                ],
                interviewTips: [
                    'Mention when inject() is convenient',
                    'Explain that both approaches still use Angular’s DI system',
                ],
            },
            {
                title: 'When to Use Services',
                description: 'Where services fit in component architecture and shared logic.',
                route: 'when-to-use-services',
                overview:
                    'Services are useful when logic, state, or data access should be shared, reused, or kept separate from view components.',
                keyPoints: [
                    'Use services for API access, shared logic, and reusable business behavior',
                    'Keep components focused on UI and interaction',
                    'Services improve separation of concerns',
                ],
                interviewTips: [
                    'Use a real project example like shared API or auth logic',
                    'Mention maintainability benefits',
                ],
            },
            {
                title: 'Services & DI Quiz (Mid-Level)',
                description: 'Quiz on DI basics, service usage, provider scope, and best practices.',
                route: 'services-quiz',
            },
            {
                title: 'Interview Questions (Services & DI)',
                description: 'Interview questions on Angular services and dependency injection.',
                route: 'interview-questions/services',
            },
        ],
    },

    {
        title: 'Basics of Directives',
        description: 'Structural and attribute directives used in everyday Angular templates.',
        items: [
            {
                title: 'ngIf and ngFor',
                description: 'Structural directive basics for conditional and repeated rendering.',
                route: 'ngif-ngfor-basics',
                overview:
                    'ngIf is used for conditional rendering, while ngFor is used to repeat template blocks over collections.',
                keyPoints: [
                    'Both are structural directives',
                    'They shape how content is rendered in the DOM',
                    'They are among the most common Angular template features',
                ],
                interviewTips: [
                    'Explain structural directives as DOM-shaping directives',
                    'Give a simple list and conditional rendering example',
                ],
            },
            {
                title: 'Structural vs Attribute',
                description: 'Difference between structural and attribute directives.',
                route: 'structural-vs-attribute',
            },
            {
                title: 'Common Directives',
                description: 'Frequently used directives like ngClass and ngStyle.',
                route: 'attribute-directives-example',
            },
            {
                title: 'Directives Quiz (Basics)',
                description: 'Quick revision quiz on common Angular directives.',
                route: 'directives-quiz',
            },
            {
                title: 'Interview Questions (Directives Basics)',
                description: 'Directive-focused interview questions with practical examples.',
                route: 'interview-questions/basic-directives',
            },
        ],
    },

    {
        title: 'Intermediate Directives',
        description: 'Host bindings, event listeners, and advanced template patterns.',
        items: [
            {
                title: 'HostListener & HostBinding',
                description: 'Reacting to host events and binding host properties.',
                route: 'host-listener-example',
                overview:
                    'HostListener and HostBinding are commonly used in directives to listen to host events and bind values directly to the host element.',
                keyPoints: [
                    'HostListener is used to respond to host-side events',
                    'HostBinding is used to bind values to the host element',
                    'These patterns are common in reusable directives',
                ],
                interviewTips: [
                    'Use a hover/highlight directive example',
                    'Explain why directives are useful for reusable DOM behavior',
                ],
            },
            {
                title: 'Advanced ngIf/ngFor',
                description: 'Using else, templates, and trackBy effectively.',
                route: 'advanced-ngif-ngfor',
                overview:
                    'Advanced usage of ngIf and ngFor includes better rendering patterns, conditional templates, and performance-friendly list rendering.',
                keyPoints: [
                    'trackBy can improve list rendering performance',
                    'ngIf can work with else templates for cleaner template structure',
                    'Advanced patterns improve readability and performance together',
                ],
                interviewTips: [
                    'Mention trackBy in performance discussions',
                    'Give a list rendering example if asked',
                ],
            },
            {
                title: 'Intermediate Directives Quiz (Mid-Level)',
                description: 'Quiz on HostListener, HostBinding, and advanced directive usage.',
                route: 'intermediate-directives-quiz',
            },
            {
                title: 'Interview Questions (Intermediate Directives)',
                description: 'Advanced directive interview questions with examples.',
                route: 'interview-questions/intermediate-directives',
            },
        ],
    },

    {
        title: 'Basics of Routing',
        description: 'Angular router setup and day-to-day routing features.',
        items: [
            {
                title: 'RouterModule Configuration',
                description: 'Defining and organizing basic route configuration.',
                route: 'routermodule-basics',
                overview:
                    'Angular routing starts with route configuration, mapping paths to components or lazy-loaded features.',
                keyPoints: [
                    'Routes define how URLs map to UI',
                    'Router configuration is central to navigation flow',
                    'Well-structured routes improve scalability',
                ],
                interviewTips: [
                    'Explain routes as path-to-component mapping',
                    'Mention module-based or standalone router setup depending on app style',
                ],
            },
            {
                title: 'RouterOutlet & RouterLink',
                description: 'Using router-outlet and routerLink in templates.',
                route: 'routeroutlet-routerlink',
                overview:
                    'router-outlet acts as a placeholder for route content, while routerLink is used for navigation within templates.',
                keyPoints: [
                    'router-outlet defines where routed content should render',
                    'routerLink is Angular’s declarative navigation mechanism',
                    'Both are foundational to Angular navigation',
                ],
                interviewTips: [
                    'Give a header-nav example',
                    'Explain the separation between route config and route rendering',
                ],
            },
            {
                title: 'Router Guards',
                description: 'Protecting routes and controlling navigation.',
                route: 'router-guards-basics',
                overview:
                    'Router guards let Angular decide whether a user can access, leave, or load a route based on defined logic.',
                keyPoints: [
                    'Guards are often used for auth, role-based access, and flow control',
                    'They help centralize route access logic',
                    'Functional guards are common in modern Angular',
                ],
                interviewTips: [
                    'Use auth or admin-area examples',
                    'Mention that guards improve control, not true backend security',
                ],
            },
            {
                title: 'Routing Quiz (Basics)',
                description: 'Quick revision quiz on Angular routing basics.',
                route: 'routing-quiz',
            },
            {
                title: 'Interview Questions (Routing Basics)',
                description: 'Interview questions covering routing fundamentals.',
                route: 'interview-questions/basic-routing',
            },
        ],
    },

    {
        title: 'Intermediate Routing',
        description: 'Performance-focused and advanced routing patterns.',
        items: [
            {
                title: 'Lazy-loading',
                description: 'Load feature code on demand for better performance.',
                route: 'lazy-loading',
                overview:
                    'Lazy loading improves initial application performance by loading feature code only when the related route is accessed.',
                keyPoints: [
                    'Reduces initial bundle size',
                    'Improves first-load performance in larger apps',
                    'Commonly used for feature-based route organization',
                ],
                interviewTips: [
                    'Mention performance and scalability together',
                    'Explain lazy loading with a real feature example',
                ],
            },
            {
                title: 'Functional Guards',
                description: 'Modern function-based route guard patterns.',
                route: 'functional-guards',
                overview:
                    'Functional guards are a modern, lightweight way to define routing logic without creating separate guard classes.',
                keyPoints: [
                    'They work well with standalone Angular patterns',
                    'They reduce boilerplate in many cases',
                    'They still participate fully in route navigation decisions',
                ],
                interviewTips: [
                    'Compare briefly with class-based guards',
                    'Mention readability and reduced boilerplate',
                ],
            },
            {
                title: 'HashLocationStrategy',
                description: 'Understanding hash-based routing and when it is used.',
                route: 'hash-location-strategy',
            },
            {
                title: 'Read Route Parameters',
                description: 'Working with route params and query params.',
                route: 'read-route-params',
            },
            {
                title: 'Intermediate Routing Quiz (Mid-Level)',
                description: 'Quiz on lazy loading, guards, params, and routing patterns.',
                route: 'intermediate-routing-quiz',
            },
            {
                title: 'Interview Questions (Intermediate Routing)',
                description: 'Advanced routing interview questions with practical examples.',
                route: 'interview-questions/intermediate-routing',
            },
        ],
    },

    {
        title: 'RxJS',
        description: 'Observables, operators, streams, and subscription patterns.',
        items: [
            {
                title: 'Observables Basics',
                description: 'What observables are and how they are used in Angular.',
                route: 'rxjs-observables-example',
                overview:
                    'Observables represent asynchronous streams of data and are heavily used in Angular for HTTP, forms, and reactive programming patterns.',
                keyPoints: [
                    'Observables can emit multiple values over time',
                    'They are lazy and require subscription to produce values',
                    'Angular uses observables in many framework APIs',
                ],
                interviewTips: [
                    'Differentiate observables from promises clearly',
                    'Mention streams and multiple emissions',
                ],
            },
            {
                title: 'Operators & Syntax',
                description: 'Using pipe, map, switchMap, and common RxJS patterns.',
                route: 'rxjs-operators',
                overview:
                    'RxJS operators transform, combine, filter, and control observable streams in a declarative way.',
                keyPoints: [
                    'Operators are composed using pipe()',
                    'switchMap is useful for replacing inner streams, especially in async workflows',
                    'Choosing the right operator affects correctness and performance',
                ],
                interviewTips: [
                    'Be ready to compare map, switchMap, mergeMap, and concatMap',
                    'Use a real API-call example if asked',
                ],
            },
            {
                title: 'Unsubscribe Strategies',
                description: 'Avoiding memory leaks with unsubscribe patterns.',
                route: 'rxjs-unsubscribe',
                overview:
                    'Managing subscriptions properly helps avoid memory leaks and unexpected behavior in Angular applications.',
                keyPoints: [
                    'Use async pipe where possible',
                    'Use takeUntil or equivalent cleanup patterns when needed',
                    'Not every observable requires the same unsubscribe strategy',
                ],
                interviewTips: [
                    'Mention async pipe as a preferred option when suitable',
                    'Connect cleanup with ngOnDestroy or modern cleanup utilities',
                ],
            },
            {
                title: 'RxJS Quiz (Mid-Level)',
                description: 'Quiz on observables, operators, and subscription management.',
                route: 'rxjs-quiz',
            },
            {
                title: 'Interview Questions (RxJS)',
                description: 'Interview-focused RxJS questions with practical context.',
                route: 'interview-questions/rxjs',
            },
        ],
    },

    {
        title: 'Basics of Pipes',
        description: 'Built-in pipes, custom pipes, and formatting patterns.',
        items: [
            {
                title: 'Common Angular Pipes',
                description: 'Using built-in pipes like date, currency, and percent.',
                route: 'common-pipes',
            },
            {
                title: 'Pipe Syntax & Params',
                description: 'Pipe syntax, chaining, and passing arguments.',
                route: 'pipe-syntax-params',
            },
            {
                title: 'When to Use Pipes',
                description: 'Choosing when formatting logic belongs in a pipe.',
                route: 'when-to-use-pipes',
            },
            {
                title: 'Custom Pipes',
                description: 'Creating custom pipes for reusable view transformations.',
                route: 'custom-pipes',
                overview:
                    'Custom pipes are useful when the same display transformation is needed across multiple templates.',
                keyPoints: [
                    'Pipes are best for display-oriented transformations',
                    'Custom pipes improve reusability and template cleanliness',
                    'Pure vs impure behavior matters for performance',
                ],
                interviewTips: [
                    'Mention pure pipes by default',
                    'Avoid putting heavy business logic into pipes',
                ],
            },
            {
                title: 'Pipes Quiz (Basics)',
                description: 'Quiz on built-in pipes, syntax, and custom pipe fundamentals.',
                route: 'pipes-quiz',
            },
            {
                title: 'Interview Questions (Pipes)',
                description: 'Pipe-related interview questions with practical examples.',
                route: 'interview-questions/pipes',
            },
        ],
    },

    {
        title: 'Forms',
        description: 'Angular forms, validation, controls, and reactive form patterns.',
        items: [
            {
                title: 'Forms CSS Classes',
                description: 'Understanding Angular form state CSS classes.',
                route: 'forms-css-classes',
            },
            {
                title: 'FormControl',
                description: 'Working with FormControl and valueChanges.',
                route: 'formcontrol-basics',
                overview:
                    'FormControl is the basic building block of reactive forms and gives direct control over value, validation, and state.',
                keyPoints: [
                    'FormControl manages a single control’s value and validation state',
                    'valueChanges provides reactive updates',
                    'Reactive forms are highly testable and scalable',
                ],
                interviewTips: [
                    'Explain FormControl in the context of reactive forms',
                    'Mention validation and valueChanges together',
                ],
            },
            {
                title: 'Template vs Reactive Forms',
                description: 'Differences between template-driven and reactive forms.',
                route: 'template-vs-reactive-forms',
                overview:
                    'Angular supports template-driven forms and reactive forms, each with different strengths depending on form complexity and project needs.',
                keyPoints: [
                    'Template-driven forms are simpler and more template-centric',
                    'Reactive forms are more explicit, scalable, and testable',
                    'Reactive forms are typically preferred in enterprise applications',
                ],
                interviewTips: [
                    'Explain when simple forms may use template-driven approach',
                    'Mention why reactive forms are preferred for complex business forms',
                ],
            },
            {
                title: 'Forms Quiz (Basics)',
                description: 'Quiz on form controls, validation classes, and form approaches.',
                route: 'forms-quiz',
            },
            {
                title: 'Interview Questions (Forms)',
                description: 'Interview-focused questions on Angular forms and validation.',
                route: 'interview-questions/forms',
            },
        ],
    },

    {
        title: 'NG Modules',
        description: 'NgModule basics, AppModule understanding, and legacy Angular structure.',
        items: [
            {
                title: 'NgModule Decorator Properties',
                description: 'Understanding declarations, imports, providers, and bootstrap.',
                route: 'ngmodule-properties',
                overview:
                    'NgModule was the traditional Angular organizational unit used to group components, directives, pipes, and providers.',
                keyPoints: [
                    'declarations, imports, providers, and bootstrap were key NgModule properties',
                    'NgModules helped organize application structure before standalone architecture became common',
                    'Understanding NgModules is still useful in many existing Angular codebases',
                ],
                interviewTips: [
                    'Mention legacy and existing-project relevance',
                    'Do not present NgModules as obsolete knowledge',
                ],
            },
            {
                title: 'Main AppModule',
                description: 'Role of AppModule in traditional Angular bootstrapping.',
                route: 'main-appmodule',
            },
            {
                title: 'NG Modules Quiz (Basics)',
                description: 'Quiz on NgModule properties and AppModule basics.',
                route: 'ng-modules-quiz',
            },
            {
                title: 'Interview Questions (NG Modules)',
                description: 'Interview questions covering NgModule concepts and usage.',
                route: 'interview-questions/ng-modules',
            },
        ],
    },

    {
        title: 'Concept Definitions',
        description: 'Short conceptual definitions and quick-reference notes.',
        items: [
            {
                title: 'IS A Definition',
                description: 'A short concept-definition style reference entry.',
                route: 'is-a-definition',
            },
        ],
    },

    {
        title: 'Practice Projects',
        description: 'Hands-on Angular practice projects to apply concepts in realistic scenarios.',
        items: [
            {
                title: 'CRUD Operation Example',
                description: 'Basic CRUD project for practicing components, services, and state updates.',
                route: 'crud-operation-example',
            },
            {
                title: 'CRUD with Reactive Forms',
                description: 'CRUD flow built with reactive forms and validation.',
                route: 'crud-with-reactive-forms-example',
            },
            {
                title: 'Tesla Project',
                description: 'A UI-focused Angular project for layout, components, and interactions.',
                route: 'tesla-project',
            },
            {
                title: 'Tesla Project Without Signal',
                description: 'A comparison-style Tesla project without signals-based state usage.',
                route: 'tesla-project-without-signal',
            },
            {
                title: 'Ryanair Cheap Flights',
                description: 'A practical Angular project for list rendering, filtering, and UI interaction.',
                route: 'ryanair-cheap-flights',
            },
        ],
    },
];
