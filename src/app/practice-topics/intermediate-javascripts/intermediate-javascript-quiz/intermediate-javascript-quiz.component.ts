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
  selector: 'app-intermediate-javascript-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intermediate-javascript-quiz.component.html',
  styleUrl: './intermediate-javascript-quiz.component.scss',
})
export class IntermediateJavascriptQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'let / const vs var',
      prompt: 'Which statement is correct about let/const compared to var?',
      options: [
        { id: 'a', text: 'var is block-scoped, let is function-scoped' },
        { id: 'b', text: 'let/const are block-scoped; var is function-scoped' },
        { id: 'c', text: 'let is global-scoped only' },
        { id: 'd', text: 'const is function-scoped' },
      ],
      correctOptionId: 'b',
      explanation:
        'let/const are block-scoped, while var is function-scoped (and also allows redeclaration).',
      tags: ['Scope'],
    },
    {
      id: 'q2',
      title: 'Hoisting',
      prompt:
        'What happens if you access a let variable before its declaration?',
      options: [
        { id: 'a', text: 'It returns undefined like var' },
        {
          id: 'b',
          text: 'It throws a ReferenceError due to the Temporal Dead Zone (TDZ)',
        },
        { id: 'c', text: 'It automatically declares the variable' },
        { id: 'd', text: 'It converts let to var' },
      ],
      correctOptionId: 'b',
      explanation:
        'let/const are hoisted but not initialized. Accessing them before declaration triggers TDZ ReferenceError.',
      tags: ['Hoisting', 'TDZ'],
    },
    {
      id: 'q3',
      title: 'const',
      prompt: 'Which statement about const is correct?',
      options: [
        { id: 'a', text: 'const variables cannot be reassigned' },
        { id: 'b', text: 'const objects are deeply immutable automatically' },
        { id: 'c', text: 'const behaves exactly like var' },
        { id: 'd', text: 'const must be declared without initialization' },
      ],
      correctOptionId: 'a',
      explanation:
        'const prevents reassignment of the binding, but objects/arrays can still be mutated unless you freeze them.',
      tags: ['const'],
    },
    {
      id: 'q4',
      title: 'Rest Operator',
      prompt:
        'What does the rest operator do in function parameters?\n\nfunction sum(...nums) { }',
      options: [
        { id: 'a', text: 'Spreads an array into separate arguments' },
        { id: 'b', text: 'Collects remaining arguments into an array' },
        { id: 'c', text: 'Creates a deep clone of an object' },
        { id: 'd', text: 'Stops function execution' },
      ],
      correctOptionId: 'b',
      explanation:
        'Rest syntax (...nums) collects remaining arguments into an array.',
      tags: ['Rest'],
    },
    {
      id: 'q5',
      title: 'Rest in Destructuring',
      prompt:
        'What does this do?\n\nconst { a, ...rest } = { a: 1, b: 2, c: 3 };',
      options: [
        { id: 'a', text: 'rest becomes 1' },
        { id: 'b', text: 'rest becomes { b: 2, c: 3 }' },
        { id: 'c', text: 'rest becomes { a: 1 }' },
        { id: 'd', text: 'It throws an error' },
      ],
      correctOptionId: 'b',
      explanation:
        'Object rest collects the remaining properties that were not destructured into a new object.',
      tags: ['Rest', 'Destructuring'],
    },
    {
      id: 'q6',
      title: 'Spread Operator',
      prompt: 'What is a common use of the spread operator in arrays?',
      options: [
        { id: 'a', text: 'To collect function arguments' },
        { id: 'b', text: 'To merge/copy arrays like [...a, ...b]' },
        { id: 'c', text: 'To create a new scope' },
        { id: 'd', text: 'To disable hoisting' },
      ],
      correctOptionId: 'b',
      explanation:
        'Spread expands an iterable into elements. It’s commonly used to copy/merge arrays.',
      tags: ['Spread'],
    },
    {
      id: 'q7',
      title: 'Spread vs Rest',
      prompt: 'Which statement best describes spread vs rest?',
      options: [
        { id: 'a', text: 'Rest expands, spread collects' },
        { id: 'b', text: 'Spread expands, rest collects' },
        { id: 'c', text: 'They are identical in all contexts' },
        {
          id: 'd',
          text: 'Rest works only with objects; spread only with arrays',
        },
      ],
      correctOptionId: 'b',
      explanation:
        'Spread expands values (e.g., ...arr), rest collects values (e.g., function(...args)).',
      tags: ['Spread', 'Rest'],
    },
    {
      id: 'q8',
      title: 'Arrow Functions & this',
      prompt: 'How does `this` behave in arrow functions?',
      options: [
        { id: 'a', text: '`this` is dynamically bound at call time' },
        {
          id: 'b',
          text: '`this` is lexically captured from the surrounding scope',
        },
        { id: 'c', text: '`this` always refers to window' },
        { id: 'd', text: '`this` is undefined in arrow functions' },
      ],
      correctOptionId: 'b',
      explanation:
        'Arrow functions do not have their own `this`; they capture `this` from the surrounding lexical scope.',
      tags: ['Arrow Functions', 'this'],
    },
    {
      id: 'q9',
      title: 'Arrow Functions',
      prompt: 'Which is a valid concise arrow function that returns an object?',
      options: [
        { id: 'a', text: 'const f = () => { a: 1 }' },
        { id: 'b', text: 'const f = () => ({ a: 1 })' },
        { id: 'c', text: 'const f = () => [a: 1]' },
        { id: 'd', text: 'const f = () => return { a: 1 }' },
      ],
      correctOptionId: 'b',
      explanation:
        'To return an object literal in a concise body, wrap it in parentheses: () => ({ a: 1 }).',
      tags: ['Arrow Functions'],
    },
    {
      id: 'q10',
      title: 'Practical Angular/TS Relevance',
      prompt:
        'Why is understanding `this` in arrow functions important in Angular/TS?',
      options: [
        { id: 'a', text: 'Because arrow functions disable TypeScript types' },
        {
          id: 'b',
          text: 'Because callbacks/handlers often depend on correct `this` context',
        },
        {
          id: 'c',
          text: 'Because Angular templates only accept arrow functions',
        },
        { id: 'd', text: 'Because arrow functions prevent change detection' },
      ],
      correctOptionId: 'b',
      explanation:
        'Event handlers, callbacks, and async code can break if `this` is not what you expect. Arrow functions help preserve lexical `this`.',
      tags: ['Arrow Functions', 'Context'],
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
