/* Auto-generated interview question packs */

export type QA = {
  q: string;
  short?: string;
  answer: string;
  code?: string;
  example?: string;
};
export type TopicPack = { title: string; intro: string; questions: QA[] };

export const INTERVIEW_PACKS: Record<string, TopicPack> = {
  forms: {
    title: 'Angular Forms — Interview Questions (5–6 YOE)',
    intro:
      'Reactive Forms, typed forms, validators, CVA, async flows, dynamic forms, performance, and testing patterns.',
    questions: [
      {
        q: 'Reactive Forms vs Template-driven Forms — which would you pick and why?',
        short:
          'Reactive forms for scale/testability; template-driven for small/simple.',
        answer:
          'In larger codebases, Reactive Forms are usually the default because the form model lives in TypeScript (predictable, testable, easier to refactor). They handle dynamic controls, complex validation, and multi-step flows cleanly. Template-driven forms can be faster to start for small forms, but validation and conditional logic spread across templates and become harder to maintain as complexity grows.',
      },
      {
        q: 'Explain FormControl, FormGroup, and FormArray with real use cases.',
        short: 'Control=single, Group=object, Array=list/repeatable section.',
        answer:
          'FormControl represents one field’s value + state (dirty/touched/valid/errors). FormGroup aggregates controls into an object shape (profile form, address group). FormArray represents a list of controls/groups for repeatable sections (invoice items, multiple phone numbers). All inherit from AbstractControl, so you get common APIs like setValue/patchValue, valueChanges, markAsTouched, and updateValueAndValidity.',
        code: "profile = new FormGroup({\n  name: new FormControl('', { nonNullable: true }),\n  phones: new FormArray([new FormControl('')])\n});",
      },
      {
        q: 'setValue vs patchValue — exact difference?',
        short: 'setValue is strict; patchValue is partial.',
        answer:
          'setValue requires the entire structure to match the FormGroup; missing keys throw an error (good when payload is guaranteed complete). patchValue updates only provided keys and ignores missing ones (best for partial API responses or progressive form filling).',
      },
      {
        q: 'form.value vs form.getRawValue — when to use which?',
        short: 'value excludes disabled controls; getRawValue includes them.',
        answer:
          'Disabled controls are excluded from form.value because Angular treats them as ‘not submitted’. If you disable a field for UX (readonly id) but still need it in the payload, use getRawValue().',
      },
      {
        q: 'What is updateOn and when would you set it to blur/submit?',
        short: 'Controls when value/validity updates occur.',
        answer:
          "updateOn changes when Angular updates value and runs validators. 'change' validates on every input event. 'blur' validates after user leaves the field (better UX, fewer API calls). 'submit' validates only on submit (useful for huge forms or when you want a single validation pass).",
        code: "email = new FormControl('', { updateOn: 'blur' });",
      },
      {
        q: 'Explain sync validators and composition.',
        short: 'Validators return errors object or null; can compose multiple.',
        answer:
          'Sync validators run immediately and return ValidationErrors or null. You can compose them with Validators.compose or pass an array. In production apps, prefer reusable custom validator functions to avoid duplicating rules across components.',
      },
      {
        q: 'How do async validators work and what are common pitfalls?',
        short:
          'Return Observable/Promise; must complete; avoid race conditions.',
        answer:
          'Async validators return Observable<ValidationErrors|null>. Common pitfalls: not completing the observable (control stays PENDING), firing requests on each keystroke without debounce, and not canceling previous requests (stale responses overwriting latest). Use debounce and switchMap in the validator or upstream logic.',
      },
      {
        q: 'How do you build cross-field validation (password + confirm)?',
        short: 'Use a group-level validator.',
        answer:
          'Cross-field rules depend on multiple controls, so attach a validator to FormGroup. Compare values and return an error object (e.g., { passwordMismatch: true }). In the UI, you can show the error on the confirm control for better UX.',
        code: "export function match(group: AbstractControl) {\n  const p = group.get('password')?.value;\n  const c = group.get('confirm')?.value;\n  return p && c && p !== c ? { passwordMismatch: true } : null;\n}",
      },
      {
        q: 'How do you conditionally add/remove validators at runtime?',
        short: 'setValidators/clearValidators + updateValueAndValidity.',
        answer:
          "For conditional validation (e.g., companyName required if accountType='business'), update validators dynamically: setValidators / clearValidators, then call updateValueAndValidity(). Also ensure the UI updates error messages based on touched/submit state.",
      },
      {
        q: 'How do you mark all controls touched on submit?',
        short: 'Use markAllAsTouched().',
        answer:
          'A clean submit flow is: if form.invalid -> form.markAllAsTouched(); return; else submit. This ensures validation messages appear consistently after submit attempt without showing errors on initial load.',
      },
      {
        q: 'How do you map backend validation errors to controls?',
        short: 'Use setErrors({server: msg}) on matching controls.',
        answer:
          'If the API returns field errors (email already taken), iterate keys and call control.setErrors({ server: message }). This integrates backend errors into Angular’s error display flow (ng-invalid, errors object) and keeps UX consistent.',
      },
      {
        q: 'Typed Forms — what problem do they solve?',
        short: 'Compile-time safety for payloads and form structure.',
        answer:
          'Typed forms reduce runtime bugs by making form.value typed, preventing wrong keys in setValue, and forcing safe handling of null/undefined. In large teams, this significantly improves refactor confidence.',
      },
      {
        q: 'How do you design a reusable custom input for Angular forms?',
        short: 'Implement ControlValueAccessor (CVA).',
        answer:
          'Implement CVA so your custom component supports formControlName, disabled state, touched state, and change propagation. Without CVA, your component won’t behave like a real form control (validators/touched/disabled won’t integrate cleanly).',
      },
      {
        q: 'What’s the difference between touched and dirty?',
        short: 'touched=blur happened; dirty=value changed.',
        answer:
          'touched flips true when the user focuses and then blurs the control. dirty becomes true when the value changes. A common UX rule is: show errors when touched OR after submit. Use dirty to warn about unsaved changes.',
      },
      {
        q: 'How do you handle FormArray performance in large lists?',
        short: 'trackBy, avoid recreating controls, updateOn, and split UI.',
        answer:
          "For big FormArrays (like invoice rows), use trackBy in *ngFor, avoid rebuilding the entire array on small updates, consider updateOn:'blur', and split rows into smaller components (CVA can help) to reduce change detection cost.",
      },
      {
        q: 'What’s a clean strategy to reset forms with defaults?',
        short: 'reset with explicit shape, not just reset().',
        answer:
          'reset() without arguments may set values to null. In strict/typed setups, prefer reset({ ...defaults }) so you preserve expected types and avoid null issues in templates.',
      },
      {
        q: 'How do you avoid memory leaks with valueChanges subscriptions?',
        short: 'Prefer async pipe or takeUntilDestroyed.',
        answer:
          'If you subscribe to valueChanges manually, clean it up using takeUntilDestroyed (or a destroy$ subject). Also avoid creating many subscriptions per control unless necessary—subscribe at group-level when possible.',
      },
      {
        q: 'How do you handle disabled fields in payload while still showing them readonly?',
        short: 'Disable for UI; use getRawValue() for payload.',
        answer:
          'Disabling is correct for preventing edits and excluding from validation. If the backend still needs the value, use getRawValue() or keep an immutable field outside the form model and merge into payload at submit.',
      },
      {
        q: 'How do you unit test reactive form validation?',
        short: 'Test AbstractControl states and errors directly.',
        answer:
          'Reactive forms are test-friendly because the model is pure TS. In tests, set values, call updateValueAndValidity if needed, and assert on control.errors, form.valid, and group-level errors without rendering the template.',
      },
      {
        q: 'How do you implement debounce search inside forms (e.g., address lookup)?',
        short: 'Use valueChanges with debounceTime + switchMap.',
        answer:
          'Listen to valueChanges, debounce user input, and use switchMap so old requests are canceled. This avoids race conditions and reduces load on APIs.',
        code: "this.form.get('query')!.valueChanges.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap(q => this.api.search(q))\n).subscribe();",
      },
    ],
  },
  'basics-of-angular': {
    title: 'Basics of Angular — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Angular fundamentals explained in simple language with real-world perspective.',
    questions: [
      {
        q: 'Explain Angular’s architecture at a high level (components, DI, router, forms).',
        short:
          'Angular is a structured SPA framework built around components, DI, routing, and forms.',
        answer:
          'Angular follows a component-based and modular architecture designed for building large and maintainable applications.\n\nAt the core of Angular are components. Each component represents a part of the UI such as a page, form, or reusable widget. Components combine HTML templates, TypeScript logic, and styles, making the UI easy to understand and reuse.\n\nBusiness logic and shared functionality are handled using services. These services are injected into components using Angular’s Dependency Injection (DI) system. DI helps keep components loosely coupled, improves testability, and allows logic to be reused across the application.\n\nNavigation in Angular is managed by the Router. The router maps URLs to components, enables single-page application behavior without page reloads, supports lazy loading of features, and allows route guards for authentication and authorization.\n\nUser input and validation are handled using Angular Forms. Angular provides both Template-driven Forms for simple use cases and Reactive Forms for complex, scalable forms. Forms manage input values, validation rules, and form state in a predictable way.\n\nOverall, Angular’s architecture enforces structure and consistency, which makes it ideal for enterprise applications and large development teams.',
      },
      {
        q: 'How does Angular bootstrap an app in standalone mode?',
        short: 'bootstrapApplication initializes the app without NgModules.',
        answer:
          'In standalone mode, Angular bootstraps the application using the bootstrapApplication function instead of NgModules.\n\nThe process starts in main.ts, where bootstrapApplication is called with the root component and optional providers. Angular initializes the platform, creates the root dependency injector, and registers all global providers.\n\nAfter that, Angular renders the root component into the DOM and starts change detection. From this point onward, Angular manages component rendering, routing, dependency injection, and event handling.\n\nStandalone bootstrapping reduces boilerplate, improves readability, and aligns better with modern Angular patterns.',
      },
      {
        q: 'AOT vs JIT compilation — why AOT for production?',
        short: 'AOT compiles templates at build time for better performance.',
        answer:
          'JIT (Just-in-Time) compilation happens in the browser at runtime, while AOT (Ahead-of-Time) compilation happens during the build process.\n\nAOT is preferred for production because templates are already compiled before the application loads. This results in faster startup time and better runtime performance.\n\nAOT also catches template errors at build time, reduces bundle size by excluding the compiler from production builds, and improves security by preventing template injection attacks.',
      },
      {
        q: 'What triggers change detection in Angular and why does it matter?',
        short: 'Async events trigger change detection via Zone.js.',
        answer:
          'Angular runs change detection whenever an asynchronous event occurs, such as user interactions, HTTP responses, timers, or promise resolutions.\n\nTraditionally, Angular uses Zone.js to patch async APIs and notify Angular when something changes. Angular then checks component bindings and updates the UI if required.\n\nChange detection matters because frequent or unnecessary checks can impact performance in large applications. To optimize performance, developers use techniques like OnPush change detection, async pipe, trackBy in lists, and immutable data patterns.',
      },
      {
        q: 'Explain the difference between component style encapsulation modes.',
        short: 'Emulated, None, and ShadowDom control style scoping.',
        answer:
          'Angular provides different view encapsulation modes to control how component styles are applied.\n\nEmulated (default) scopes styles to the component by adding generated attributes, preventing styles from leaking. None disables encapsulation and applies styles globally. ShadowDom uses the browser’s native shadow DOM for true isolation.\n\nEmulated is most commonly used because it provides isolation while remaining compatible with global CSS frameworks.',
      },
      {
        q: 'What are providers and how does injector hierarchy work?',
        short: 'Providers define how dependencies are created and shared.',
        answer:
          'Providers tell Angular how to create and supply dependencies such as services. They map dependency tokens to classes, values, or factory functions.\n\nAngular resolves dependencies by searching the injector hierarchy, starting from the component injector and moving upward to parent and root injectors.\n\nWhere a provider is registered determines its scope and lifetime. Root providers create singleton services, while component or route-level providers create isolated instances.',
      },
      {
        q: 'How do you structure an Angular feature for maintainability?',
        short: 'Feature-based structure with lazy loading.',
        answer:
          'In maintainable Angular applications, code is organized by feature rather than by file type.\n\nEach feature has its own folder containing components, routes, and services. Lazy loading is used to load features only when needed, improving performance.\n\nReusable UI elements and utilities are placed in shared layers, while stateful services are scoped to the feature to avoid global state issues.',
      },
      {
        q: 'What is the role of Zone.js, and what changes in zoneless approaches?',
        short: 'Zone.js auto-triggers change detection.',
        answer:
          'Zone.js helps Angular automatically run change detection by tracking asynchronous operations like events, HTTP calls, and timers.\n\nThis simplifies development but can add overhead in very large applications. Zoneless approaches reduce this overhead by relying on explicit reactivity mechanisms like signals or manual change detection triggers.\n\nZoneless patterns improve performance but require more careful state management.',
      },
      {
        q: 'What is hydration/SSR and why does it matter?',
        short: 'SSR improves performance and SEO; hydration reuses DOM.',
        answer:
          'Server-Side Rendering (SSR) generates HTML on the server, improving first load time and search engine optimization.\n\nHydration attaches Angular’s event listeners and state to the server-rendered HTML instead of re-rendering it.\n\nThis results in faster load times, better SEO, and a smoother user experience, especially for public-facing applications.',
      },
      {
        q: 'How do you handle global error handling in Angular?',
        short: 'Use ErrorHandler and HTTP interceptors.',
        answer:
          'Global error handling is implemented using a custom ErrorHandler and HTTP interceptors.\n\nThis approach centralizes error logging, converts technical errors into user-friendly messages, and integrates with monitoring tools like Sentry.\n\nIt ensures consistent error handling across the entire application.',
      },
      {
        q: 'Explain HTTP interceptors with a real-world use case.',
        short: 'Interceptors handle cross-cutting HTTP concerns.',
        answer:
          'HTTP interceptors allow developers to intercept outgoing requests and incoming responses.\n\nCommon use cases include attaching authentication tokens, handling token refresh, logging request duration, retrying failed requests, and normalizing error responses.\n\nInterceptors help keep API-related logic centralized and clean.',
      },
      {
        q: 'What is the difference between Subject and BehaviorSubject?',
        short: 'BehaviorSubject stores the latest value.',
        answer:
          'A Subject is an event-based stream that does not store any value. Subscribers only receive values emitted after subscription.\n\nA BehaviorSubject always holds the latest value and immediately emits it to new subscribers. This makes BehaviorSubject suitable for state management.',
      },
      {
        q: 'How do you avoid heavy work in Angular templates?',
        short: 'Keep templates simple and precompute logic.',
        answer:
          'Templates run frequently during change detection, so heavy logic in templates can hurt performance.\n\nDevelopers should precompute values in TypeScript, use async pipe for observables, avoid calling methods that allocate new objects, and use trackBy in ngFor loops.',
      },
      {
        q: 'Explain environment configuration patterns in Angular.',
        short: 'Use environment files and build replacements.',
        answer:
          'Angular supports environment-specific configuration using environment files and build-time replacements.\n\nThis allows different API URLs or feature flags for development, staging, and production environments. Sensitive data should never be stored in frontend environment files.',
      },
      {
        q: 'How do you implement feature flags safely in Angular?',
        short: 'Central config service with guards and lazy loading.',
        answer:
          'Feature flags are implemented using a centralized configuration service.\n\nRoutes and components are guarded based on flag values, and lazy loading is used to avoid loading disabled features. This improves performance and prevents unauthorized access.',
      },
      {
        q: 'NgModule-era vs standalone-era dependency setup?',
        short: 'Standalone components manage their own imports.',
        answer:
          'In the NgModule era, modules grouped declarations, imports, and providers.\n\nWith standalone components, dependencies are imported directly into components or routes, reducing boilerplate and making dependency relationships clearer.',
      },
      {
        q: 'How do you implement an app-wide loading indicator?',
        short: 'Track HTTP requests via interceptor.',
        answer:
          'An HTTP interceptor tracks active API requests by incrementing and decrementing a counter.\n\nA shared service exposes the loading state, which the UI subscribes to using async pipe or signals to show or hide a global loader.',
      },
      {
        q: 'What are common Angular performance bottlenecks?',
        short: 'Unnecessary change detection and DOM churn.',
        answer:
          'Common bottlenecks include heavy template computations, missing trackBy in lists, impure pipes, excessive subscriptions, and mutable data patterns.\n\nUsing OnPush change detection, immutable updates, and proper RxJS patterns helps avoid these issues.',
      },
      {
        q: 'How do you design shared UI components to avoid tight coupling?',
        short: 'Keep UI components presentational.',
        answer:
          'Shared UI components should focus only on rendering and user interaction.\n\nBusiness logic should remain in services. Inputs and outputs, content projection, and ControlValueAccessor should be used to keep components reusable and loosely coupled.',
      },
      {
        q: 'How do you handle i18n and formatting in Angular apps?',
        short: 'Centralize translations and formatting.',
        answer:
          'Internationalization is handled using Angular i18n or third-party libraries.\n\nFormatting for dates, numbers, and currencies should be centralized using pipes. Hardcoded strings should be avoided to support localization and scalability.',
      },
    ],
  },
  'basics-of-components': {
    title: 'Basics of Components — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Basics of Components interview questions explained in simple language with real-world clarity.',
    questions: [
      {
        q: 'Explain Angular component lifecycle hooks and typical use-cases.',
        short:
          'OnInit=init, OnChanges=input changes, AfterViewInit=view ready, OnDestroy=cleanup.',
        answer:
          'Angular provides lifecycle hooks that allow developers to run logic at specific stages of a component’s life.\n\nngOnInit is used for initialization logic such as API calls or setting up data once the component is created. ngOnChanges runs whenever an @Input value changes and is useful when a component needs to react to parent data updates.\n\nngAfterViewInit is triggered after the component’s view and child views are fully initialized, making it the correct place to interact with ViewChild elements. ngOnDestroy is used to clean up resources such as subscriptions, timers, or event listeners.\n\nUsing lifecycle hooks correctly helps keep components predictable, avoids memory leaks, and improves overall application stability.',
      },
      {
        q: 'OnPush change detection — what are the triggers and how to work with it?',
        short:
          'Input reference change, events, async pipe emissions, or manual markForCheck.',
        answer:
          'OnPush change detection tells Angular to run change detection only when specific conditions are met.\n\nThese triggers include changes to @Input references, events originating from the component, observable emissions via async pipe, or manual calls to markForCheck.\n\nTo work effectively with OnPush, developers should use immutable data patterns, avoid mutating objects directly, and rely on async pipe for observables. This approach significantly reduces unnecessary change detection cycles and improves performance in large applications.',
      },
      {
        q: 'How do you design parent-child communication patterns cleanly?',
        short:
          'Inputs/Outputs for data/events; services/store for shared state.',
        answer:
          'The cleanest parent-child communication pattern in Angular is data flowing down and events flowing up.\n\nParents pass data to children using @Input, and children notify parents using @Output with EventEmitter. This keeps the data flow predictable and easy to understand.\n\nFor communication between sibling components or across multiple levels, a shared service or state management pattern is preferred. This avoids prop drilling and keeps components loosely coupled.',
      },
      {
        q: 'What’s the difference between content projection and @Input templates?',
        short:
          'ng-content projects content; template inputs pass TemplateRef for custom rendering.',
        answer:
          'Content projection using ng-content allows a parent component to pass markup directly into a child component’s template.\n\n@Input templates, on the other hand, allow passing a TemplateRef that the child component can render conditionally using ngTemplateOutlet.\n\nng-content works best for simple layouts, while TemplateRef inputs are more suitable for advanced customization like dynamic table cells or reusable layout components.',
      },
      {
        q: 'Explain ViewChild vs ContentChild with examples.',
        short:
          'ViewChild queries own template; ContentChild queries projected content.',
        answer:
          'ViewChild is used to access elements or components declared inside a component’s own template.\n\nContentChild is used when a component receives projected content via ng-content and needs to interact with elements or templates provided by the parent.\n\nIn simple terms, ViewChild looks inside the component, while ContentChild looks at what the parent has projected into the component.',
      },
      {
        q: 'Why is calling methods in templates a performance smell?',
        short:
          'Methods can run often during CD and may allocate work repeatedly.',
        answer:
          'Angular may evaluate template expressions multiple times during change detection.\n\nIf a template calls a method that performs calculations or creates new objects, it can slow down rendering and cause unnecessary CPU usage.\n\nTo avoid this, developers should precompute values in TypeScript, use computed signals, or rely on async pipe instead of calling methods directly in templates.',
      },
      {
        q: 'trackBy in ngFor — what exactly does it optimize?',
        short:
          'Preserves DOM nodes by identity, avoids re-creation and state loss.',
        answer:
          'By default, Angular re-renders list items when the array reference changes.\n\ntrackBy provides Angular with a unique identifier for each item so it can reuse existing DOM nodes instead of destroying and recreating them.\n\nThis improves performance and prevents issues like losing input focus, scroll position, or component state in large lists.',
      },
      {
        q: 'How do you handle cleanup for subscriptions in components?',
        short:
          'Use async pipe or takeUntilDestroyed; avoid manual unsubscribe clutter.',
        answer:
          'The recommended approach is to use async pipe whenever possible because it automatically manages subscriptions.\n\nFor manual subscriptions, Angular provides takeUntilDestroyed or developers can use a destroy$ subject in ngOnDestroy.\n\nProper cleanup is critical to avoid memory leaks, especially in long-running or frequently navigated applications.',
      },
      {
        q: 'What is a standalone component and how do you share imports?',
        short:
          'Standalone declares imports locally; share via shared standalone components.',
        answer:
          'Standalone components remove the need for NgModules by allowing components to declare their own dependencies.\n\nShared imports can be handled by creating reusable standalone components or shared constants for common imports.\n\nThis approach reduces boilerplate, improves readability, and makes dependency relationships clearer.',
      },
      {
        q: 'Explain change detection issues with mutable objects.',
        short:
          'OnPush relies on reference changes; mutation may not trigger updates.',
        answer:
          'When objects or arrays are mutated directly, Angular may not detect the change, especially with OnPush change detection.\n\nThis happens because Angular checks references, not deep mutations.\n\nTo avoid issues, developers should replace objects or arrays with new references using immutable update patterns.',
      },
      {
        q: 'When would you use ng-template vs ng-container?',
        short:
          'ng-template defines a template; ng-container groups without extra DOM.',
        answer:
          'ng-template defines a block of HTML that is not rendered until explicitly instantiated.\n\nng-container is used to group elements or apply structural directives without adding extra nodes to the DOM.\n\nTogether, they help control rendering logic without affecting layout or styling.',
      },
      {
        q: 'What are common anti-patterns in component design?',
        short: 'God components, too many Inputs, business logic in templates.',
        answer:
          'Common anti-patterns include large components handling too many responsibilities, excessive @Input properties, and placing business logic inside templates.\n\nTo avoid these, keep components focused, move logic to services, group inputs into configuration objects, and keep templates simple.',
      },
      {
        q: 'How do you implement reusable modal/dialog patterns?',
        short: 'Content projection + service or Angular CDK Overlay.',
        answer:
          'Reusable dialogs are typically implemented using content projection for flexible UI and a service to control open and close behavior.\n\nAngular CDK Overlay is preferred for production-ready dialogs because it handles focus management, accessibility, stacking, and scroll blocking correctly.',
      },
      {
        q: 'How do you manage forms inside reusable components?',
        short: 'Use CVA or accept FormControl as input.',
        answer:
          'Reusable form components should implement ControlValueAccessor so they integrate seamlessly with Reactive Forms.\n\nFor simpler cases, accepting a FormControl as an input is acceptable. Mixing template-driven patterns with reactive forms should be avoided in enterprise applications.',
      },
      {
        q: 'Explain smart vs dumb components.',
        short: 'Smart handles data/state; dumb renders UI and emits events.',
        answer:
          'Smart components manage data fetching, state, and orchestration.\n\nDumb components focus only on rendering UI and emitting user actions via outputs. This separation improves reusability, testability, and maintainability.',
      },
      {
        q: 'How do you handle async data in templates?',
        short: 'Use async pipe and handle loading/error states.',
        answer:
          'The async pipe is the recommended way to handle asynchronous data in templates.\n\nIt automatically subscribes and unsubscribes from observables and triggers change detection efficiently.\n\nUI should also explicitly handle loading and error states for better user experience.',
      },
      {
        q: 'What is content projection multi-slot and when do you use it?',
        short: 'Multiple ng-content slots using select.',
        answer:
          'Multi-slot content projection allows a component to accept different pieces of content such as header, body, and footer.\n\nThis pattern is commonly used in layout components like cards, dialogs, and panels to keep markup flexible and reusable.',
      },
      {
        q: 'How do you handle i18n strings in components cleanly?',
        short: 'Use translation keys and centralized formatting.',
        answer:
          'Text should be referenced using translation keys instead of hardcoded strings.\n\nFormatting for dates, numbers, and currencies should be handled via pipes or i18n utilities. This keeps components clean and makes localization easier.',
      },
      {
        q: 'How do you avoid duplicated UI logic across multiple components?',
        short: 'Extract reusable components, directives, and services.',
        answer:
          'Repeated UI or behavior should be extracted into reusable standalone components or directives.\n\nShared business logic should be placed in services. Clear separation of concerns prevents tight coupling and reduces maintenance cost.',
      },
      {
        q: 'Explain input coercion and why it matters.',
        short: 'HTML inputs pass strings; coerce to correct types.',
        answer:
          'Inputs coming from templates are often strings by default.\n\nWithout coercion, boolean or number inputs may behave incorrectly.\n\nUsing input setters or explicit coercion ensures consistent behavior and prevents subtle bugs in component logic.',
      },
    ],
  },
  'typescript-core': {
    title: 'TypeScript Core — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level TypeScript Core interview bank (hands-on, real-world) with simple but detailed explanations.',
    questions: [
      {
        q: 'Explain structural typing in TypeScript and its implications.',
        short: 'Compatibility by shape, not name.',
        answer:
          'TypeScript uses structural typing, which means two types are considered compatible if they have the same structure (same required properties and compatible types), even if they have different names.\n\nExample: if two interfaces both have { id: number; name: string }, then objects of one type can be assigned to the other.\n\nThis is powerful because it makes code flexible and reduces boilerplate when working with objects from different layers (API DTOs, UI models, etc.).\n\nHowever, the implication is that you can accidentally accept a broader shape than intended. That’s why in real projects you should:\n- Use strict mode\n- Prefer explicit types for function parameters\n- Use excess property checks (object literals) to catch mistakes\n- Add discriminators/branding where identity matters (e.g., UserId vs OrderId)',
      },
      {
        q: 'unknown vs any — what’s the difference?',
        short: 'unknown is safe; any disables type checking.',
        answer:
          'any turns off TypeScript’s type safety for that value. You can access any property or call it like a function, and TypeScript will not warn you. This often leads to runtime bugs.\n\nunknown is the safe alternative. It means “I don’t know the type yet”, but TypeScript forces you to narrow it before using it.\n\nIn real-world apps, unknown is best at boundaries (API responses, JSON.parse, external libraries). You then validate/narrow it before using.\n\nRule of thumb:\n- Avoid any in production code\n- Use unknown + narrowing/validation for safe code',
      },
      {
        q: 'How does type narrowing work?',
        short: 'Use typeof/in/instanceof/discriminated unions.',
        answer:
          'Type narrowing is how TypeScript reduces a broad type (like a union) into a more specific type so you can safely access properties.\n\nCommon narrowing techniques:\n- typeof: for primitives (string/number/boolean)\n- instanceof: for classes\n- in operator: check property existence\n- custom type guards: reusable runtime checks\n- discriminated unions: best for modeling states\n\nDiscriminated unions are very common in senior codebases for clean state modeling like:\n{ status: "loading" } | { status: "success", data: T } | { status: "error", message: string }\n\nThis prevents illegal states and forces you to handle all cases properly.',
      },
      {
        q: 'interface vs type — which do you prefer and why?',
        short:
          'interface for extensible objects; type for unions/intersections.',
        answer:
          'Both are useful, and in real projects seniors use both intentionally.\n\ninterface is best for object shapes that you expect to extend or implement, and it supports declaration merging (which can be useful when augmenting libraries).\n\ntype is more flexible because it can represent:\n- unions (A | B)\n- intersections (A & B)\n- mapped/conditional types\n- tuples\n\nPractical guidance:\n- Use interface for public “shape contracts” (especially object models)\n- Use type when you need unions/intersections or advanced type composition\n\nMost importantly: keep types readable. Overly complex types reduce maintainability.',
      },
      {
        q: 'Explain generics and a real-world use-case in Angular.',
        short: 'Reusable typed APIs/services.',
        answer:
          'Generics allow you to write reusable code while preserving type information of the caller.\n\nIn Angular, a very common real-world use case is a typed API layer. If you write get<T>(), the component can decide what T is (User, Product, etc.). This gives you:\n- strong autocomplete\n- compile-time safety\n- fewer runtime bugs\n\nGenerics are also used in reusable utilities like pagination, table helpers, and mapping functions.\n\nThe key benefit is that you write the logic once, but TypeScript keeps the data strongly typed everywhere.',
        code: 'get<T>(url: string) { return this.http.get<T>(url); }',
      },
      {
        q: 'Partial/Pick/Omit — practical uses?',
        short: 'Shape payloads without duplicating types.',
        answer:
          'These utility types help you avoid duplicating interfaces and keep models consistent.\n\n- Partial<T> makes all fields optional. Useful for PATCH payloads where only a few fields are updated.\n- Pick<T, K> selects only certain keys. Useful when sending a subset of fields to backend.\n- Omit<T, K> removes keys. Useful when backend does not accept certain properties.\n\nIn large apps, these utilities reduce “type drift”, meaning your model and payload types stay aligned even when the main model changes.\n\nSenior note: Don’t overuse Partial for APIs blindly—sometimes explicit DTO types are safer when backend rules are strict.',
      },
      {
        q: 'What is a type guard and when do you write custom ones?',
        short: 'A function that narrows types at runtime.',
        answer:
          'A type guard is a function that performs a runtime check and tells TypeScript what the type is if the check passes.\n\nThis is especially useful when:\n- parsing unknown data (API responses, JSON.parse)\n- dealing with unions\n- integrating with external libraries\n\nCustom type guards improve readability and reusability because you can centralize validation logic.\n\nIn senior codebases, you often see type guards used in data-mapping layers to ensure UI code never deals with unknown/unsafe shapes.',
      },
      {
        q: 'Explain readonly and immutability in TypeScript.',
        short: 'Prevent accidental mutation; helps OnPush patterns.',
        answer:
          'readonly prevents properties from being reassigned. It helps reduce accidental mutation bugs.\n\nImmutability is a broader practice where instead of changing an existing object, you create a new updated object.\n\nWhy this matters in Angular:\n- OnPush change detection works best when references change\n- immutable patterns make state predictable\n- debugging becomes easier because you can track where a new object was created\n\nExample conceptually: instead of user.name = "A", you do user = { ...user, name: "A" }.',
      },
      {
        q: 'Explain non-null assertion (!) and why it’s risky.',
        short: 'It bypasses null checks; use carefully.',
        answer:
          'Non-null assertion (!) tells TypeScript: “trust me, this is not null/undefined.”\n\nIt can be risky because it disables safety checks and can crash at runtime if your assumption is wrong.\n\nSeniors avoid using ! casually. Prefer:\n- proper if checks\n- optional chaining\n- better typing (e.g., nonNullable FormControls)\n\nUse ! only when you are 100% sure (example: after a guard condition, or framework lifecycle where value is guaranteed).',
      },
      {
        q: 'Optional chaining and nullish coalescing — when to use?',
        short: 'Safe access and defaults for null/undefined.',
        answer:
          'Optional chaining (?.) safely accesses nested properties without throwing errors.\n\nExample: user?.address?.city will return undefined if address is missing instead of crashing.\n\nNullish coalescing (??) provides a default only when value is null or undefined.\n\nImportant difference:\n- || treats 0, false, and empty string as “missing” (often wrong)\n- ?? treats only null/undefined as missing (usually correct for defaults)\n\nSo in real apps, ?? is better when 0 or "" are valid values.',
      },
      {
        q: 'Explain enums vs union literals.',
        short: 'Union literals often safer and tree-shakable.',
        answer:
          'Union literals like "A" | "B" are purely compile-time and do not create runtime code. They are easy to narrow and usually produce smaller bundles.\n\nEnums create a runtime object in JavaScript. This can:\n- increase bundle size slightly\n- create issues when serializing/deserializing values\n- cause confusion when backend expects string values\n\nSenior preference:\n- Use union literals for most UI state and config\n- Use enums only when you truly need a runtime mapping or legacy compatibility',
      },
      {
        q: 'Explain tuple types and where they help.',
        short: 'Fixed-length arrays with typed positions.',
        answer:
          'Tuples represent arrays with a fixed number of items where each position has a defined type.\n\nExample: [string, number] means first value is string, second is number.\n\nThey are helpful when returning multiple values from a function where order matters.\n\nHowever, in business code, objects are often clearer than tuples because named properties are easier to understand. Seniors use tuples mainly for small utility patterns (like key-value pairs).',
      },
      {
        q: 'What is the difference between type alias and value at runtime?',
        short: 'Types are erased at compile time.',
        answer:
          'TypeScript types exist only during development/compilation. They are removed when compiled to JavaScript.\n\nThat means you cannot rely on TypeScript types for runtime validation.\n\nSo if data comes from an API, TypeScript will not magically verify it at runtime. You must validate the shape using runtime checks or schema validators.\n\nThis is a common senior interview point: “TypeScript gives compile-time safety, not runtime safety.”',
      },
      {
        q: 'Explain function overloads with an example.',
        short: 'Multiple call signatures with one implementation.',
        answer:
          'Function overloads allow you to define multiple type-safe call signatures for one function, while implementing it once.\n\nThis is useful when the return type depends on the input.\n\nFor example:\n- if input is a string -> return string\n- if input is number -> return number\n\nOverloads improve developer experience by providing correct autocomplete and preventing wrong usage, especially in utility libraries.',
      },
      {
        q: 'Explain `as const` and how it helps.',
        short: 'Freezes literals for exact types.',
        answer:
          '`as const` tells TypeScript to treat values as exact literals instead of widening them.\n\nWithout it, "loading" becomes string. With as const, it stays "loading".\n\nThis is extremely useful for:\n- configuration objects\n- discriminated unions\n- route maps\n- constant dictionaries\n\nIt helps TypeScript infer the most accurate types and reduces manual typing.',
      },
      {
        q: 'Explain mapped types at a high level.',
        short: 'Transform existing types systematically.',
        answer:
          'Mapped types allow you to create a new type by transforming keys of an existing type.\n\nFor example, making all fields optional or readonly is done via mapped types (that’s how Partial and Readonly work internally).\n\nMapped types are useful in enterprise codebases for building DTOs, form models, and ensuring consistent conventions without rewriting types manually.',
      },
      {
        q: 'Explain Record<K,V> and typical uses.',
        short: 'Dictionary types for key-value maps.',
        answer:
          'Record<K, V> represents an object where keys are of type K and values are of type V.\n\nIt is commonly used for:\n- lookup tables (id -> entity)\n- error maps (fieldName -> message)\n- configuration registries\n\nIt improves safety because keys are constrained (not random strings) and values have a consistent type.',
      },
      {
        q: 'Explain never and where it appears.',
        short: 'Represents impossible code paths.',
        answer:
          'never represents a value that should never happen.\n\nIt appears in:\n- functions that throw errors or never return\n- exhaustive checks for discriminated unions\n\nA senior pattern is using never to enforce that all union cases are handled. If a new union variant is added later, TypeScript will force you to update the switch/case logic.',
      },
      {
        q: 'How do you type environment configs safely?',
        short: 'Define an interface and validate at runtime if needed.',
        answer:
          'Environment config should be strongly typed so you don’t accidentally access wrong keys or assign wrong values.\n\nDefine an interface/type for your config and ensure the environment object satisfies it.\n\nIf config is coming from runtime (server, window object), then type alone is not enough—you should validate it at runtime and fail fast if required fields are missing.',
      },
      {
        q: 'What are common TS mistakes in Angular apps?',
        short: 'Overuse any, unsafe null handling, weak API typing.',
        answer:
          'Common mistakes include using any too often, ignoring strict null checks, and not typing API responses.\n\nThis leads to runtime bugs that TypeScript was supposed to prevent.\n\nSenior best practices:\n- keep strict mode enabled\n- use unknown instead of any at boundaries\n- strongly type HttpClient responses\n- model UI state using discriminated unions (loading/success/error) instead of multiple booleans',
      },
    ],
  },
  'intermediate-typescript': {
    title: 'Intermediate TypeScript — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Intermediate TypeScript interview bank with practical, real-world explanations.',
    questions: [
      {
        q: 'Explain conditional types and a practical scenario.',
        short: 'Types that depend on other types.',
        answer:
          'Conditional types allow TypeScript to choose a type based on a condition, similar to an if-else statement but at the type level.\n\nThe syntax looks like: T extends U ? X : Y. This means if T satisfies U, then the resulting type is X, otherwise Y.\n\nIn real-world projects, conditional types are heavily used in utility types like ReturnType, Exclude, and Extract. They are also useful when mapping backend DTOs to frontend models or building helpers that behave differently depending on input types.\n\nConditional types help reduce duplication and make advanced type logic reusable, but they should be used carefully to avoid overly complex types.',
      },
      {
        q: 'Explain infer keyword.',
        short: 'Extracts types from generics.',
        answer:
          'The infer keyword is used inside conditional types to extract a specific type from another type.\n\nFor example, you can infer the return type of a function or the element type of an array without manually specifying it.\n\nIn real applications, infer is useful when building generic utilities that need to work with unknown structures, such as extracting API response data types or form value types.\n\nIt allows TypeScript to “figure out” parts of a type automatically, which keeps code DRY and strongly typed.',
      },
      {
        q: 'Explain keyof and indexed access types.',
        short: 'Use keys as types and access property types.',
        answer:
          'keyof produces a union of all property names of a given type.\n\nIndexed access types allow you to access the type of a specific property using that key, for example T[K].\n\nTogether, these features are very useful for building typed helpers like generic getters, form builders, or mapping functions.\n\nThey help ensure that when property names change, TypeScript catches errors across the codebase instead of failing at runtime.',
      },
      {
        q: 'How would you type a generic API response wrapper?',
        short: 'Wrap data and metadata with generics.',
        answer:
          'A generic API response wrapper allows you to keep metadata consistent while strongly typing the actual payload.\n\nBy defining something like ApiResponse<T>, you ensure that different API calls return correctly typed data without duplicating response structures.\n\nThis pattern improves developer experience with better autocomplete and reduces bugs caused by incorrect assumptions about API shapes.\n\nIt is a common senior-level pattern in Angular applications with a shared API layer.',
        code: 'type ApiResponse<T> = { data: T; meta: { requestId: string } };',
      },
      {
        q: 'Explain exhaustive checks with never.',
        short: 'Ensure all union variants handled.',
        answer:
          'Exhaustive checks use the never type to ensure that all possible cases of a union are handled.\n\nTypically, this is done in a switch statement over a discriminated union. If a new variant is added and not handled, TypeScript will throw a compile-time error.\n\nThis pattern is very valuable for state machines, reducers, and API state handling because it prevents silent failures when requirements evolve.',
      },
      {
        q: 'What is declaration merging and when can it bite?',
        short: 'Interfaces merge; can cause surprising global merges.',
        answer:
          'Declaration merging allows multiple interface declarations with the same name to be merged into one.\n\nThis can be useful when augmenting third-party libraries or adding custom properties.\n\nHowever, it can become dangerous when used unintentionally, especially with global types, as it may silently change behavior across the app.\n\nSenior developers keep declaration merging controlled and avoid polluting the global scope.',
      },
      {
        q: 'Explain variance pitfalls with function types.',
        short: 'Callback parameter types can be tricky.',
        answer:
          'Function type variance defines how function parameters and return types are checked for compatibility.\n\nIn TypeScript, function parameters can behave in ways that allow broader or narrower types than expected, especially in callbacks.\n\nThis can lead to subtle bugs in public APIs or reusable libraries.\n\nTo avoid issues, senior developers use explicit function types and avoid overly generic callbacks in shared or exported APIs.',
      },
      {
        q: 'How do you type dynamic object keys safely?',
        short: 'Use Record + keyof + generics.',
        answer:
          'Typing dynamic keys safely means restricting keys to a known set instead of allowing arbitrary strings.\n\nUsing Record<K, V> with keyof and generics ensures that only valid keys are allowed and values remain strongly typed.\n\nThis pattern is commonly used for configuration maps, error dictionaries, and lookup tables, and it significantly reduces runtime key-related bugs.',
      },
      {
        q: 'Explain template literal types use-case.',
        short: 'Build string unions programmatically.',
        answer:
          'Template literal types allow you to construct new string literal types by combining other string unions.\n\nThey are useful for building strongly typed event names, CSS variable names, route keys, or API endpoints.\n\nThis helps catch typos at compile time and makes large configuration-driven systems safer and easier to refactor.',
      },
      {
        q: 'When do you use satisfies operator?',
        short: 'Validate shape without widening types.',
        answer:
          'The satisfies operator checks whether a value conforms to a type without changing the inferred literal types.\n\nThis is especially useful for configuration objects where you want strict shape validation but still want to preserve exact literal values.\n\nSenior developers often use satisfies for route maps, feature flags, and constant dictionaries.',
      },
      {
        q: 'Explain branded types.',
        short: 'Prevent mixing logically different strings/ids.',
        answer:
          'Branded types are used to distinguish values that share the same base type but represent different concepts.\n\nFor example, UserId and OrderId may both be strings, but mixing them would be a logical bug.\n\nBranding adds a hidden marker to the type system so TypeScript prevents accidental mixing while keeping runtime representation unchanged.',
      },
      {
        q: 'How to type FormGroup with nested controls (typed forms)?',
        short: 'Use typed FormGroup signatures.',
        answer:
          'Typed forms allow you to specify exact value types for each FormControl inside a FormGroup.\n\nThis improves safety when accessing form.value and prevents common null or undefined errors.\n\nIn large Angular applications, typed forms significantly reduce runtime bugs and make refactoring easier.',
      },
      {
        q: 'Explain utility type pitfalls with Partial.',
        short: 'Partial can hide required fields unintentionally.',
        answer:
          'Partial makes all properties optional, which is useful for patch updates.\n\nHowever, overusing Partial can hide missing required fields and weaken type safety.\n\nFor APIs and critical data structures, it is often better to define explicit DTO types rather than relying on Partial everywhere.',
      },
      {
        q: 'Explain ReturnType and Parameters utilities.',
        short: 'Derive types from functions.',
        answer:
          'ReturnType and Parameters extract types directly from function signatures.\n\nThis helps keep types in sync with implementations and avoids duplication.\n\nThey are commonly used in utility layers and wrapper functions to ensure refactors do not silently break typing.',
      },
      {
        q: 'Explain readonly arrays and immutability patterns.',
        short: 'Safer state and easier CD optimization.',
        answer:
          'ReadonlyArray prevents modification of arrays after creation.\n\nThis enforces immutability, which reduces bugs caused by accidental mutation.\n\nImmutability aligns well with Angular performance patterns such as OnPush change detection and signals.',
      },
      {
        q: 'How do you ensure runtime validation for API responses?',
        short: 'Types aren’t runtime; validate with schema libs/checks.',
        answer:
          'TypeScript types do not exist at runtime, so they cannot validate API responses.\n\nTo ensure safety, runtime validation must be added using schema validation libraries or custom checks.\n\nThis is especially important at application boundaries where data cannot be trusted.',
      },
      {
        q: 'Explain TS strict mode benefits.',
        short: 'Catches null bugs and unsafe access early.',
        answer:
          'Strict mode enables a set of compiler options that enforce safer typing.\n\nIt helps catch null and undefined issues, unsafe property access, and incorrect assumptions early during development.\n\nIn large codebases, strict mode greatly improves long-term maintainability and confidence during refactors.',
      },
      {
        q: 'Explain intersection types and when to avoid them.',
        short: 'Combine types; can create impossible states.',
        answer:
          'Intersection types combine multiple types into one.\n\nWhile useful in some advanced scenarios, they can create complex or even impossible types that are hard to reason about.\n\nFor public APIs and shared models, senior developers prefer explicit, readable types over deep intersections.',
      },
      {
        q: 'Explain structural typing pitfalls in domain models.',
        short: 'Accidental compatibility can occur.',
        answer:
          'Because TypeScript is structurally typed, different domain models with the same shape can be considered compatible.\n\nThis can lead to accidental misuse of models.\n\nTo avoid this, developers use discriminated properties or branded types to make domain boundaries explicit.',
      },
      {
        q: 'How do you model API state cleanly?',
        short: 'Use discriminated unions (idle/loading/success/error).',
        answer:
          'Discriminated unions are the cleanest way to model API state.\n\nInstead of using multiple booleans, define a union that represents each possible state explicitly.\n\nThis prevents illegal states and forces developers to handle all cases, resulting in safer and more maintainable code.',
      },
    ],
  },

  'intermediate-javascript': {
    title: 'Intermediate JavaScript — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Intermediate JavaScript interview bank with practical, real-world explanations.',
    questions: [
      {
        q: 'Explain closures with a real-world use case.',
        short: 'Functions remember outer variables.',
        answer:
          'A closure is created when a function remembers and continues to access variables from its outer scope even after that outer function has finished executing.\n\nClosures are commonly used to create private state, factory functions, memoization, and stable callbacks.\n\nIn real-world Angular or RxJS code, closures are heavily used inside operator callbacks, where variables declared outside the callback are preserved across multiple emissions.\n\nClosures are powerful but can cause memory leaks if long-lived closures hold references to large objects unintentionally.',
      },
      {
        q: 'Event loop: microtasks vs macrotasks?',
        short: 'Promises before timers.',
        answer:
          'The JavaScript event loop processes tasks in a specific order.\n\nMicrotasks (such as Promise.then, async/await continuations) run immediately after the current call stack is cleared.\n\nMacrotasks (such as setTimeout, DOM events, and I/O callbacks) run after microtasks are completed.\n\nUnderstanding this order helps debug timing issues, unexpected UI updates, and performance problems in complex applications.',
      },
      {
        q: 'Explain prototypal inheritance vs class syntax.',
        short: 'Classes are syntactic sugar over prototypes.',
        answer:
          'JavaScript uses prototypal inheritance, where objects inherit directly from other objects via the prototype chain.\n\nThe class syntax provides a cleaner and more familiar way to write this logic, but under the hood it still relies on prototypes.\n\nUnderstanding prototypes helps explain method lookup, inheritance behavior, and performance characteristics, especially when debugging advanced issues.',
      },
      {
        q: 'this binding rules and arrow functions.',
        short: 'Arrow captures lexical this.',
        answer:
          'The value of this depends on how a function is called, not where it is defined.\n\nCommon rules include method calls (obj.method()), constructor calls (new), and explicit binding using call, apply, or bind.\n\nArrow functions do not have their own this. Instead, they capture this from the surrounding scope.\n\nThis makes arrow functions ideal for callbacks, as they prevent common bugs caused by losing context.',
      },
      {
        q: 'Explain hoisting and temporal dead zone.',
        short: 'let/const TDZ; var hoists as undefined.',
        answer:
          'Hoisting moves variable and function declarations to the top of their scope during compilation.\n\nVariables declared with var are hoisted and initialized as undefined, which can lead to subtle bugs.\n\nVariables declared with let and const are also hoisted, but they are not initialized until their declaration is executed. This period is called the Temporal Dead Zone.\n\nTDZ prevents access before initialization and helps avoid many common bugs.',
      },
      {
        q: 'Explain mutation vs immutability in UI apps.',
        short: 'Immutability helps predictability.',
        answer:
          'Mutation means changing an existing object or array directly, while immutability means creating a new updated version instead.\n\nIn UI applications, mutation can cause hard-to-track bugs because state changes may not be detected correctly.\n\nImmutable updates make state transitions explicit and predictable, which works especially well with Angular’s OnPush change detection and modern reactive patterns.',
      },
      {
        q: 'Explain deep vs shallow copy.',
        short: 'Spread is shallow; nested objects still shared.',
        answer:
          'A shallow copy duplicates only the top-level structure of an object or array, while nested objects remain shared references.\n\nDeep copy duplicates all nested levels, ensuring complete separation.\n\nIn real applications, shallow copy is often sufficient, but when updating deeply nested state, each affected level must be copied to avoid accidental mutations.',
      },
      {
        q: 'Explain debounce vs throttle.',
        short: 'Debounce waits; throttle limits rate.',
        answer:
          'Debounce delays execution until a certain period of inactivity has passed. It is commonly used for search inputs or form validation.\n\nThrottle ensures a function runs at most once within a specified interval. It is useful for scroll, resize, or mouse-move events.\n\nBoth techniques improve performance and prevent unnecessary function calls.',
      },
      {
        q: 'Promises vs Observables (conceptually).',
        short: 'Promise single result; Observable stream with cancel.',
        answer:
          'A Promise represents a single asynchronous value that resolves once and cannot be canceled.\n\nAn Observable represents a stream of values over time and supports cancellation via unsubscribe.\n\nIn Angular, HTTP requests return Observables, which allows composition, cancellation, retries, and advanced async workflows using RxJS operators.',
      },
      {
        q: 'Explain async/await pitfalls with parallelism.',
        short: 'await serializes unless Promise.all used.',
        answer:
          'Using await sequentially can accidentally serialize asynchronous operations.\n\nIf multiple independent async tasks are awaited one after another, total execution time increases.\n\nTo run tasks in parallel, start promises first and then await them together using Promise.all. This pattern is critical for performance-sensitive code.',
      },
      {
        q: 'Explain reference equality and why it matters.',
        short: 'UI frameworks often rely on reference changes.',
        answer:
          'Reference equality checks whether two variables point to the same object in memory.\n\nModern UI frameworks often rely on reference changes to detect updates.\n\nUpdating state immutably by creating new references ensures predictable UI updates and efficient change detection.',
      },
      {
        q: 'Explain garbage collection implications for event handlers.',
        short: 'Leaked references prevent GC.',
        answer:
          'Garbage collection removes objects that are no longer reachable.\n\nIf event listeners, intervals, or subscriptions hold references to objects, those objects cannot be garbage collected.\n\nFailing to clean up listeners or subscriptions can cause memory leaks, especially in long-lived applications.',
      },
      {
        q: 'Explain module systems (ESM) basics.',
        short: 'Import/export, tree-shaking.',
        answer:
          'ES Modules use static import and export syntax.\n\nThis allows bundlers to analyze dependencies at build time and remove unused code through tree-shaking.\n\nUsing ESM-friendly patterns leads to smaller bundles and better performance in modern web applications.',
      },
      {
        q: 'Explain how JSON serialization can lose types.',
        short: 'Dates become strings; undefined dropped.',
        answer:
          'JSON serialization converts complex JavaScript values into plain data.\n\nDuring this process, Date objects become strings, undefined values are dropped, and methods are lost.\n\nWhen storing or transmitting data, developers must rehydrate or transform values back into proper types after deserialization.',
      },
      {
        q: 'Explain short-circuiting and nullish coalescing.',
        short: '|| vs ?? difference.',
        answer:
          'Short-circuiting with || treats falsy values like 0, empty string, or false as missing.\n\nNullish coalescing (??) only treats null and undefined as missing.\n\nIn real applications, ?? is safer when 0 or empty string are valid values, avoiding unintended defaults.',
      },
      {
        q: 'Explain generators/iterators briefly.',
        short: 'Lazy sequences; useful in advanced libs.',
        answer:
          'Generators are functions that can pause and resume execution, producing values lazily.\n\nThey are useful for advanced iteration patterns and library internals.\n\nWhile not common in everyday Angular development, understanding them helps with advanced JavaScript concepts.',
      },
      {
        q: 'Explain CORS at high level.',
        short: 'Browser security policy; server must allow origins.',
        answer:
          'CORS is a browser security mechanism that restricts cross-origin requests.\n\nCORS errors are enforced by the browser, not the frontend code.\n\nThe solution is always on the server side by configuring appropriate response headers.',
      },
      {
        q: 'Explain fetch abort/cancel.',
        short: 'AbortController cancels fetch.',
        answer:
          'AbortController allows canceling ongoing fetch requests.\n\nCancellation helps avoid race conditions and wasted network work.\n\nIn Angular, RxJS operators like switchMap provide built-in cancellation behavior for HTTP requests.',
      },
      {
        q: 'Explain what makes code ‘non-blocking’.',
        short: 'Async tasks free the main thread.',
        answer:
          'Non-blocking code avoids long synchronous operations on the main thread.\n\nBy using asynchronous APIs, chunking work, or background workers, the UI remains responsive.\n\nThis is critical for performance and user experience in web applications.',
      },
      {
        q: 'Explain equality (== vs ===).',
        short: 'Prefer ===; == coerces types.',
        answer:
          'The == operator performs type coercion, which can lead to unexpected results.\n\nThe === operator checks both value and type and is predictable.\n\nBest practice in professional codebases is to always use === unless there is a very specific reason not to.',
      },
    ],
  },

  'intermediate-components': {
    title: 'Intermediate Components — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Intermediate Components interview bank with real-world, maintainability- and performance-focused explanations.',
    questions: [
      {
        q: 'ViewChild vs ContentChild—difference?',
        short: 'ViewChild=own template; ContentChild=projected content.',
        answer:
          'ViewChild is used to query elements, directives, or components that are declared inside the component’s own template.\n\nContentChild is used to query content that is passed into the component from the parent using ng-content.\n\nIn practice, use ViewChild when the component owns the markup, and ContentChild when the parent controls the markup. This distinction is important for reusable layout and wrapper components.',
      },
      {
        q: 'Explain ng-content multi-slot projection.',
        short: 'Use select to place different projected parts.',
        answer:
          'Multi-slot content projection allows a component to accept different pieces of content and place them in specific locations using the select attribute.\n\nThis is commonly used for layout components such as cards, dialogs, and panels where header, body, and footer content come from the parent.\n\nThis approach keeps the component flexible and reusable without hardcoding structure.',
      },
      {
        q: 'How do lifecycle hooks affect ViewChild availability?',
        short: 'ViewChild available after view init.',
        answer:
          'ViewChild queries are resolved after Angular initializes the component’s view.\n\nFor most cases, interacting with ViewChild should be done inside ngAfterViewInit to ensure the DOM and child components are ready.\n\nStatic queries can be resolved earlier using static: true, but this should only be used when the element is guaranteed to be present and not conditionally rendered.',
      },
      {
        q: 'How do you handle heavy child components conditionally?',
        short: 'Use *ngIf and lazy rendering patterns.',
        answer:
          'Heavy child components should not be rendered unless they are actually needed.\n\nUsing *ngIf ensures that Angular does not create the component until the condition is true.\n\nIn larger applications, this pattern is combined with route-level lazy loading and OnPush change detection to minimize unnecessary work and improve performance.',
      },
      {
        q: 'Explain component communication in complex trees.',
        short: 'Use store/service, not prop drilling.',
        answer:
          'Passing data through many layers using Inputs and Outputs becomes hard to maintain.\n\nIn complex component trees, a shared service or state store should be used to manage shared data.\n\nThis reduces coupling between components, avoids prop drilling, and makes the data flow easier to reason about.',
      },
      {
        q: 'How do you build reusable table components?',
        short: 'Use TemplateRef inputs for cell templates.',
        answer:
          'Reusable table components should remain domain-agnostic.\n\nThey typically accept column definitions and TemplateRefs for headers and cells, allowing feature components to customize rendering.\n\nThe table emits events for sorting, pagination, and selection while keeping business logic outside. This pattern is common in enterprise dashboards.',
      },
      {
        q: 'What are common CD pitfalls with custom components?',
        short: 'Mutations + OnPush + not using async pipe.',
        answer:
          'A common pitfall is mutating objects or arrays directly when using OnPush change detection.\n\nAngular relies on reference changes, so mutations may not trigger updates.\n\nUsing immutable updates, async pipe for observables, and avoiding manual subscriptions helps prevent these issues.',
      },
      {
        q: 'How do you handle focus management/accessibility in components?',
        short: 'Use ARIA + focus trap for dialogs.',
        answer:
          'Accessible components must support keyboard navigation and screen readers.\n\nFor modals and dialogs, focus should be trapped inside the component and returned to the triggering element on close.\n\nARIA roles and labels should be applied correctly. Angular CDK provides utilities that simplify focus and accessibility management.',
      },
      {
        q: 'Explain how to avoid tight coupling in shared components.',
        short: 'Keep them domain-agnostic; pass configs.',
        answer:
          'Shared UI components should not depend on application-specific services or business rules.\n\nInstead, they should accept configuration objects and emit events.\n\nThis keeps shared components reusable across features and prevents hidden dependencies that make refactoring difficult.',
      },
      {
        q: 'How do you do progressive disclosure UI (tabs/accordion) efficiently?',
        short: 'Render only active content.',
        answer:
          'Rendering all tab or accordion content upfront can be expensive if components are heavy.\n\nA better approach is to render only the active section, or lazily render content the first time it is opened.\n\nThis improves initial load time and reduces unnecessary change detection work.',
      },
      {
        q: 'Explain dynamic component loading use-case.',
        short: 'Plugin-like UIs and dashboards.',
        answer:
          'Dynamic component loading is useful for dashboards, widget systems, and plugin-like architectures.\n\nComponents are selected at runtime based on configuration.\n\nTo keep this safe and maintainable, use a typed registry or mapping instead of loading arbitrary components dynamically.',
      },
      {
        q: 'How do you test components with inputs/outputs?',
        short: 'Set inputs, trigger detectChanges, assert output emits.',
        answer:
          'Component tests should set input values, trigger change detection, and simulate user interactions.\n\nOutputs can be tested by subscribing or spying on EventEmitters.\n\nKeeping business logic in services makes component tests simpler and more focused on UI behavior.',
      },
      {
        q: 'Explain standalone routing + component imports best practice.',
        short: 'Route-level providers and component imports.',
        answer:
          'With standalone components, imports are declared directly in components or routes.\n\nRoute-level providers are preferred for feature scoping because they limit service lifetime and improve lazy loading behavior.\n\nThis approach makes dependencies explicit and improves maintainability.',
      },
      {
        q: 'Explain content projection vs passing data inputs.',
        short: 'Projection for markup; inputs for data.',
        answer:
          'Content projection should be used when the parent controls the markup and layout.\n\nInputs should be used when passing structured data.\n\nMany real-world components use both, such as passing data via inputs and projecting action buttons or custom templates.',
      },
      {
        q: 'How do you prevent too many Inputs?',
        short: 'Use config objects and sensible defaults.',
        answer:
          'Too many Inputs make a component hard to understand and maintain.\n\nGrouping related inputs into a configuration object and providing sensible defaults keeps the API cleaner and reduces breaking changes.',
      },
      {
        q: 'Explain why direct DOM manipulation is discouraged.',
        short: 'SSR/renderer safety; testability.',
        answer:
          'Direct DOM access can break server-side rendering and make components harder to test.\n\nAngular provides Renderer2 and CDK utilities to safely interact with the DOM.\n\nKeeping DOM manipulation minimal and abstracted improves portability and reliability.',
      },
      {
        q: 'Explain ChangeDetectorRef use-cases.',
        short: 'markForCheck/detectChanges for edge async cases.',
        answer:
          'ChangeDetectorRef is used in edge cases where Angular does not automatically trigger change detection.\n\nmarkForCheck is preferred with OnPush components to request a check.\n\ndetectChanges forces immediate change detection and should be used sparingly to avoid performance issues.',
      },
      {
        q: 'Explain reusable form components pattern.',
        short: 'CVA for inputs, validation display, and theming.',
        answer:
          'Reusable form components should implement ControlValueAccessor so they integrate with Reactive Forms.\n\nThey usually standardize label, hint, and error display and support theming.\n\nThis pattern ensures consistent UX and reduces duplication across large applications.',
      },
      {
        q: 'Explain why methods in templates can cause bugs.',
        short: 'Re-evaluation can cause side effects.',
        answer:
          'Template expressions may be evaluated many times during change detection.\n\nIf methods perform side effects or allocate new objects, this can cause bugs and performance issues.\n\nTemplates should remain pure, with logic moved to TypeScript or computed values.',
      },
      {
        q: 'How do you handle large component trees performance?',
        short: 'OnPush + signals + virtualization.',
        answer:
          'Performance in large component trees is improved by using OnPush change detection, immutable data patterns, and trackBy functions.\n\nSignals or async pipe help limit updates to affected parts of the UI.\n\nFor very large lists, virtualization should be used to render only visible items.',
      },
    ],
  },

  services: {
    title: 'Services & DI — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Services & DI interview bank with practical, real-world explanations.',
    questions: [
      {
        q: 'Explain injector hierarchy and provider scope.',
        short: 'Providers resolved from nearest injector up the tree.',
        answer:
          'Angular resolves dependencies using a hierarchical injector system.\n\nWhen a component or service asks for a dependency, Angular first looks in the nearest injector (component or route). If not found, it walks up to parent injectors and finally the root injector.\n\nWhere a provider is registered controls its lifetime and scope. Root-level providers create singleton instances shared across the app. Component- or route-level providers create isolated instances.\n\nUnderstanding this hierarchy is critical to debugging issues like unexpected multiple service instances, duplicated state, or memory leaks.',
      },
      {
        q: "providedIn:'root' vs providers array.",
        short: 'root singleton vs scoped instance.',
        answer:
          "Using providedIn:'root' registers the service with the root injector, making it a singleton across the entire application.\n\nAdding a service to a providers array (component or route) creates a new instance scoped to that subtree.\n\nUse providedIn:'root' for stateless or globally shared services. Use providers at component or route level when you need state isolation per feature, per tab, or per route instance.",
      },
      {
        q: 'How do you design API services for testability?',
        short: 'Separate HttpClient calls; return typed Observables.',
        answer:
          'Testable API services should be small, focused, and free of side effects.\n\nEach method should return a typed Observable and avoid subscribing internally.\n\nMapping and transformation logic should be isolated so it can be tested independently.\n\nIn tests, HttpTestingController is used to assert request details and flush mock responses, making tests deterministic and fast.',
      },
      {
        q: 'Interceptors — typical use cases?',
        short: 'Auth headers, refresh tokens, logging, error normalization.',
        answer:
          'HTTP interceptors handle cross-cutting concerns that apply to many requests.\n\nCommon use cases include attaching authentication headers, handling refresh tokens, logging requests and responses, retrying transient failures, and normalizing error responses.\n\nInterceptors should remain pure and avoid UI logic. If UI reactions are needed, emit events through a shared service instead.',
      },
      {
        q: 'How do you implement caching with invalidation?',
        short: 'shareReplay + Map + invalidation triggers.',
        answer:
          'Caching is commonly implemented by storing observables in a Map keyed by request parameters.\n\nshareReplay(1) allows multiple subscribers to reuse the same HTTP response.\n\nInvalidation should be handled explicitly, such as after a mutation, logout, or time-based expiration. Without invalidation, caches can grow unbounded and serve stale data.',
      },
      {
        q: 'Explain multi-provider tokens.',
        short: 'Allow multiple providers for one token (e.g., interceptors).',
        answer:
          'Multi-provider tokens allow multiple classes to be associated with a single token.\n\nAngular collects all providers into an array and injects them together.\n\nA common example is HTTP_INTERCEPTORS, where multiple interceptors run in sequence.\n\nOrder matters, so it should be documented and covered by tests to avoid unexpected behavior.',
      },
      {
        q: 'How do you avoid service becoming a God object?',
        short: 'Split by responsibility; compose smaller services.',
        answer:
          'A service becomes a God object when it handles too many responsibilities, such as API calls, state management, formatting, and UI logic.\n\nTo avoid this, split services by responsibility and compose them using facades or coordinators.\n\nThis keeps services easier to test, understand, and maintain.',
      },
      {
        q: 'Explain facade pattern in Angular.',
        short: 'Facade wraps complex state/services behind a simple API.',
        answer:
          'A facade provides a simplified API over a complex set of services or state.\n\nComponents interact only with the facade, not with multiple services directly.\n\nThis reduces coupling, improves readability, and makes refactoring easier because internal implementation details are hidden behind the facade.',
      },
      {
        q: 'When to use Subject in services?',
        short: 'Event buses, command streams, UI triggers.',
        answer:
          'Subjects are best used for event-like communication such as commands, notifications, or UI triggers.\n\nThey are not ideal as primary state containers because they do not store the latest value.\n\nFor state, BehaviorSubject or signals are usually preferred since they provide access to the current state.',
      },
      {
        q: 'How do you handle errors consistently across app?',
        short: 'Normalize error shapes; show user-friendly messages.',
        answer:
          'Consistent error handling starts with normalizing error shapes in a shared layer such as an interceptor or base service.\n\nTechnical error details should be logged for debugging, while user-facing messages should remain clear and friendly.\n\nThis separation improves UX and simplifies global error management.',
      },
      {
        q: 'How do you share state across components?',
        short: 'Service/store with observable/signal state.',
        answer:
          'Shared state should live in a service or store that acts as a single source of truth.\n\nComponents subscribe to state via observables or signals.\n\nThis avoids passing state through multiple component levels and keeps updates predictable and traceable.',
      },
      {
        q: 'Explain DI tokens and injection of primitives.',
        short: 'Use InjectionToken for strings/config objects.',
        answer:
          'Primitive values like strings or configuration objects should be injected using InjectionToken.\n\nThis avoids magic strings, enables strong typing, and allows different values to be provided per environment or route.\n\nInjection tokens are commonly used for API URLs, feature flags, and app configuration.',
      },
      {
        q: 'Route-level providers — why use them?',
        short: 'Feature-scoped services for lazy routes.',
        answer:
          'Route-level providers scope service instances to a specific route tree.\n\nThis is useful for lazy-loaded features where state should reset when navigating away.\n\nIt also prevents accidental sharing of feature-specific state across unrelated parts of the app.',
      },
      {
        q: 'How do you design retry/backoff for HTTP?',
        short: 'Use RxJS retryWhen/backoff and idempotent rules.',
        answer:
          'Retries should be applied only to transient failures such as network issues.\n\nBackoff strategies reduce server load by spacing out retries.\n\nNon-idempotent operations should generally not be retried unless the backend guarantees safety.',
      },
      {
        q: 'How do you handle auth refresh token logic?',
        short: 'Interceptor queues requests, refresh once, retry pending.',
        answer:
          'Refresh token logic is typically implemented in an interceptor.\n\nWhen a 401 occurs, a single refresh request is triggered while other requests are queued.\n\nAfter refresh succeeds, queued requests are retried. Auth endpoints are excluded to prevent infinite loops.',
      },
      {
        q: 'Explain why you shouldn’t subscribe in services unnecessarily.',
        short: 'Returning observables keeps composition flexible.',
        answer:
          'Subscribing inside services hides control flow and makes testing harder.\n\nReturning observables allows callers to compose streams, control lifecycles, and manage subscriptions explicitly.\n\nSubscriptions should usually live at the component or effect boundary.',
      },
      {
        q: 'How do you test services with HttpClient?',
        short: 'Use HttpTestingController to mock requests.',
        answer:
          'HttpTestingController allows you to intercept and assert outgoing HTTP requests.\n\nYou can verify URL, method, headers, and body, then flush a mock response.\n\nThis ensures services behave correctly without making real network calls.',
      },
      {
        q: 'Explain tree-shakable providers.',
        short: 'providedIn makes services tree-shakable.',
        answer:
          'Tree-shakable providers allow Angular to remove unused services from the final bundle.\n\nUsing providedIn enables this optimization.\n\nThis is especially important in large applications with many optional or feature-specific services.',
      },
      {
        q: 'Explain circular dependency issues in DI.',
        short: 'Can cause runtime errors or undefined providers.',
        answer:
          'Circular dependencies occur when two services depend on each other directly or indirectly.\n\nThis often leads to runtime errors or undefined injections.\n\nSuch cycles usually indicate architectural issues and should be resolved by refactoring, introducing facades, or extracting shared logic.',
      },
      {
        q: 'Explain why global singleton state can be risky.',
        short: 'State leaks across routes/users; hard to reset.',
        answer:
          'Global singleton state can persist longer than intended and leak across routes or user sessions.\n\nThis makes bugs harder to reproduce and state harder to reset.\n\nFor route-specific state, scoping services to routes or components provides safer lifecycle management.',
      },
    ],
  },

  'basic-directives': {
    title: 'Directives (Basics) — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Directives (Basics) interview bank with clear, real-world explanations.',
    questions: [
      {
        q: 'Structural vs attribute directives?',
        short: 'Structural changes DOM; attribute changes behavior/appearance.',
        answer:
          'Structural directives change the structure of the DOM by adding or removing elements. Examples include *ngIf and *ngFor.\n\nAttribute directives do not add or remove elements. Instead, they modify the appearance or behavior of an existing element, such as ngClass, ngStyle, or custom attribute directives.\n\nIn practice, structural directives control *what* is rendered, while attribute directives control *how* it behaves or looks.',
      },
      {
        q: 'How does *ngIf work under the hood?',
        short: 'It creates/destroys embedded views.',
        answer:
          '*ngIf works by using a TemplateRef and ViewContainerRef.\n\nWhen the condition is true, Angular creates an embedded view from the template and inserts it into the DOM. When false, the view is destroyed.\n\nUnderstanding this helps when using else templates and when optimizing performance in conditional rendering.',
      },
      {
        q: 'Explain *ngFor microsyntax and let variables.',
        short: 'index, first, last, trackBy.',
        answer:
          '*ngFor provides local template variables such as index, first, last, even, and odd.\n\nThese variables help with conditional styling, numbering, and logic inside lists.\n\nUsing trackBy with *ngFor improves performance by allowing Angular to reuse DOM elements instead of recreating them.',
      },
      {
        q: 'Why use trackBy?',
        short: 'Avoid DOM churn and state loss.',
        answer:
          'Without trackBy, Angular recreates DOM nodes whenever the array reference changes.\n\ntrackBy tells Angular how to uniquely identify items so it can reuse existing DOM elements.\n\nThis improves performance and prevents issues like losing input focus, scroll position, or component state.',
      },
      {
        q: 'ngClass vs [class.foo] binding?',
        short: 'ngClass for many classes; [class] for single flags.',
        answer:
          '[class.active] is best for toggling a single class based on a boolean.\n\nngClass is better when you need to apply multiple classes conditionally using arrays or object maps.\n\nChoosing the right approach keeps templates clean and readable.',
      },
      {
        q: 'ngStyle vs [style.prop]?',
        short: 'ngStyle for many styles; [style] for single styles.',
        answer:
          '[style.width.px] or [style.color] is ideal for binding individual style properties with type safety.\n\nngStyle is useful when multiple styles need to be applied dynamically.\n\nPrefer explicit style bindings when possible for clarity and better tooling support.',
      },
      {
        q: 'How to write a simple attribute directive?',
        short: 'Use @Directive + ElementRef/Renderer2.',
        answer:
          'A basic attribute directive is created using the @Directive decorator.\n\nIt can access the host element using ElementRef and modify it safely using Renderer2.\n\nDirectives are useful for encapsulating reusable behavior such as highlighting, permissions, or input restrictions.',
      },
      {
        q: 'Renderer2 vs ElementRef direct DOM?',
        short: 'Renderer2 safer for SSR and encapsulation.',
        answer:
          'Renderer2 abstracts DOM operations and works across different platforms such as server-side rendering.\n\nDirect DOM access via ElementRef can break SSR and increase security risks.\n\nBest practice is to use Renderer2 for all DOM manipulations inside directives.',
      },
      {
        q: 'How to pass inputs to directives?',
        short: '@Input on directive; use binding syntax.',
        answer:
          'Directives can accept configuration via @Input properties.\n\nThese inputs are bound using standard property binding syntax in templates.\n\nInput setters should remain lightweight and avoid triggering heavy logic or side effects.',
      },
      {
        q: 'Why avoid heavy logic in directives?',
        short: 'They run across many nodes; can hurt performance.',
        answer:
          'Directives are often applied to many elements.\n\nHeavy logic, frequent DOM writes, or expensive event listeners can severely impact performance.\n\nKeep directives focused, lightweight, and optimized for reuse.',
      },
      {
        q: 'How to implement a permission directive?',
        short: 'Hide/disable based on roles/claims.',
        answer:
          'A permission directive typically subscribes to an authentication or authorization state.\n\nBased on user roles or permissions, it conditionally hides, disables, or removes elements.\n\nIt must clean up subscriptions properly to avoid memory leaks.',
      },
      {
        q: 'How to implement a tooltip directive cleanly?',
        short: 'Use CDK overlay or lightweight DOM; manage events.',
        answer:
          'A tooltip directive needs positioning, accessibility, and cleanup.\n\nAngular CDK Overlay provides a robust solution.\n\nIf implemented manually, event listeners must be managed carefully to avoid leaks and flickering.',
      },
      {
        q: 'Explain ng-template usage with directives.',
        short: 'Templates are instantiated when directive decides.',
        answer:
          'ng-template defines a block of HTML that is not rendered immediately.\n\nStructural directives decide when and how to instantiate these templates using ViewContainerRef.',
      },
      {
        q: 'What are template reference variables (#ref)?',
        short: 'References to elements/directives in template.',
        answer:
          'Template reference variables provide access to DOM elements, components, or directive instances inside templates.\n\nThey are often used with ViewChild when access is needed in TypeScript.',
      },
      {
        q: 'How do structural directives interact with layout?',
        short: 'They add/remove DOM nodes; can shift layout.',
        answer:
          'Structural directives physically add or remove elements from the DOM.\n\nThis can cause layout shifts.\n\nTo avoid unnecessary wrappers, ng-container is often used.',
      },
      {
        q: 'Explain ng-container use-case.',
        short: 'Group structural directives without extra element.',
        answer:
          'ng-container allows grouping of elements and applying structural directives without adding extra DOM nodes.\n\nThis helps maintain clean DOM structure and predictable CSS behavior.',
      },
      {
        q: 'How do you debug directive issues?',
        short: 'Inspect DOM, check input bindings, log host events.',
        answer:
          'Debugging directives involves inspecting the rendered DOM, checking applied attributes and classes, and verifying input bindings.\n\nAngular DevTools and isolated directive tests are very helpful.',
      },
      {
        q: 'What is a custom structural directive?',
        short: 'A directive that controls embedded views.',
        answer:
          'Custom structural directives use TemplateRef and ViewContainerRef to control creation and destruction of views.\n\nThey are useful for advanced patterns like permissions, feature flags, or view caching.',
      },
      {
        q: 'How do you avoid XSS when directives inject HTML?',
        short: 'Sanitize or avoid innerHTML; use DomSanitizer carefully.',
        answer:
          'Injecting raw HTML can expose applications to XSS attacks.\n\nAlways sanitize content or avoid innerHTML.\n\nDomSanitizer should only be used when the source is fully trusted.',
      },
      {
        q: 'How to test directives?',
        short: 'Host test component + trigger events + assert DOM changes.',
        answer:
          'Directive tests usually involve a host component that uses the directive.\n\nTests trigger events or input changes and assert resulting DOM updates or behavior.',
      },
    ],
  },

  'intermediate-directives': {
    title: 'Directives (Intermediate) — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Directives (Intermediate) interview bank with performance and architecture focus.',
    questions: [
      {
        q: 'HostListener vs addEventListener?',
        short: 'HostListener integrates with Angular lifecycle.',
        answer:
          'HostListener provides a declarative way to listen to events on the host element and is automatically cleaned up by Angular.\n\nManual addEventListener requires explicit cleanup and can lead to memory leaks if forgotten.\n\nHostListener integrates better with Angular’s lifecycle and change detection.',
      },
      {
        q: 'HostBinding common use-cases?',
        short: 'Bind classes/styles/attrs to host element.',
        answer:
          'HostBinding allows directives to bind CSS classes, styles, and attributes directly to the host element.\n\nCommon use cases include toggling classes, setting ARIA attributes, and dynamically updating styles.',
      },
      {
        q: 'Building directives with RxJS streams?',
        short: 'Use fromEvent + takeUntil for cleanup.',
        answer:
          'RxJS is useful for handling complex event flows inside directives.\n\nfromEvent can convert DOM events into streams.\n\nCleanup must be handled using takeUntilDestroyed or similar patterns to prevent memory leaks.',
      },
      {
        q: 'How to implement input masking directive?',
        short: 'Listen input events, format value, avoid cursor jumps.',
        answer:
          'Input masking is tricky due to cursor positioning and user experience.\n\nFor complex cases, a ControlValueAccessor component is often better than a directive.\n\nIf implemented as a directive, careful event handling is required.',
      },
      {
        q: 'How to implement drag-and-drop directive?',
        short: 'Track pointer events, calculate positions, emit events.',
        answer:
          'Drag-and-drop requires managing pointer events, tracking state, and emitting updates.\n\nAngular CDK DragDrop provides a production-ready solution and is preferred for complex interactions.',
      },
      {
        q: 'How to avoid change detection storms in directives?',
        short: 'Throttle events, runOutsideAngular when needed.',
        answer:
          'High-frequency events like scroll or mousemove can trigger excessive change detection.\n\nUse throttling, debouncing, or NgZone.runOutsideAngular to reduce overhead and re-enter Angular only when needed.',
      },
      {
        q: 'Structural directive with caching?',
        short: 'Reuse views for performance in toggles.',
        answer:
          'Instead of destroying views, advanced structural directives can cache and reattach views.\n\nThis improves performance for frequently toggled content but must be managed carefully to avoid stale state.',
      },
      {
        q: 'Directive input setters pitfalls?',
        short: 'Avoid side effects that trigger loops.',
        answer:
          'Input setters can run many times.\n\nThey should remain idempotent and avoid triggering change detection loops or unnecessary DOM updates.',
      },
      {
        q: 'Directive composition strategy?',
        short: 'Prefer small focused directives; avoid mega-directives.',
        answer:
          'Small, focused directives are easier to compose and maintain.\n\nIf behavior becomes complex or UI-heavy, it is usually better to create a component instead.',
      },
      {
        q: 'How to add accessibility via directive?',
        short: 'HostBinding for aria-* and keyboard handlers.',
        answer:
          'Directives can enforce accessibility by adding ARIA attributes and handling keyboard interactions.\n\nAccessibility should always be tested using keyboard navigation and screen readers.',
      },
      {
        q: 'How to implement click-outside directive?',
        short: 'Listen on document; ignore inside clicks; cleanup properly.',
        answer:
          'A click-outside directive listens to document-level clicks and checks whether the event target lies outside the host element.\n\nProper cleanup is required to avoid memory leaks.',
      },
      {
        q: 'How to implement auto-focus directive?',
        short: 'Focus in AfterViewInit; handle SSR.',
        answer:
          'Auto-focus should be applied after the view initializes.\n\nIn SSR scenarios, guard against accessing the DOM on the server.',
      },
      {
        q: 'Why Renderer2 even in intermediate directives?',
        short: 'SSR safety and consistent DOM manipulation.',
        answer:
          'Renderer2 keeps DOM manipulation platform-agnostic.\n\nIt ensures directives work consistently across browser and server environments.',
      },
      {
        q: 'How to test host bindings?',
        short: 'Assert class/style/attrs are set on host.',
        answer:
          'Tests should assert that HostBinding correctly updates the host element’s classes, styles, or attributes based on directive state.',
      },
      {
        q: 'How to handle directive subscriptions?',
        short: 'Always cleanup; prefer takeUntilDestroyed.',
        answer:
          'Directives are often used many times across the app.\n\nAny subscription must be cleaned up to avoid multiplying memory leaks.',
      },
      {
        q: 'When should directive become component?',
        short: 'When it needs complex UI/rendering/state.',
        answer:
          'If a directive needs its own template, complex rendering, or significant state, a component is usually a better abstraction.',
      },
      {
        q: 'How to build a structural permission directive?',
        short: 'Control embedded view based on auth stream.',
        answer:
          'The directive subscribes to an authorization stream and creates or destroys embedded views based on permissions.\n\nCaching views can improve performance if permissions toggle frequently.',
      },
      {
        q: 'How to avoid layout shift in structural directives?',
        short: 'Use placeholders/skeletons and consistent sizing.',
        answer:
          'Removing DOM nodes can cause layout jumps.\n\nUsing skeleton loaders or reserving space helps maintain layout stability.',
      },
      {
        q: 'Directive vs pipe for formatting?',
        short: 'Pipe for display; directive for input behavior.',
        answer:
          'Pipes should be used for formatting output values.\n\nDirectives or CVA components should be used for controlling input behavior.',
      },
      {
        q: 'How to implement a debounce-input directive?',
        short: 'Emit debounced value changes.',
        answer:
          'A debounce-input directive listens to input events and emits values after a delay.\n\nCare must be taken to ensure compatibility with reactive forms and proper cleanup.',
      },
    ],
  },

  'basic-routing': {
    title: 'Routing (Basics) — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Routing (Basics) interview bank with real-world navigation patterns.',
    questions: [
      {
        q: 'RouterOutlet role?',
        short: 'Placeholder where routed components render.',
        answer:
          'RouterOutlet acts as a placeholder in the template where Angular dynamically renders the component associated with the active route.\n\nWhen navigation happens, Angular destroys the previously rendered routed component and inserts the new one into the RouterOutlet.\n\nNested RouterOutlets allow layout components (like shell, sidebar, header) with child routes rendered inside them, which is a very common enterprise pattern.',
      },
      {
        q: 'routerLink vs navigate?',
        short: 'routerLink in templates; navigate imperatively in TS.',
        answer:
          'routerLink is a declarative way to define navigation in templates and works like a normal anchor element, including browser features like right-click and accessibility.\n\nrouter.navigate is used imperatively inside TypeScript code, typically after actions like form submission, login success, or conditional logic.\n\nBest practice is to prefer routerLink in templates and use navigate only when navigation is triggered by code.',
      },
      {
        q: 'Params vs queryParams?',
        short: 'Params identify resource; queryParams represent filters/state.',
        answer:
          'Route params are part of the URL path and usually identify a required resource, such as an ID.\n\nQuery params are optional and are used for UI state such as filters, pagination, sorting, or tabs.\n\nParams define what resource you are viewing, while query params define how you are viewing it.',
      },
      {
        q: 'ActivatedRoute snapshot vs observable?',
        short: 'snapshot for one-time; observable for changes.',
        answer:
          'ActivatedRoute snapshot provides a static view of route data at the time the component is created.\n\nIf the same component instance stays alive while the route parameters change, snapshot will not update.\n\nIn such cases, paramMap and queryParamMap observables should be used to react to route changes dynamically.',
      },
      {
        q: 'Explain route guards in simple terms.',
        short: 'Guards control navigation/activation.',
        answer:
          'Route guards are checks that run before navigation happens.\n\nThey decide whether a user is allowed to enter a route, leave a route, or load a route.\n\nCommon use cases include authentication checks, role-based access control, and protecting users from losing unsaved form data.',
      },
      {
        q: 'CanDeactivate use-case?',
        short: 'Warn on unsaved changes.',
        answer:
          'CanDeactivate guards are used when a user attempts to leave a route.\n\nThey are commonly used with forms to warn users about unsaved changes and ask for confirmation before navigation.\n\nThis improves user experience and prevents accidental data loss.',
      },
      {
        q: 'What is routerLinkActive?',
        short: 'Adds class when link is active.',
        answer:
          'routerLinkActive automatically adds CSS classes to a link when its associated route is active.\n\nThis is commonly used for navigation menus to highlight the current page.\n\nExact matching should be configured carefully to avoid incorrect active states.',
      },
      {
        q: 'Explain wildcard route and ordering.',
        short: 'First match wins; wildcard last.',
        answer:
          'Angular matches routes in the order they are defined.\n\nThe first matching route is selected.\n\nWildcard routes (**), which match anything, must always be placed last; otherwise they will catch all navigation and break routing.',
      },
      {
        q: 'How do you handle 404 routes?',
        short: 'Wildcard redirect or dedicated NotFound component.',
        answer:
          '404 handling is typically done using a wildcard route.\n\nInstead of redirecting blindly, a dedicated NotFound component provides better user experience and easier debugging.\n\nThis component can also log analytics or guide users back to valid pages.',
      },
      {
        q: 'Relative vs absolute navigation?',
        short: 'Relative uses current route; absolute from root.',
        answer:
          'Absolute navigation always starts from the root of the application and is easier to reason about.\n\nRelative navigation is useful inside feature modules and child routes, as it navigates relative to the current ActivatedRoute.\n\nChoosing the correct one prevents unexpected URL structures.',
      },
      {
        q: 'Route data usage?',
        short: 'Static metadata for titles/breadcrumbs/guards.',
        answer:
          'Route data allows attaching static metadata to routes.\n\nIt is commonly used for page titles, breadcrumbs, analytics labels, and permission configuration.\n\nKeeping metadata in routes centralizes navigation-related configuration.',
      },
      {
        q: 'How to build breadcrumbs?',
        short: 'Use route data + ActivatedRoute tree traversal.',
        answer:
          'Breadcrumbs are built by traversing the ActivatedRoute snapshot tree.\n\nEach route contributes a label from its route data.\n\nThis logic is usually centralized in a breadcrumb service to keep components simple.',
      },
      {
        q: 'What is LocationStrategy?',
        short: 'Path vs hash strategy for URLs.',
        answer:
          'PathLocationStrategy produces clean URLs but requires server configuration to handle deep links.\n\nHashLocationStrategy uses # in the URL and works without server support but is less SEO-friendly.\n\nModern applications prefer PathLocationStrategy with proper server rewrites.',
      },
      {
        q: 'Explain router events usage.',
        short: 'Track navigation start/end/errors for analytics/spinners.',
        answer:
          'Router events allow observing navigation lifecycle events.\n\nCommon uses include showing global loading indicators, tracking analytics, and logging navigation errors.\n\nAlways unsubscribe or use takeUntil patterns to avoid leaks.',
      },
      {
        q: 'Why avoid heavy logic in guards?',
        short: 'Guards should be fast; async is OK but avoid delays.',
        answer:
          'Guards block navigation until they complete.\n\nHeavy logic or long-running async operations make the app feel slow and unresponsive.\n\nGuards should be lightweight, with data prefetched elsewhere if needed.',
      },
      {
        q: 'How do you handle scroll restoration?',
        short: 'Use Router config or custom scroll service.',
        answer:
          'Angular router supports automatic scroll restoration.\n\nFor complex layouts, custom scroll management may be needed to track and restore positions per route.\n\nThis improves usability in long lists and content-heavy pages.',
      },
      {
        q: 'How to protect child routes?',
        short: 'Use canActivateChild.',
        answer:
          'canActivateChild applies authorization logic to all child routes under a parent.\n\nThis avoids duplicating guard logic on every child route and keeps security rules consistent.',
      },
      {
        q: 'How do you lazy-load a component route?',
        short: 'loadComponent with dynamic import.',
        answer:
          'Standalone components can be lazy-loaded using loadComponent with dynamic imports.\n\nThis reduces initial bundle size and improves application startup performance.',
      },
      {
        q: 'How do you pass state in navigation without URL?',
        short: 'Navigation extras state; not shareable like query params.',
        answer:
          'Navigation extras state allows passing temporary data during navigation.\n\nThis data is not reflected in the URL and is lost on refresh.\n\nIt is useful for ephemeral state like return URLs but not for shareable state.',
      },
      {
        q: 'Common routing bugs?',
        short: 'Wrong route order, missing pathMatch, and subscription misuse.',
        answer:
          "Common issues include incorrect route ordering, missing pathMatch:'full' on redirects, and using snapshot when observables are required.\n\nAnother frequent bug is forgetting to unsubscribe from router event streams.",
      },
    ],
  },

  'intermediate-routing': {
    title: 'Routing (Intermediate) — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Routing (Intermediate) interview bank with performance and architecture focus.',
    questions: [
      {
        q: 'Explain lazy loading and why it matters.',
        short: 'Load features on demand to reduce initial bundle.',
        answer:
          'Lazy loading splits the application into smaller bundles that are loaded only when needed.\n\nThis significantly improves initial load time and perceived performance.\n\nFrequently used features can be preloaded in the background to balance performance and responsiveness.',
      },
      {
        q: 'Functional guards vs class guards.',
        short: 'Functional guards are simpler; class guards support DI too.',
        answer:
          'Functional guards are lightweight and reduce boilerplate.\n\nThey still support dependency injection via inject().\n\nThey align well with standalone components and modern Angular patterns.',
      },
      {
        q: 'Resolvers — when do you still use them?',
        short: 'Preload critical data before route activates.',
        answer:
          'Resolvers ensure data is available before a route activates.\n\nThey prevent UI flicker but delay navigation.\n\nThey should be used only when the component cannot render meaningfully without the data.',
      },
      {
        q: 'Preloading strategies?',
        short: 'Preload after app stable or based on network/priority.',
        answer:
          'Preloading loads lazy routes in the background after initial load.\n\nCustom strategies can preload based on route data, network conditions, or user behavior.',
      },
      {
        q: 'Route-level providers?',
        short: 'Scope service instances to feature route tree.',
        answer:
          'Route-level providers scope services to a specific route tree.\n\nThis prevents global singleton state leaks and improves isolation for lazy-loaded features.',
      },
      {
        q: 'Guards for role-based access control?',
        short: 'Centralize policy checks; avoid scattering logic.',
        answer:
          'Role checks should be centralized in a policy or authorization service.\n\nGuards should delegate to this service instead of hardcoding rules in multiple places.',
      },
      {
        q: 'Handling deep links on server?',
        short: 'Server must rewrite to index.html for SPA routes.',
        answer:
          'For client-side routing with clean URLs, the server must redirect unknown routes to index.html.\n\nWithout this, refreshing deep links will result in 404 errors.',
      },
      {
        q: 'Handling navigation cancellation issues?',
        short: 'Use switchMap in data streams; watch router events.',
        answer:
          'When navigation changes quickly, in-flight requests must be canceled.\n\nRxJS switchMap is commonly used to cancel previous requests.\n\nRouter events can be used to manage global loading indicators correctly.',
      },
      {
        q: 'Route reuse strategy?',
        short: 'Cache component instances across navigations.',
        answer:
          'RouteReuseStrategy allows caching routed components.\n\nThis is useful for tabbed UIs but must be handled carefully to avoid stale data and memory issues.',
      },
      {
        q: 'Matrix params usage?',
        short: 'Rare; can represent sub-state in URLs.',
        answer:
          'Matrix parameters attach data to specific URL segments.\n\nThey are rarely used in modern apps, as query params are usually clearer and more widely supported.',
      },
      {
        q: 'SEO with Angular routing?',
        short: 'SSR + proper meta tags + canonical URLs.',
        answer:
          'For SEO-sensitive applications, SSR is essential.\n\nMeta tags, canonical URLs, and structured data must be handled correctly to ensure search engine visibility.',
      },
      {
        q: 'How do you handle route-based titles?',
        short: 'Use route data + Title service.',
        answer:
          'Titles are usually configured in route data.\n\nA centralized title service updates the document title on NavigationEnd, supporting nested routes.',
      },
      {
        q: 'How do you handle auth refresh during navigation?',
        short: 'Guard waits for auth state to resolve.',
        answer:
          'Guards can return observables that wait for authentication or token refresh.\n\nCare must be taken to avoid infinite redirects and to handle error states gracefully.',
      },
      {
        q: 'How do you implement breadcrumbs with lazy routes?',
        short: 'Use route data and snapshot tree; resolve labels per segment.',
        answer:
          'Lazy routes still appear in the ActivatedRoute tree.\n\nBreadcrumbs are built by traversing snapshots and reading route data labels at each level.',
      },
      {
        q: 'How to avoid N+1 resolvers?',
        short: 'Batch fetch or use feature data service with caching.',
        answer:
          'If multiple routes require the same data, centralize the fetch in a shared service with caching.\n\nAvoid duplicating resolver logic across routes.',
      },
      {
        q: 'What is canMatch used for?',
        short: 'Prevent loading a lazy route when condition fails.',
        answer:
          'canMatch prevents route matching before lazy loading occurs.\n\nThis improves performance and security by avoiding loading code the user is not allowed to access.',
      },
      {
        q: 'How to guard child routes differently?',
        short: 'Combine canActivateChild and route data policies.',
        answer:
          'canActivateChild enforces shared rules, while route data defines per-route requirements.\n\nThis combination keeps authorization logic flexible and centralized.',
      },
      {
        q: 'How to implement logout redirect to previous URL?',
        short: 'Store returnUrl in query param or state.',
        answer:
          'Capture the attempted URL before redirecting to login.\n\nAfter login, redirect the user back using a returnUrl query param for refresh-safe behavior.',
      },
      {
        q: 'Why use paramMap instead of params?',
        short: 'Safer API; handles multiple values.',
        answer:
          'paramMap provides getter methods and supports multiple values per key.\n\nIt avoids undefined access issues common with raw params objects.',
      },
      {
        q: 'Common advanced routing pitfalls?',
        short:
          'Stale subscriptions, multiple outlets complexity, reuse side effects.',
        answer:
          'Common pitfalls include leaking router event subscriptions, overly complex outlet hierarchies, and stale data when using route reuse.\n\nCareful cleanup and clear architecture prevent these issues.',
      },
    ],
  },

  rxjs: {
    title: 'RxJS — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level RxJS interview bank with real-world, production-focused explanations.',
    questions: [
      {
        q: 'switchMap vs mergeMap vs concatMap.',
        short: 'Cancel vs parallel vs sequential.',
        answer:
          'These operators are used to flatten higher-order observables, but their behavior differs.\n\nswitchMap cancels the previous inner observable when a new value arrives. This is ideal for search or autocomplete where only the latest result matters.\n\nmergeMap allows multiple inner observables to run in parallel. Use it when tasks are independent and order does not matter.\n\nconcatMap queues inner observables and executes them one by one, preserving order. This is useful when order matters, such as sequential API calls.\n\nChoosing the wrong operator can cause race conditions, wasted network calls, or incorrect UI state.',
      },
      {
        q: 'Why async pipe is preferred in templates?',
        short: 'Auto unsubscribe and cleaner templates.',
        answer:
          'The async pipe automatically subscribes and unsubscribes from observables.\n\nIt prevents memory leaks, reduces boilerplate code, and keeps components cleaner.\n\nAsync pipe also triggers change detection correctly, which is especially important when using OnPush change detection.\n\nFor these reasons, async pipe is considered a best practice for handling streams in templates.',
      },
      {
        q: 'Subject vs BehaviorSubject.',
        short: 'BehaviorSubject has current value.',
        answer:
          'Subject is event-like and does not store a current value.\n\nBehaviorSubject always holds the latest value and immediately emits it to new subscribers.\n\nBehaviorSubject is commonly used for state management, while Subject is better suited for events or commands.',
      },
      {
        q: 'How do you handle errors in streams?',
        short: 'catchError, retry, and safe fallbacks.',
        answer:
          'Errors should be handled explicitly using catchError.\n\nInstead of letting streams fail silently, map errors to a meaningful error state or fallback value.\n\nRetry strategies can be used for transient failures, but errors should always be surfaced to the UI in a controlled and user-friendly way.',
      },
      {
        q: 'Explain hot vs cold observables.',
        short: 'Cold creates producer per subscriber; hot shares producer.',
        answer:
          'Cold observables create a new producer for every subscriber, such as HTTP requests.\n\nHot observables share a single producer among subscribers, such as Subjects or shared event streams.\n\nOperators like shareReplay are used to convert cold observables into shared hot streams.',
      },
      {
        q: 'shareReplay pitfalls.',
        short: 'Can cache errors; memory leaks if not scoped.',
        answer:
          'shareReplay caches the last emission and can also cache errors.\n\nIf not scoped properly, it may retain references and cause memory leaks.\n\nUsing refCount, explicit invalidation, or route-scoped services helps avoid stale or leaking caches.',
      },
      {
        q: 'takeUntil and cleanup patterns.',
        short: 'Cancel streams on destroy.',
        answer:
          'takeUntil is used to automatically unsubscribe from streams when a signal emits.\n\nIn Angular, takeUntilDestroyed is preferred because it ties cleanup directly to component or directive lifecycle.\n\nThis pattern prevents memory leaks and unintended background work.',
      },
      {
        q: 'combineLatest vs forkJoin.',
        short: 'combineLatest for ongoing; forkJoin for completion.',
        answer:
          'combineLatest emits whenever any source emits, after all have emitted at least once.\n\nforkJoin waits for all observables to complete and emits a single combined result.\n\ncombineLatest is used for reactive UI updates, while forkJoin is similar to Promise.all for one-time operations.',
      },
      {
        q: 'debounceTime vs throttleTime.',
        short: 'Debounce waits; throttle limits frequency.',
        answer:
          'debounceTime waits until emissions stop before emitting the last value.\n\nthrottleTime limits how often values can be emitted.\n\nDebounce is ideal for search inputs, while throttle works well for scroll or resize events.',
      },
      {
        q: 'distinctUntilChanged usage.',
        short: 'Avoid duplicate emissions.',
        answer:
          'distinctUntilChanged prevents emitting the same value repeatedly.\n\nThis reduces unnecessary API calls and UI updates.\n\nFor objects, a custom comparator is often required because reference equality alone may not be sufficient.',
      },
      {
        q: 'tap vs map.',
        short: 'tap side effects; map transforms values.',
        answer:
          'map transforms the emitted value and passes the transformed value downstream.\n\ntap is used for side effects such as logging or debugging and does not change the stream value.\n\nUsing tap for transformation is a common anti-pattern.',
      },
      {
        q: 'How to cancel HTTP calls?',
        short: 'Unsubscribe or switchMap cancels pending requests.',
        answer:
          'Angular HttpClient cancels HTTP requests when the observable is unsubscribed.\n\nOperators like switchMap automatically cancel previous requests when new values arrive.\n\nThis helps prevent race conditions and wasted network usage.',
      },
      {
        q: 'retryWhen strategy.',
        short: 'Retry transient failures with backoff.',
        answer:
          'retryWhen allows custom retry logic.\n\nIt is commonly combined with exponential backoff for transient network failures.\n\nRetries should not be applied blindly, especially for non-idempotent operations.',
      },
      {
        q: 'How to model UI state with RxJS?',
        short: 'Use state streams or view models.',
        answer:
          'UI state is commonly modeled using streams for loading, error, and data.\n\nThese streams are combined into a single view-model observable consumed by the template.\n\nThis keeps templates declarative and components simple.',
      },
      {
        q: 'Marble testing concept.',
        short: 'Test streams deterministically.',
        answer:
          'Marble testing represents observables as timelines using ASCII diagrams.\n\nIt allows deterministic testing of complex operator chains, timing logic, and retries.\n\nThis is especially useful for testing advanced RxJS behavior.',
      },
      {
        q: 'ExhaustMap use-case.',
        short: 'Ignore new triggers while running.',
        answer:
          'exhaustMap ignores new emissions while the current inner observable is active.\n\nIt is ideal for form submissions or login buttons to prevent double submits.',
      },
      {
        q: 'withLatestFrom vs combineLatest.',
        short: 'Take latest from other stream when source emits.',
        answer:
          'withLatestFrom emits only when the source observable emits.\n\nIt pulls the latest values from other streams at that moment.\n\nThis is useful for actions like button clicks combined with current form state.',
      },
      {
        q: 'Schedulers (basic idea).',
        short: 'Control timing/execution context.',
        answer:
          'Schedulers control when and where work is executed.\n\nThey are rarely needed in typical Angular app code.\n\nSchedulers are mainly useful for testing and low-level performance tuning.',
      },
      {
        q: 'Higher-order observables.',
        short: 'Streams of streams; flatten with mapping operators.',
        answer:
          'Higher-order observables emit other observables.\n\nFlattening operators like switchMap, mergeMap, concatMap, and exhaustMap are used to manage these cases safely.',
      },
      {
        q: 'Common RxJS anti-patterns.',
        short: 'Nested subscribe, shared mutable state, missing teardown.',
        answer:
          'Common anti-patterns include subscribing inside subscribe, managing shared mutable state, and forgetting to unsubscribe.\n\nProper composition with operators and clear teardown logic avoids these issues.',
      },
    ],
  },

  pipes: {
    title: 'Pipes — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level Pipes interview bank with performance and maintainability focus.',
    questions: [
      {
        q: 'Pure vs impure pipes.',
        short: 'Pure runs on input ref change; impure runs every CD.',
        answer:
          'Pure pipes run only when input references change and are highly optimized.\n\nImpure pipes run on every change detection cycle and can severely hurt performance.\n\nIn most cases, pure pipes should be preferred and immutability should be enforced instead of using impure pipes.',
      },
      {
        q: 'When to use a pipe vs a helper function?',
        short: 'Pipe for template formatting; function for TS logic.',
        answer:
          'Pipes are best for formatting values in templates.\n\nHelper functions or services should be used for business logic or heavy computation.\n\nThis separation keeps templates readable and logic testable.',
      },
      {
        q: 'Pipe parameters and chaining.',
        short: 'Pass args and compose transformations.',
        answer:
          'Pipes can accept parameters and be chained together.\n\nHowever, long chains in frequently updated templates can impact performance.\n\nFor complex logic, prefer preprocessing data in TypeScript.',
      },
      {
        q: 'Custom pipe best practices.',
        short: 'Keep pure, stateless, and fast.',
        answer:
          'Custom pipes should be pure, deterministic, and side-effect free.\n\nAvoid subscriptions inside pipes.\n\nPipes should focus on presentation logic only.',
      },
      {
        q: 'AsyncPipe behavior.',
        short: 'Subscribes/unsubscribes automatically.',
        answer:
          'AsyncPipe manages the subscription lifecycle automatically.\n\nIt triggers change detection when new values arrive.\n\nThis makes it ideal for use with OnPush components.',
      },
      {
        q: 'Impure pipe use-case?',
        short: 'Rare: when input mutates without reference change.',
        answer:
          'Impure pipes are rarely justified.\n\nThey may be used when dealing with legacy mutable data, but fixing immutability is usually a better solution.',
      },
      {
        q: 'How to test a pipe?',
        short: 'Call transform and assert output.',
        answer:
          'Pipes are tested by instantiating them and calling transform with inputs.\n\nAssertions are made on the returned output, making pipe tests simple and fast.',
      },
      {
        q: 'Pipe vs directive for formatting inputs.',
        short: 'Pipe for display; directive/CVA for input control.',
        answer:
          'Pipes format output only.\n\nFor formatting user input during typing, directives or ControlValueAccessor components should be used instead.',
      },
    ],
  },

  'ng-modules': {
    title: 'NgModules — Interview Questions (5–6 YOE)',
    intro:
      'Senior-level NgModules interview bank with migration and architecture focus.',
    questions: [
      {
        q: 'What is an NgModule historically used for?',
        short: 'Grouping declarations/imports/providers/bootstrapping.',
        answer:
          'NgModules were used to group related components, directives, pipes, and providers.\n\nThey defined compilation boundaries and lazy-loading units.\n\nIn older Angular apps, NgModules are central to application structure.',
      },
      {
        q: 'Why is Angular moving to standalone?',
        short: 'Less boilerplate; clearer dependencies.',
        answer:
          'Standalone components remove NgModule boilerplate.\n\nDependencies are declared where they are used, improving readability.\n\nLazy loading and routing become simpler and more explicit.',
      },
      {
        q: 'Feature module vs shared module?',
        short: 'Feature encapsulates; shared provides reusables.',
        answer:
          'Feature modules encapsulate a specific domain or route.\n\nShared modules provide reusable components and pipes.\n\nAvoid placing stateful services in shared modules unless intentionally global.',
      },
      {
        q: 'forRoot vs forChild pattern.',
        short: 'Singleton config vs feature usage.',
        answer:
          'forRoot configures singletons and global configuration.\n\nforChild allows features to use functionality without re-providing singletons.\n\nThis prevents duplicated services.',
      },
      {
        q: 'When should you still use NgModules today?',
        short: 'Legacy apps and some libraries.',
        answer:
          'NgModules are still relevant for legacy applications and backward-compatible libraries.\n\nFor new applications, standalone APIs are generally preferred.',
      },
    ],
  },
} as const;
