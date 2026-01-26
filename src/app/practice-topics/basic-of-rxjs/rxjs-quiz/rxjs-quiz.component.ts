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
  selector: 'app-rxjs-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-quiz.component.html',
  styleUrl: './rxjs-quiz.component.scss',
})
export class RxjsQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Observables Basics',
      prompt: 'What best describes an Observable in RxJS?',
      options: [
        { id: 'a', text: 'A function that returns a Promise immediately' },
        {
          id: 'b',
          text: 'A lazy stream of values over time that can emit next/error/complete',
        },
        { id: 'c', text: 'A global variable for async data' },
        { id: 'd', text: 'A router feature' },
      ],
      correctOptionId: 'b',
      explanation:
        'Observables represent lazy streams that can emit multiple values over time and can complete or error.',
      tags: ['Observables'],
    },
    {
      id: 'q2',
      title: 'Cold vs Hot (Concept)',
      prompt:
        'By default, most Observables created via `new Observable()` or `of()` are:',
      options: [
        { id: 'a', text: 'Hot (shared by default across subscribers)' },
        { id: 'b', text: 'Cold (each subscription executes independently)' },
        { id: 'c', text: 'Always multicast without operators' },
        { id: 'd', text: 'Synchronous only' },
      ],
      correctOptionId: 'b',
      explanation:
        'Cold observables start producing values on subscription; each subscriber typically gets its own execution.',
      tags: ['Observables'],
    },
    {
      id: 'q3',
      title: 'subscribe()',
      prompt: 'What does calling `subscribe()` do?',
      options: [
        { id: 'a', text: 'Defines operators but does not start execution' },
        {
          id: 'b',
          text: 'Starts the observable execution and listens for emissions',
        },
        { id: 'c', text: 'Converts Observable into Promise automatically' },
        { id: 'd', text: 'Creates a new Angular service' },
      ],
      correctOptionId: 'b',
      explanation:
        'Observables are lazy; `subscribe()` triggers execution and registers observers for next/error/complete.',
      tags: ['Subscription'],
    },
    {
      id: 'q4',
      title: 'pipe()',
      prompt: 'What does `pipe()` do in RxJS?',
      options: [
        { id: 'a', text: 'Creates HTTP pipelines only' },
        { id: 'b', text: 'Chains operators to transform/compose observables' },
        { id: 'c', text: 'Unsubscribes automatically' },
        { id: 'd', text: 'Replaces subscribe()' },
      ],
      correctOptionId: 'b',
      explanation:
        '`pipe()` is used to apply operators like map/filter/switchMap to an observable.',
      tags: ['Operators'],
    },
    {
      id: 'q5',
      title: 'map()',
      prompt: 'What does the `map()` operator do?',
      options: [
        { id: 'a', text: 'Cancels previous HTTP requests' },
        { id: 'b', text: 'Transforms each emitted value into a new value' },
        { id: 'c', text: 'Filters out emissions' },
        { id: 'd', text: 'Delays emissions by default' },
      ],
      correctOptionId: 'b',
      explanation:
        '`map()` transforms each emission (like Array.map) and returns a new observable of transformed values.',
      tags: ['Operators', 'map'],
    },
    {
      id: 'q6',
      title: 'switchMap()',
      prompt: 'Why is `switchMap()` commonly used with HTTP requests?',
      options: [
        {
          id: 'a',
          text: 'It merges all inner observables in parallel and keeps them all',
        },
        {
          id: 'b',
          text: 'It cancels the previous inner observable when a new value arrives',
        },
        { id: 'c', text: 'It makes observables synchronous' },
        { id: 'd', text: 'It prevents errors from happening' },
      ],
      correctOptionId: 'b',
      explanation:
        'switchMap switches to the latest inner observable and unsubscribes from the previous one—great for typeahead/search.',
      tags: ['Operators', 'switchMap'],
    },
    {
      id: 'q7',
      title: 'mergeMap vs switchMap',
      prompt: 'Which statement is most correct?',
      options: [
        {
          id: 'a',
          text: 'mergeMap cancels previous requests; switchMap runs all in parallel',
        },
        {
          id: 'b',
          text: 'switchMap cancels previous inner streams; mergeMap keeps all running (concurrent)',
        },
        { id: 'c', text: 'Both cancel previous requests always' },
        { id: 'd', text: 'Neither can handle HTTP calls' },
      ],
      correctOptionId: 'b',
      explanation:
        'switchMap switches to latest; mergeMap allows concurrent inner streams without cancellation.',
      tags: ['Operators'],
    },
    {
      id: 'q8',
      title: 'Unsubscribe Strategies',
      prompt:
        'Which is a common and recommended unsubscribe strategy in Angular components?',
      options: [
        {
          id: 'a',
          text: 'Never unsubscribe because Angular does it automatically for all subscriptions',
        },
        {
          id: 'b',
          text: 'Use takeUntil(destroy$) pattern or AsyncPipe in templates',
        },
        { id: 'c', text: 'Use setTimeout to stop subscriptions' },
        { id: 'd', text: 'Only unsubscribe in ngOnInit' },
      ],
      correctOptionId: 'b',
      explanation:
        'Common strategies: AsyncPipe (auto unsubscribe) and takeUntil with a destroy notifier to clean subscriptions.',
      tags: ['Unsubscribe'],
    },
    {
      id: 'q9',
      title: 'AsyncPipe',
      prompt: 'What does the AsyncPipe do in Angular templates?',
      options: [
        {
          id: 'a',
          text: 'Converts Observables to Promises and blocks rendering',
        },
        {
          id: 'b',
          text: 'Subscribes to an Observable and auto-unsubscribes when the view is destroyed',
        },
        { id: 'c', text: 'Disables change detection' },
        { id: 'd', text: 'Only works with Signals' },
      ],
      correctOptionId: 'b',
      explanation:
        'AsyncPipe handles subscription management for Observables/Promises and updates the UI automatically.',
      tags: ['AsyncPipe', 'Unsubscribe'],
    },
    {
      id: 'q10',
      title: 'Memory Leaks',
      prompt: 'Why can missing unsubscription cause issues?',
      options: [
        { id: 'a', text: 'It only affects CSS performance' },
        {
          id: 'b',
          text: 'Subscriptions may keep running and retain references, causing memory leaks and unexpected behavior',
        },
        { id: 'c', text: 'It breaks routing only' },
        { id: 'd', text: 'It prevents compilation' },
      ],
      correctOptionId: 'b',
      explanation:
        'Long-lived subscriptions can continue emitting and keep objects alive, leading to memory leaks and logic bugs.',
      tags: ['Unsubscribe', 'Best Practices'],
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
