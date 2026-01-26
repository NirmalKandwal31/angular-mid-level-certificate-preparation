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
  selector: 'app-intermediate-routing-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intermediate-routing-quiz.component.html',
  styleUrl: './intermediate-routing-quiz.component.scss',
})
export class IntermediateRoutingQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Lazy Loading',
      prompt: 'What is the main benefit of lazy-loading in Angular routing?',
      options: [
        { id: 'a', text: 'It disables routing errors completely' },
        {
          id: 'b',
          text: 'It reduces initial bundle size by loading features only when needed',
        },
        { id: 'c', text: 'It forces a full page reload on every route' },
        { id: 'd', text: 'It makes TypeScript optional' },
      ],
      correctOptionId: 'b',
      explanation:
        'Lazy-loading loads code on demand, improving initial load time and performance.',
      tags: ['Lazy Loading', 'Performance'],
    },
    {
      id: 'q2',
      title: 'Lazy-loading (Standalone)',
      prompt:
        'For standalone components, what is a common way to lazy-load a route?',
      options: [
        {
          id: 'a',
          text: 'loadComponent: () => import(...).then(m => m.SomeComponent)',
        },
        { id: 'b', text: 'component: () => import(...).then(...)' },
        { id: 'c', text: 'providers: [lazyLoad(...)]' },
        { id: 'd', text: 'templateUrl: "lazy.html"' },
      ],
      correctOptionId: 'a',
      explanation:
        'In standalone routing, `loadComponent` is used to lazy-load a standalone component route.',
      tags: ['Lazy Loading', 'Standalone'],
    },
    {
      id: 'q3',
      title: 'Functional Guards',
      prompt: 'What is a functional guard in Angular routing?',
      options: [
        { id: 'a', text: 'A guard that must be inside an NgModule' },
        {
          id: 'b',
          text: 'A function (CanActivateFn/CanMatchFn etc.) used as a guard instead of a class',
        },
        { id: 'c', text: 'A guard that can only run on the server' },
        { id: 'd', text: 'A guard that replaces router-outlet' },
      ],
      correctOptionId: 'b',
      explanation:
        'Modern Angular supports function-based guards (e.g., CanActivateFn) which can use `inject()` to access dependencies.',
      tags: ['Guards', 'Functional Guards'],
    },
    {
      id: 'q4',
      title: 'Functional Guards + inject()',
      prompt:
        'In a functional guard, how do you typically access Router or a service?',
      options: [
        { id: 'a', text: 'new Router()' },
        { id: 'b', text: 'inject(Router) / inject(SomeService)' },
        { id: 'c', text: 'window.router' },
        { id: 'd', text: 'document.getRouter()' },
      ],
      correctOptionId: 'b',
      explanation:
        'Functional guards commonly use `inject()` to read dependencies from the injection context.',
      tags: ['Guards', 'inject()'],
    },
    {
      id: 'q5',
      title: 'HashLocationStrategy',
      prompt: 'What is the main reason to use HashLocationStrategy?',
      options: [
        { id: 'a', text: 'To enable SSR by default' },
        {
          id: 'b',
          text: 'To avoid server-side URL rewrite configuration by using # in URLs',
        },
        {
          id: 'c',
          text: 'To make routes faster than PathLocationStrategy always',
        },
        { id: 'd', text: 'To disable deep linking' },
      ],
      correctOptionId: 'b',
      explanation:
        'Hash-based routing keeps routing after `#`, so the server usually doesn’t need special rewrite rules.',
      tags: ['HashLocationStrategy'],
    },
    {
      id: 'q6',
      title: 'Hash vs Path Strategy',
      prompt:
        'Which URL typically indicates HashLocationStrategy is being used?',
      options: [
        { id: 'a', text: 'https://example.com/products/12' },
        { id: 'b', text: 'https://example.com/#/products/12' },
        { id: 'c', text: 'https://example.com/?products=12' },
        { id: 'd', text: 'https://example.com/products#12' },
      ],
      correctOptionId: 'b',
      explanation:
        'Hash strategy routes usually look like `/#/route` (the route is after the hash).',
      tags: ['HashLocationStrategy'],
    },
    {
      id: 'q7',
      title: 'Route Params',
      prompt: 'Where do route params come from?',
      options: [
        { id: 'a', text: 'From CSS selectors' },
        { id: 'b', text: 'From dynamic path segments like /users/:id' },
        { id: 'c', text: 'From Angular services only' },
        { id: 'd', text: 'From HTML meta tags' },
      ],
      correctOptionId: 'b',
      explanation:
        'Params are typically defined in route paths using `:paramName` (e.g., /users/:id).',
      tags: ['Params'],
    },
    {
      id: 'q8',
      title: 'Query Params',
      prompt: 'Which statement about queryParams is correct?',
      options: [
        { id: 'a', text: 'queryParams are part of the path like /users/:id' },
        { id: 'b', text: 'queryParams come after ? like /users?id=10' },
        { id: 'c', text: 'queryParams can only be numbers' },
        { id: 'd', text: 'queryParams are only available in guards' },
      ],
      correctOptionId: 'b',
      explanation:
        'Query params are key/value pairs after `?` and are not part of the route path matching.',
      tags: ['Query Params'],
    },
    {
      id: 'q9',
      title: 'Reading Params',
      prompt: 'A common way to react to param changes inside a component is:',
      options: [
        {
          id: 'a',
          text: 'Use ActivatedRoute.paramMap observable and subscribe',
        },
        { id: 'b', text: 'Use document.params()' },
        { id: 'c', text: 'Use RouterModule.params directly' },
        { id: 'd', text: 'Use window.location.params only' },
      ],
      correctOptionId: 'a',
      explanation:
        'ActivatedRoute.paramMap (or params) is commonly used to observe parameter changes.',
      tags: ['ActivatedRoute', 'Params'],
    },
    {
      id: 'q10',
      title: 'Performance Pattern',
      prompt:
        'Which routing pattern can also improve performance in large apps?',
      options: [
        { id: 'a', text: 'Putting every component in the root route eagerly' },
        {
          id: 'b',
          text: 'Lazy-loading feature areas and using standalone routes where appropriate',
        },
        { id: 'c', text: 'Disabling route guards everywhere' },
        { id: 'd', text: 'Using only hash strategy always' },
      ],
      correctOptionId: 'b',
      explanation:
        'Lazy-loading feature routes is a common performance pattern to keep initial load small.',
      tags: ['Performance', 'Lazy Loading'],
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
    if (this.isSubmittedForCurrent()) return;
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

  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
