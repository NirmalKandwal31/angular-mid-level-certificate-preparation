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
  selector: 'app-directives-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-quiz.component.html',
  styleUrl: './directives-quiz.component.scss',
})
export class DirectivesQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Directives Basics',
      prompt: 'In Angular, a directive is best described as:',
      options: [
        { id: 'a', text: 'A database schema used for forms' },
        {
          id: 'b',
          text: 'A way to add behavior to existing elements/components in templates',
        },
        { id: 'c', text: 'A build tool used by Angular CLI' },
        { id: 'd', text: 'A replacement for TypeScript' },
      ],
      correctOptionId: 'b',
      explanation:
        'Directives are instructions in the template that can add behavior, change appearance, or control rendering.',
      tags: ['Basics'],
    },
    {
      id: 'q2',
      title: 'Structural Directives',
      prompt: 'Which option is a structural directive?',
      options: [
        { id: 'a', text: 'ngClass' },
        { id: 'b', text: 'ngStyle' },
        { id: 'c', text: '*ngIf' },
        { id: 'd', text: '[(ngModel)]' },
      ],
      correctOptionId: 'c',
      explanation:
        '*ngIf is a structural directive because it changes the DOM structure by adding/removing elements.',
      tags: ['Structural'],
    },
    {
      id: 'q3',
      title: 'ngIf',
      prompt: 'What does *ngIf do?',
      options: [
        { id: 'a', text: 'Applies CSS classes dynamically' },
        { id: 'b', text: 'Conditionally adds/removes elements from the DOM' },
        { id: 'c', text: 'Loops through arrays' },
        { id: 'd', text: 'Creates routes automatically' },
      ],
      correctOptionId: 'b',
      explanation:
        '*ngIf conditionally includes a template block based on a boolean expression.',
      tags: ['Structural', 'ngIf'],
    },
    {
      id: 'q4',
      title: 'ngFor',
      prompt: 'What does *ngFor do?',
      options: [
        { id: 'a', text: 'Conditionally renders content' },
        { id: 'b', text: 'Creates a service instance per loop' },
        { id: 'c', text: 'Repeats a template for each item in a collection' },
        { id: 'd', text: 'Adds CSS styles dynamically' },
      ],
      correctOptionId: 'c',
      explanation:
        '*ngFor repeats a template block for each item in an iterable (like an array).',
      tags: ['Structural', 'ngFor'],
    },
    {
      id: 'q5',
      title: 'Structural vs Attribute',
      prompt:
        'What is the key difference between structural and attribute directives?',
      options: [
        {
          id: 'a',
          text: 'Structural directives change DOM structure; attribute directives change appearance/behavior of existing elements',
        },
        {
          id: 'b',
          text: 'Attribute directives create routes; structural directives create services',
        },
        { id: 'c', text: 'Structural directives work only in modules' },
        { id: 'd', text: 'Attribute directives can only be used with ngIf' },
      ],
      correctOptionId: 'a',
      explanation:
        'Structural directives add/remove/replace elements. Attribute directives modify an existing element’s behavior or styling.',
      tags: ['Structural', 'Attribute'],
    },
    {
      id: 'q6',
      title: 'ngClass',
      prompt: 'What does ngClass typically do?',
      options: [
        {
          id: 'a',
          text: 'Adds/removes CSS classes dynamically based on an expression',
        },
        { id: 'b', text: 'Loops through data' },
        { id: 'c', text: 'Fetches API data' },
        { id: 'd', text: 'Creates DOM nodes manually' },
      ],
      correctOptionId: 'a',
      explanation:
        'ngClass is an attribute directive used to toggle CSS classes dynamically.',
      tags: ['Attribute', 'ngClass'],
    },
    {
      id: 'q7',
      title: 'ngStyle',
      prompt: 'What does ngStyle typically do?',
      options: [
        { id: 'a', text: 'Changes routes dynamically' },
        {
          id: 'b',
          text: 'Applies inline styles dynamically from an expression/object',
        },
        { id: 'c', text: 'Creates template reference variables' },
        { id: 'd', text: 'Compiles templates at runtime' },
      ],
      correctOptionId: 'b',
      explanation:
        'ngStyle sets inline styles dynamically (often using an object map).',
      tags: ['Attribute', 'ngStyle'],
    },
    {
      id: 'q8',
      title: 'Common Mistake',
      prompt:
        'Why do structural directives commonly appear with a * (asterisk) like *ngIf?',
      options: [
        { id: 'a', text: 'It is required for all Angular directives' },
        {
          id: 'b',
          text: 'It indicates Angular will transform it into an <ng-template> behind the scenes',
        },
        { id: 'c', text: 'It means the directive is deprecated' },
        { id: 'd', text: 'It disables change detection' },
      ],
      correctOptionId: 'b',
      explanation:
        'The * is syntactic sugar. Angular rewrites it into an <ng-template> form internally.',
      tags: ['Structural'],
    },
    {
      id: 'q9',
      title: 'TrackBy (ngFor)',
      prompt: 'Why is trackBy used with *ngFor?',
      options: [
        { id: 'a', text: 'To stop change detection completely' },
        {
          id: 'b',
          text: 'To help Angular efficiently identify items and reduce DOM re-renders',
        },
        { id: 'c', text: 'To make ngFor work with objects only' },
        { id: 'd', text: 'To force sorting of the array' },
      ],
      correctOptionId: 'b',
      explanation:
        'trackBy improves performance by helping Angular reuse existing DOM nodes when list items change.',
      tags: ['ngFor', 'Performance'],
    },
    {
      id: 'q10',
      title: 'Attribute Directive Example',
      prompt: 'Which is an example of an attribute directive usage?',
      options: [
        { id: 'a', text: '<div *ngIf="isVisible"></div>' },
        { id: 'b', text: '<li *ngFor="let item of items"></li>' },
        { id: 'c', text: '<div [ngClass]="{ active: isActive }"></div>' },
        { id: 'd', text: '<ng-template #tpl></ng-template>' },
      ],
      correctOptionId: 'c',
      explanation:
        'ngClass is an attribute directive because it modifies an existing element (classes) without changing the DOM structure.',
      tags: ['Attribute'],
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
