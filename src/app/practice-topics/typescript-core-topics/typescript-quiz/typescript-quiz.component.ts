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
  selector: 'app-typescript-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typescript-quiz.component.html',
  styleUrl: './typescript-quiz.component.scss',
})
export class TypescriptQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'What is TypeScript?',
      prompt: 'TypeScript is best described as:',
      options: [
        { id: 'a', text: 'A runtime that replaces JavaScript in the browser' },
        {
          id: 'b',
          text: 'A superset of JavaScript that adds static typing and compiles to JavaScript',
        },
        { id: 'c', text: 'A database query language' },
        { id: 'd', text: 'A CSS framework' },
      ],
      correctOptionId: 'b',
      explanation:
        'TypeScript adds a type system and tooling on top of JavaScript and compiles down to plain JavaScript.',
      tags: ['Basics'],
    },
    {
      id: 'q2',
      title: 'Why TypeScript?',
      prompt: 'What is a key benefit of TypeScript in large codebases?',
      options: [
        { id: 'a', text: 'It makes code run faster at runtime automatically' },
        { id: 'b', text: 'It prevents the need for testing' },
        {
          id: 'c',
          text: 'It improves maintainability via types, refactoring, and editor tooling',
        },
        { id: 'd', text: 'It removes the need for JavaScript' },
      ],
      correctOptionId: 'c',
      explanation:
        'Types improve readability, catch errors early, and make refactoring safer with better tooling support.',
      tags: ['Tooling', 'Maintainability'],
    },
    {
      id: 'q3',
      title: 'Type Inference',
      prompt: 'What happens here?\n\nlet x = 10;',
      options: [
        { id: 'a', text: 'x is type any by default' },
        { id: 'b', text: 'x is inferred as number' },
        { id: 'c', text: 'x is inferred as string' },
        { id: 'd', text: 'This is invalid TypeScript' },
      ],
      correctOptionId: 'b',
      explanation:
        'TypeScript infers x as number because the initial value is 10.',
      tags: ['Types', 'Inference'],
    },
    {
      id: 'q4',
      title: 'Arrays',
      prompt: 'Which is a valid way to type an array of numbers?',
      options: [
        { id: 'a', text: 'let nums: number = [1,2,3]' },
        { id: 'b', text: 'let nums: number[] = [1,2,3]' },
        { id: 'c', text: 'let nums: [number] = [1,2,3]' },
        { id: 'd', text: 'let nums: array<number> = [1,2,3]' },
      ],
      correctOptionId: 'b',
      explanation:
        '`number[]` is the common syntax for an array of numbers. (Another valid form is Array<number>.)',
      tags: ['Arrays'],
    },
    {
      id: 'q5',
      title: 'Classes',
      prompt: 'In TypeScript classes, what does the `public` modifier do?',
      options: [
        { id: 'a', text: 'Makes a member accessible only inside the class' },
        { id: 'b', text: 'Makes a member accessible from anywhere (default)' },
        { id: 'c', text: 'Makes a member accessible only in subclasses' },
        { id: 'd', text: 'Makes a member immutable' },
      ],
      correctOptionId: 'b',
      explanation:
        '`public` means accessible from outside the class. It is the default if you omit an access modifier.',
      tags: ['Classes'],
    },
    {
      id: 'q6',
      title: 'Classes',
      prompt:
        'What is the correct way to define and initialize a class property via constructor parameter properties?',
      options: [
        { id: 'a', text: 'constructor(name: string) { public name = name; }' },
        { id: 'b', text: 'constructor(public name: string) {}' },
        { id: 'c', text: 'constructor(name public: string) {}' },
        { id: 'd', text: 'constructor(public: string name) {}' },
      ],
      correctOptionId: 'b',
      explanation:
        'Parameter properties: `constructor(public name: string) {}` creates and assigns `this.name` automatically.',
      tags: ['Classes', 'Constructor'],
    },
    {
      id: 'q7',
      title: 'Template Strings',
      prompt:
        'What does this print?\n\nconst name = "Sam";\nconsole.log(`Hello, ${name}!`);',
      options: [
        { id: 'a', text: 'Hello, ${name}!' },
        { id: 'b', text: 'Hello, Sam!' },
        { id: 'c', text: 'Hello, name!' },
        { id: 'd', text: 'Syntax error' },
      ],
      correctOptionId: 'b',
      explanation: 'Template strings interpolate expressions inside ${...}.',
      tags: ['Template Strings'],
    },
    {
      id: 'q8',
      title: 'Template Strings',
      prompt:
        'Which feature is supported by template literals (backticks) that single quotes do not support?',
      options: [
        { id: 'a', text: 'String concatenation' },
        { id: 'b', text: 'Multi-line strings and interpolation' },
        { id: 'c', text: 'Numbers in strings' },
        { id: 'd', text: 'Uppercasing strings' },
      ],
      correctOptionId: 'b',
      explanation:
        'Backticks support multi-line strings and ${expression} interpolation.',
      tags: ['Template Strings'],
    },
    {
      id: 'q9',
      title: 'Types',
      prompt:
        'What is the safest type for a value that can be either string or null?',
      options: [
        { id: 'a', text: 'string|null' },
        { id: 'b', text: 'string|undefined|null|any' },
        { id: 'c', text: 'object' },
        { id: 'd', text: 'never' },
      ],
      correctOptionId: 'a',
      explanation:
        'Use a union: `string | null` to explicitly represent both possibilities.',
      tags: ['Union Types'],
    },
    {
      id: 'q10',
      title: 'Tooling',
      prompt: 'Why can TypeScript catch many bugs before runtime?',
      options: [
        { id: 'a', text: 'Because it runs code twice' },
        {
          id: 'b',
          text: 'Because it enforces types and checks code at compile time',
        },
        { id: 'c', text: 'Because it replaces the browser engine' },
        { id: 'd', text: 'Because it disables JavaScript errors' },
      ],
      correctOptionId: 'b',
      explanation:
        'TypeScript performs static analysis and type-checking during development/compile time.',
      tags: ['Tooling', 'Type Checking'],
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
