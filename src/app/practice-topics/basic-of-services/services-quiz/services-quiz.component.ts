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
  selector: 'app-services-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-quiz.component.html',
  styleUrl: './services-quiz.component.scss',
})
export class ServicesQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Dependency Injection (DI)',
      prompt: 'What is the main purpose of Dependency Injection in Angular?',
      options: [
        { id: 'a', text: 'To directly manipulate the DOM faster' },
        {
          id: 'b',
          text: 'To reduce coupling and make dependencies easier to test and replace',
        },
        { id: 'c', text: 'To compile templates at runtime' },
        { id: 'd', text: 'To store routes globally' },
      ],
      correctOptionId: 'b',
      explanation:
        'DI provides dependencies from the outside, which reduces coupling and improves testability and maintainability.',
      tags: ['DI', 'Basics'],
    },
    {
      id: 'q2',
      title: 'Provider Scope',
      prompt: 'What does `providedIn: "root"` usually mean for a service?',
      options: [
        { id: 'a', text: 'A new instance is created for every component' },
        {
          id: 'b',
          text: 'A single app-wide singleton instance is created (root injector)',
        },
        {
          id: 'c',
          text: 'The service can only be used inside lazy-loaded routes',
        },
        { id: 'd', text: 'The service is only available in templates' },
      ],
      correctOptionId: 'b',
      explanation:
        '`providedIn: "root"` registers the service in the root injector, typically giving you a singleton for the whole app.',
      tags: ['Providers', 'Scope'],
    },
    {
      id: 'q3',
      title: 'Injecting a Service',
      prompt:
        'Which is a correct way to inject a service into a component class?',
      options: [
        { id: 'a', text: 'new MyService() inside the component' },
        { id: 'b', text: 'constructor(private myService: MyService) {}' },
        { id: 'c', text: 'MyService.inject()' },
        { id: 'd', text: 'import MyService from "angular"' },
      ],
      correctOptionId: 'b',
      explanation:
        'Constructor injection is the most common DI pattern: Angular provides the instance from the injector.',
      tags: ['DI', 'Injection'],
    },
    {
      id: 'q4',
      title: 'inject() function',
      prompt:
        'In modern Angular, what does the `inject(MyService)` function do?',
      options: [
        { id: 'a', text: 'Creates a new instance bypassing the injector' },
        {
          id: 'b',
          text: 'Retrieves the dependency from the current injection context/injector',
        },
        { id: 'c', text: 'Registers the service automatically in root' },
        { id: 'd', text: 'Only works inside templates' },
      ],
      correctOptionId: 'b',
      explanation:
        '`inject()` is an alternative to constructor injection (usable in supported injection contexts) and fetches the dependency from DI.',
      tags: ['inject()', 'DI'],
    },
    {
      id: 'q5',
      title: 'When to Use Services',
      prompt: 'Which scenario is the best reason to create an Angular service?',
      options: [
        { id: 'a', text: 'To keep HTML styles inside TypeScript' },
        {
          id: 'b',
          text: 'To share business logic/data access/state across multiple components',
        },
        { id: 'c', text: 'To replace the router' },
        { id: 'd', text: 'To avoid using TypeScript interfaces' },
      ],
      correctOptionId: 'b',
      explanation:
        'Services are ideal for shared logic, state, API calls, and cross-component concerns.',
      tags: ['Services', 'Architecture'],
    },
    {
      id: 'q6',
      title: 'Anti-pattern',
      prompt:
        'Why is calling `new SomeService()` inside a component usually a bad idea?',
      options: [
        {
          id: 'a',
          text: 'It breaks encapsulation and bypasses DI, making testing and configuration harder',
        },
        { id: 'b', text: 'It makes the app compile slower only' },
        { id: 'c', text: 'It automatically disables change detection' },
        { id: 'd', text: 'It is required for standalone components' },
      ],
      correctOptionId: 'a',
      explanation:
        'Bypassing DI makes it harder to mock dependencies, manage lifetimes/scopes, and apply Angular provider configuration.',
      tags: ['DI', 'Best Practices'],
    },
    {
      id: 'q7',
      title: 'Service Lifetime',
      prompt:
        'If a service is provided in a component’s `providers: []`, what typically happens?',
      options: [
        { id: 'a', text: 'The service becomes app-wide singleton' },
        {
          id: 'b',
          text: 'A new instance is created for that component subtree',
        },
        { id: 'c', text: 'The service cannot be injected anywhere' },
        { id: 'd', text: 'The service is only available inside modules' },
      ],
      correctOptionId: 'b',
      explanation:
        'Component-level providers create a new instance scoped to that component and its children.',
      tags: ['Providers', 'Scope'],
    },
    {
      id: 'q8',
      title: 'Practical Usage',
      prompt: 'Which is a common responsibility of a service in Angular apps?',
      options: [
        { id: 'a', text: 'DOM querying and manual rendering' },
        {
          id: 'b',
          text: 'API communication (HttpClient), caching, and shared state',
        },
        { id: 'c', text: 'Replacing components with directives' },
        { id: 'd', text: 'Compiling CSS to JS' },
      ],
      correctOptionId: 'b',
      explanation:
        'Services often handle data access, API calls, caching, shared state, and business logic.',
      tags: ['Services', 'Real World'],
    },
    {
      id: 'q9',
      title: 'Testing Benefit',
      prompt: 'How does DI help with unit testing?',
      options: [
        { id: 'a', text: 'It prevents TypeScript errors' },
        {
          id: 'b',
          text: 'It allows replacing real dependencies with mocks/fakes easily',
        },
        { id: 'c', text: 'It makes templates shorter' },
        { id: 'd', text: 'It removes async code' },
      ],
      correctOptionId: 'b',
      explanation:
        'You can provide mocks/stubs in tests, making isolated unit tests much easier.',
      tags: ['Testing', 'DI'],
    },
    {
      id: 'q10',
      title: 'Choosing Between Component vs Service',
      prompt: 'What should usually NOT go into a service?',
      options: [
        { id: 'a', text: 'Reusable business logic and shared state' },
        {
          id: 'b',
          text: 'Pure UI rendering concerns that belong to one component only',
        },
        { id: 'c', text: 'API communication logic' },
        { id: 'd', text: 'Cross-cutting logic used by many components' },
      ],
      correctOptionId: 'b',
      explanation:
        'Services should focus on shared logic/state/data. Purely component-specific UI concerns usually stay in the component.',
      tags: ['Architecture'],
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
