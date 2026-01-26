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
  selector: 'app-intermediate-typescript-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intermediate-typescript-quiz.component.html',
  styleUrl: './intermediate-typescript-quiz.component.scss',
})
export class IntermediateTypescriptQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Union Types',
      prompt: 'What does this mean?\n\ntype Id = string | number;',
      options: [
        { id: 'a', text: 'Id must be both string and number at the same time' },
        { id: 'b', text: 'Id can be either a string or a number' },
        { id: 'c', text: 'Id can only be null' },
        { id: 'd', text: 'Id is an enum' },
      ],
      correctOptionId: 'b',
      explanation:
        'A union type (A | B) allows values to be either type A or type B.',
      tags: ['Union'],
    },
    {
      id: 'q2',
      title: 'Union Narrowing',
      prompt:
        'Given `value: string | number`, what is the most correct way to safely call string methods?',
      options: [
        { id: 'a', text: 'value.toUpperCase()' },
        { id: 'b', text: 'if (typeof value === "string") value.toUpperCase()' },
        { id: 'c', text: 'value as any; value.toUpperCase()' },
        { id: 'd', text: 'value!.toUpperCase()' },
      ],
      correctOptionId: 'b',
      explanation:
        'You should narrow the union using a type guard (typeof, instanceof, in, etc.) before using type-specific members.',
      tags: ['Union', 'Narrowing'],
    },
    {
      id: 'q3',
      title: 'Utility Types — Partial',
      prompt: 'What does Partial<T> do?',
      options: [
        { id: 'a', text: 'Makes all properties of T required' },
        { id: 'b', text: 'Makes all properties of T optional' },
        { id: 'c', text: 'Removes all properties from T' },
        { id: 'd', text: 'Turns T into a function type' },
      ],
      correctOptionId: 'b',
      explanation:
        'Partial<T> converts all properties of T into optional properties.',
      tags: ['Utility Types', 'Partial'],
    },
    {
      id: 'q4',
      title: 'Utility Types — Pick',
      prompt: 'What does Pick<T, K> do?',
      options: [
        { id: 'a', text: 'Selects a subset of properties K from T' },
        { id: 'b', text: 'Removes properties K from T' },
        { id: 'c', text: 'Makes properties K optional' },
        { id: 'd', text: 'Converts K into an enum' },
      ],
      correctOptionId: 'a',
      explanation:
        'Pick<T, K> creates a type with only the selected keys K from T.',
      tags: ['Utility Types', 'Pick'],
    },
    {
      id: 'q5',
      title: 'Utility Types — Omit',
      prompt: 'What does Omit<T, K> do?',
      options: [
        { id: 'a', text: 'Keeps only the keys K in T' },
        { id: 'b', text: 'Removes the keys K from T' },
        { id: 'c', text: 'Makes keys K optional' },
        { id: 'd', text: 'Converts keys K to readonly' },
      ],
      correctOptionId: 'b',
      explanation:
        'Omit<T, K> creates a type by taking T and removing the properties K.',
      tags: ['Utility Types', 'Omit'],
    },
    {
      id: 'q6',
      title: 'Constructor Parameter Properties',
      prompt:
        'What does this do?\n\nclass User {\n  constructor(public name: string) {}\n}',
      options: [
        { id: 'a', text: 'It is invalid syntax' },
        {
          id: 'b',
          text: 'It declares a public property name and assigns it automatically',
        },
        { id: 'c', text: 'It creates a private property name' },
        { id: 'd', text: 'It converts name into an enum' },
      ],
      correctOptionId: 'b',
      explanation:
        'Parameter properties automatically create and assign the class property (this.name) based on the constructor parameter.',
      tags: ['Classes', 'Constructor'],
    },
    {
      id: 'q7',
      title: 'Enums',
      prompt: 'Which statement about TypeScript enums is most accurate?',
      options: [
        {
          id: 'a',
          text: 'Enums exist only at compile time and never in emitted JavaScript',
        },
        {
          id: 'b',
          text: 'Enums can exist at runtime (for non-const enums) and can be used like objects',
        },
        { id: 'c', text: 'Enums can only store strings' },
        { id: 'd', text: 'Enums are the same as union types' },
      ],
      correctOptionId: 'b',
      explanation:
        'Regular enums emit JavaScript and exist at runtime. `const enum` can be inlined (depending on compiler settings).',
      tags: ['Enums'],
    },
    {
      id: 'q8',
      title: 'Enums — Use Case',
      prompt: 'A good use-case for enums is:',
      options: [
        { id: 'a', text: 'When you want untyped random strings everywhere' },
        {
          id: 'b',
          text: 'When you need a fixed set of named constants (e.g., roles/status)',
        },
        { id: 'c', text: 'When you want to replace all interfaces' },
        { id: 'd', text: 'When you want to avoid any compilation' },
      ],
      correctOptionId: 'b',
      explanation:
        'Enums are helpful for a fixed, named set of values like roles, statuses, modes, etc.',
      tags: ['Enums'],
    },
    {
      id: 'q9',
      title: 'Nullish Coalescing (??)',
      prompt: 'What does `value ?? "default"` do?',
      options: [
        {
          id: 'a',
          text: 'Uses "default" if value is falsy (0, "", false, null, undefined)',
        },
        { id: 'b', text: 'Uses "default" only if value is null or undefined' },
        { id: 'c', text: 'Always returns "default"' },
        { id: 'd', text: 'Throws if value is null' },
      ],
      correctOptionId: 'b',
      explanation:
        'Nullish coalescing only falls back when the left side is null or undefined (not for 0/""/false).',
      tags: ['Nullish', 'Operators'],
    },
    {
      id: 'q10',
      title: '?? vs ||',
      prompt: 'Which is true about `??` compared to `||`?',
      options: [
        { id: 'a', text: 'They behave exactly the same' },
        {
          id: 'b',
          text: '|| treats many falsy values (0, "", false) as fallback; ?? does not',
        },
        { id: 'c', text: '?? works only with numbers' },
        { id: 'd', text: '|| works only with strings' },
      ],
      correctOptionId: 'b',
      explanation:
        '`||` falls back on any falsy value, while `??` only falls back on null/undefined.',
      tags: ['Nullish', 'Operators'],
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
