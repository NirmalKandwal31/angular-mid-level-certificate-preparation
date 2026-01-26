import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type Option = { id: string; text: string };

type Question = {
  id: string;
  title: string;
  prompt: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  tags: string[];
};

@Component({
  selector: 'app-intermediate-components-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intermediate-components-quiz.component.html',
  styleUrl: './intermediate-components-quiz.component.scss',
})
export class IntermediateComponentsQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Template Reference Variables',
      prompt:
        'What is a common use-case for a template reference variable like #inp?',
      options: [
        {
          id: 'a',
          text: 'To create a global variable shared across the whole app',
        },
        {
          id: 'b',
          text: 'To reference a DOM element or directive instance in the template',
        },
        { id: 'c', text: 'To register a service in dependency injection' },
        { id: 'd', text: 'To enable lazy loading for a component' },
      ],
      correctOptionId: 'b',
      explanation:
        '#ref is used to access a DOM element (or directive/component instance) from the template, e.g. inp.value.',
      tags: ['Template', '#ref'],
    },
    {
      id: 'q2',
      title: 'Template Reference Variables',
      prompt:
        'Which is correct to read the value of an input using #name in the template?',
      options: [
        { id: 'a', text: '<input #name /> {{ name.value }}' },
        { id: 'b', text: '<input #name /> {{ #name.value }}' },
        { id: 'c', text: '<input #name /> {{ this.name.value }}' },
        { id: 'd', text: '<input name="#name" /> {{ name.value }}' },
      ],
      correctOptionId: 'a',
      explanation:
        'You can reference it directly: <input #name> then use {{ name.value }} in the same template.',
      tags: ['Template', '#ref'],
    },
    {
      id: 'q3',
      title: 'Lifecycle Hooks',
      prompt:
        'Which lifecycle hook is best for subscribing to an observable that should run once when the component is created?',
      options: [
        { id: 'a', text: 'ngOnChanges' },
        { id: 'b', text: 'ngOnInit' },
        { id: 'c', text: 'ngAfterViewChecked' },
        { id: 'd', text: 'ngDoCheck' },
      ],
      correctOptionId: 'b',
      explanation:
        'ngOnInit is typically used for initialization logic like starting subscriptions, fetching data, etc.',
      tags: ['Lifecycle'],
    },
    {
      id: 'q4',
      title: 'Lifecycle Hooks',
      prompt: 'When does ngOnChanges run?',
      options: [
        { id: 'a', text: 'Only once when the component is destroyed' },
        {
          id: 'b',
          text: 'Whenever an @Input() reference/value changes (on bound inputs)',
        },
        { id: 'c', text: 'After every change detection cycle' },
        { id: 'd', text: 'Only after view initialization' },
      ],
      correctOptionId: 'b',
      explanation:
        'ngOnChanges runs when Angular sets or updates data-bound @Input properties (it receives SimpleChanges).',
      tags: ['Lifecycle', '@Input'],
    },
    {
      id: 'q5',
      title: 'ng-template vs ng-container',
      prompt:
        'What is the key difference between <ng-container> and <ng-template>?',
      options: [
        {
          id: 'a',
          text: 'ng-container creates an extra DOM element, ng-template does not',
        },
        {
          id: 'b',
          text: 'ng-template is a template definition (not rendered unless used), ng-container is a grouping element that does not render to DOM',
        },
        { id: 'c', text: 'ng-template can only be used with forms' },
        { id: 'd', text: 'ng-container is for CSS styling only' },
      ],
      correctOptionId: 'b',
      explanation:
        'ng-container groups elements without adding a DOM node. ng-template defines a template block rendered via structural directives or TemplateRef.',
      tags: ['Templates', 'ng-template', 'ng-container'],
    },
    {
      id: 'q6',
      title: 'ng-template vs ng-container',
      prompt: 'Which statement is true about ng-template?',
      options: [
        { id: 'a', text: 'It renders immediately just like a div' },
        {
          id: 'b',
          text: 'It is not rendered by default; it needs a structural directive or TemplateRef usage to render',
        },
        { id: 'c', text: 'It always adds a DOM element' },
        { id: 'd', text: 'It replaces router-outlet' },
      ],
      correctOptionId: 'b',
      explanation:
        'ng-template is a blueprint. It is instantiated/rendered only when Angular is instructed (e.g. *ngIf else, ngTemplateOutlet).',
      tags: ['ng-template'],
    },
    {
      id: 'q7',
      title: 'Standalone Components',
      prompt:
        'In a standalone component, where do you typically declare dependencies like CommonModule or other standalone components?',
      options: [
        { id: 'a', text: 'In NgModule declarations' },
        { id: 'b', text: 'Inside the component decorator: imports: []' },
        { id: 'c', text: 'In angular.json only' },
        { id: 'd', text: 'Inside main.ts bootstrap only' },
      ],
      correctOptionId: 'b',
      explanation:
        'Standalone components use `imports: []` inside @Component to declare dependencies.',
      tags: ['Standalone'],
    },
    {
      id: 'q8',
      title: 'ViewChild vs ContentChild',
      prompt: 'What is the best description of @ViewChild vs @ContentChild?',
      options: [
        { id: 'a', text: 'Both query projected content only' },
        {
          id: 'b',
          text: 'ViewChild queries the component’s own view; ContentChild queries projected content via ng-content',
        },
        {
          id: 'c',
          text: 'ContentChild queries the DOM only; ViewChild queries services',
        },
        { id: 'd', text: 'They are identical in all cases' },
      ],
      correctOptionId: 'b',
      explanation:
        '@ViewChild targets elements/directives in the component template. @ContentChild targets projected content passed into <ng-content>.',
      tags: ['ViewChild', 'ContentChild'],
    },
    {
      id: 'q9',
      title: 'Lifecycle + ViewChild',
      prompt:
        'If you need to access a @ViewChild element reliably after it exists, which hook is commonly used?',
      options: [
        { id: 'a', text: 'ngOnInit' },
        { id: 'b', text: 'ngAfterViewInit' },
        { id: 'c', text: 'ngOnChanges' },
        { id: 'd', text: 'ngAfterContentInit' },
      ],
      correctOptionId: 'b',
      explanation:
        'ngAfterViewInit runs after Angular initializes the component’s view (and ViewChild references become available).',
      tags: ['Lifecycle', 'ViewChild'],
    },
    {
      id: 'q10',
      title: 'Standalone + Routing',
      prompt: 'A common way to lazy-load a standalone component route is:',
      options: [
        { id: 'a', text: 'component: () => import(...).then(...)' },
        { id: 'b', text: 'loadComponent: () => import(...).then(...)' },
        { id: 'c', text: 'loadChildren: () => component(...)' },
        { id: 'd', text: 'providers: [loadComponent(...)]' },
      ],
      correctOptionId: 'b',
      explanation:
        'For standalone component routes, use loadComponent to lazy-load the component.',
      tags: ['Standalone', 'Routing'],
    },
  ];

  // =========================
  // STATE
  // =========================
  questions = signal<Question[]>(this.shuffle([...this.allQuestions]));
  currentIndex = signal(0);

  answers = signal<Record<string, string>>({});
  submitted = signal<Record<string, boolean>>({});
  quizFinished = signal(false);

  // =========================
  // COMPUTED
  // =========================
  current = computed(() => this.questions()[this.currentIndex()]);
  total = computed(() => this.questions().length);

  progress = computed(() =>
    Math.round(((this.currentIndex() + 1) / this.total()) * 100)
  );

  chosenForCurrent = computed(() => this.answers()[this.current().id] ?? '');
  isAnsweredForCurrent = computed(() => !!this.chosenForCurrent());
  isSubmittedForCurrent = computed(
    () => this.submitted()[this.current().id] === true
  );

  isCorrectForCurrent = computed(() => {
    const chosen = this.chosenForCurrent();
    if (!chosen) return false;
    return chosen === this.current().correctOptionId;
  });

  score = computed(() => {
    const qs = this.questions();
    const map = this.answers();
    const sub = this.submitted();

    let s = 0;
    for (const q of qs) {
      if (sub[q.id] && map[q.id] === q.correctOptionId) s++;
    }
    return s;
  });

  resultRows = computed(() => {
    const qs = this.questions();
    const map = this.answers();
    const sub = this.submitted();

    return qs.map((q, idx) => {
      const chosen = map[q.id] ?? '';
      const isSubmitted = !!sub[q.id];
      const isCorrect = isSubmitted ? chosen === q.correctOptionId : false;

      return {
        index: idx,
        id: q.id,
        title: q.title,
        submitted: isSubmitted,
        correct: isCorrect,
        chosenOptionId: chosen,
        correctOptionId: q.correctOptionId,
      };
    });
  });

  // =========================
  // ACTIONS
  // =========================
  selectOption(optionId: string) {
    if (this.isSubmittedForCurrent()) return; // lock after submit
    const q = this.current();
    this.answers.update((m) => ({ ...m, [q.id]: optionId }));
  }

  submitAnswer() {
    const q = this.current();
    if (!this.answers()[q.id]) return;
    this.submitted.update((m) => ({ ...m, [q.id]: true }));
  }

  next() {
    if (this.currentIndex() < this.total() - 1) {
      this.currentIndex.update((v) => v + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update((v) => v - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  finishQuiz() {
    this.quizFinished.set(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToQuestion(i: number) {
    this.quizFinished.set(false);
    this.currentIndex.set(i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  restart(shuffle = true) {
    this.answers.set({});
    this.submitted.set({});
    this.quizFinished.set(false);
    this.currentIndex.set(0);

    this.questions.set(
      shuffle ? this.shuffle([...this.allQuestions]) : [...this.allQuestions]
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================
  // UTIL
  // =========================
  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
