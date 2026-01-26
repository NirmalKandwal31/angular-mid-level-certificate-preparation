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
  selector: 'app-pipes-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-quiz.component.html',
  styleUrl: './pipes-quiz.component.scss',
})
export class PipesQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'What are Pipes?',
      prompt: 'In Angular, pipes are primarily used to:',
      options: [
        { id: 'a', text: 'Fetch data from APIs' },
        {
          id: 'b',
          text: 'Transform values in templates (and optionally in code via PipeTransform)',
        },
        { id: 'c', text: 'Create routes automatically' },
        { id: 'd', text: 'Replace components with directives' },
      ],
      correctOptionId: 'b',
      explanation:
        'Pipes format/transform data for display (e.g., date, currency) and can be custom-built using PipeTransform.',
      tags: ['Basics'],
    },
    {
      id: 'q2',
      title: 'Common Angular Pipes',
      prompt: 'Which of the following are built-in Angular pipes?',
      options: [
        { id: 'a', text: 'date, currency, percent' },
        { id: 'b', text: 'http, router, guard' },
        { id: 'c', text: 'signal, computed, effect' },
        { id: 'd', text: 'component, module, service' },
      ],
      correctOptionId: 'a',
      explanation:
        'Angular provides built-in pipes such as DatePipe, CurrencyPipe, PercentPipe, etc.',
      tags: ['Built-in'],
    },
    {
      id: 'q3',
      title: 'Pipe Syntax',
      prompt: 'What is the correct syntax to use a pipe in a template?',
      options: [
        { id: 'a', text: '{{ value -> date }}' },
        { id: 'b', text: '{{ value | date }}' },
        { id: 'c', text: '{{ pipe(value, date) }}' },
        { id: 'd', text: '{{ value :: date }}' },
      ],
      correctOptionId: 'b',
      explanation:
        'Pipes use the `|` operator in templates: `{{ value | pipeName }}`.',
      tags: ['Syntax'],
    },
    {
      id: 'q4',
      title: 'Pipe Parameters',
      prompt: 'How do you pass parameters to a pipe?',
      options: [
        { id: 'a', text: '{{ value | date("short") }}' },
        { id: 'b', text: '{{ value | date: "short" }}' },
        { id: 'c', text: '{{ value | date = "short" }}' },
        { id: 'd', text: '{{ value | date, "short" }}' },
      ],
      correctOptionId: 'b',
      explanation:
        'Pipe args are passed using colon syntax: `{{ value | date:"short" }}`. Multiple args use multiple colons.',
      tags: ['Syntax', 'Params'],
    },
    {
      id: 'q5',
      title: 'Multiple Pipe Args',
      prompt: 'Which is a correct example of multiple pipe arguments?',
      options: [
        { id: 'a', text: '{{ price | currency:"USD":"symbol":"1.2-2" }}' },
        { id: 'b', text: '{{ price | currency("USD","symbol","1.2-2") }}' },
        { id: 'c', text: '{{ price | currency = "USD" }}' },
        { id: 'd', text: '{{ price | currency -> "USD" }}' },
      ],
      correctOptionId: 'a',
      explanation:
        'Multiple arguments are passed separated by colons for built-in pipes like currency.',
      tags: ['Params'],
    },
    {
      id: 'q6',
      title: 'When to Use Pipes',
      prompt: 'When are pipes most appropriate?',
      options: [
        {
          id: 'a',
          text: 'When you need formatting/transformation for display in the template',
        },
        { id: 'b', text: 'When you need to store data in localStorage' },
        { id: 'c', text: 'When you want to create services' },
        { id: 'd', text: 'When you want to handle routing guards' },
      ],
      correctOptionId: 'a',
      explanation:
        'Pipes are ideal for display formatting or light transformations in templates.',
      tags: ['Best Practices'],
    },
    {
      id: 'q7',
      title: 'Pure vs Impure Pipes',
      prompt: 'By default, Angular pipes are:',
      options: [
        { id: 'a', text: 'Impure (run on every change detection)' },
        { id: 'b', text: 'Pure (run only when input reference/value changes)' },
        { id: 'c', text: 'Always async' },
        { id: 'd', text: 'Always memoized across routes' },
      ],
      correctOptionId: 'b',
      explanation:
        'Pure pipes run only when the input changes (by value/reference). Impure pipes run more often and can be expensive.',
      tags: ['Performance'],
    },
    {
      id: 'q8',
      title: 'Impure Pipes',
      prompt: 'What is the risk of making a pipe impure (pure: false)?',
      options: [
        { id: 'a', text: 'It will stop rendering altogether' },
        { id: 'b', text: 'It may run very frequently and hurt performance' },
        { id: 'c', text: 'It cannot accept arguments' },
        { id: 'd', text: 'It disables Ivy' },
      ],
      correctOptionId: 'b',
      explanation:
        'Impure pipes can execute on every change detection cycle, so expensive work can cause performance issues.',
      tags: ['Performance'],
    },
    {
      id: 'q9',
      title: 'Custom Pipes',
      prompt: 'To create a custom pipe, you typically:',
      options: [
        {
          id: 'a',
          text: 'Create a class with @Pipe decorator and implement PipeTransform',
        },
        { id: 'b', text: 'Create a service and add it to providers' },
        { id: 'c', text: 'Create a directive with @HostListener' },
        { id: 'd', text: 'Edit angular.json only' },
      ],
      correctOptionId: 'a',
      explanation:
        'Custom pipes use `@Pipe({ name: "..." })` and implement `transform(...)` from PipeTransform.',
      tags: ['Custom Pipe'],
    },
    {
      id: 'q10',
      title: 'What NOT to Put in a Pipe',
      prompt: 'Which is generally NOT a good idea inside a pipe?',
      options: [
        { id: 'a', text: 'Light formatting of values' },
        {
          id: 'b',
          text: 'Heavy side effects like making HTTP requests on every transform call',
        },
        { id: 'c', text: 'Converting dates to readable strings' },
        { id: 'd', text: 'Mapping a value to a label' },
      ],
      correctOptionId: 'b',
      explanation:
        'Pipes should be pure transformations. Doing HTTP calls/side effects inside pipes can cause repeated calls and performance bugs.',
      tags: ['Best Practices'],
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
