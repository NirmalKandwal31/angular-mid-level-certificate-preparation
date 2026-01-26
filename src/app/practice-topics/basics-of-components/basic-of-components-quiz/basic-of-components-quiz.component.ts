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
  selector: 'app-components-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-of-components-quiz.component.html',
  styleUrl: './basic-of-components-quiz.component.scss',
})
export class BasicOfComponentsQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Component Selector',
      prompt: 'Which selector is used to render a component in a template?',
      options: [
        { id: 'a', text: '<app-user-card></app-user-card>' },
        { id: 'b', text: '{{ app-user-card }}' },
        { id: 'c', text: '[app-user-card]' },
        { id: 'd', text: '(app-user-card)' },
      ],
      correctOptionId: 'a',
      explanation:
        'A component selector is typically used as an HTML element (e.g., <app-user-card>).',
      tags: ['Selector', 'Templates'],
    },
    {
      id: 'q2',
      title: 'Property Binding',
      prompt: 'What does property binding do in Angular?',
      options: [
        { id: 'a', text: 'Binds data from template to component only' },
        { id: 'b', text: 'Binds data from component to a DOM/property input' },
        { id: 'c', text: 'Binds DOM events to component methods' },
        { id: 'd', text: 'Creates two-way binding automatically' },
      ],
      correctOptionId: 'b',
      explanation:
        'Property binding (e.g., [value]="x") pushes data from component state to the DOM/property.',
      tags: ['Binding'],
    },
    {
      id: 'q3',
      title: 'Event Binding',
      prompt: 'What does event binding do?',
      options: [
        { id: 'a', text: 'Binds data from component to DOM property' },
        {
          id: 'b',
          text: 'Binds DOM events to component methods (e.g., (click)="...")',
        },
        { id: 'c', text: 'Binds CSS classes automatically' },
        { id: 'd', text: 'Binds routes to templates' },
      ],
      correctOptionId: 'b',
      explanation:
        'Event binding listens to DOM events and runs a component method/handler.',
      tags: ['Binding', 'Events'],
    },
    {
      id: 'q4',
      title: 'Two-way Binding',
      prompt: 'Which syntax represents two-way binding in Angular?',
      options: [
        { id: 'a', text: '(value)="name"' },
        { id: 'b', text: '[value]="name"' },
        { id: 'c', text: '[(ngModel)]="name"' },
        { id: 'd', text: '{{ name }}' },
      ],
      correctOptionId: 'c',
      explanation:
        'Two-way binding is typically done using banana-in-a-box syntax, commonly with ngModel: [(ngModel)]="name".',
      tags: ['Binding', 'Forms'],
    },
    {
      id: 'q5',
      title: '@Input()',
      prompt: 'What is the purpose of @Input() in Angular?',
      options: [
        { id: 'a', text: 'To send data from child to parent' },
        { id: 'b', text: 'To receive data from parent into child' },
        { id: 'c', text: 'To make a service injectable' },
        { id: 'd', text: 'To define a route parameter' },
      ],
      correctOptionId: 'b',
      explanation:
        '@Input() allows a parent component to pass data down to a child component.',
      tags: ['@Input', 'Parent-Child'],
    },
    {
      id: 'q6',
      title: '@Output()',
      prompt: 'What is the purpose of @Output() in Angular?',
      options: [
        { id: 'a', text: 'To receive data from parent into child' },
        {
          id: 'b',
          text: 'To send events/data from child to parent using EventEmitter',
        },
        { id: 'c', text: 'To define a template variable' },
        { id: 'd', text: 'To enable lazy loading' },
      ],
      correctOptionId: 'b',
      explanation:
        '@Output() is used with EventEmitter to emit events from child to parent.',
      tags: ['@Output', 'Parent-Child'],
    },
    {
      id: 'q7',
      title: 'Template Expressions',
      prompt: 'Which statement about template expressions is most correct?',
      options: [
        {
          id: 'a',
          text: 'You can access global window/document directly everywhere',
        },
        {
          id: 'b',
          text: 'They can have side effects like incrementing variables',
        },
        { id: 'c', text: 'They should be quick and avoid complex logic' },
        { id: 'd', text: 'They can contain any TypeScript code' },
      ],
      correctOptionId: 'c',
      explanation:
        'Template expressions should stay simple and fast; heavy logic should be moved to the component.',
      tags: ['Templates'],
    },
    {
      id: 'q8',
      title: 'Passing Data to Child',
      prompt: 'Which is the correct way to pass a value to a child @Input()?',
      options: [
        { id: 'a', text: '<child [user]="user"></child>' },
        { id: 'b', text: '<child (user)="user"></child>' },
        { id: 'c', text: '<child {{ user }}></child>' },
        { id: 'd', text: '<child user="user()"></child>' },
      ],
      correctOptionId: 'a',
      explanation:
        'Use property binding to bind parent value to child input: <child [user]="user">.',
      tags: ['@Input', 'Binding'],
    },
    {
      id: 'q9',
      title: 'Listening to Child Output',
      prompt:
        'How do you listen to a child component @Output() event in the parent?',
      options: [
        { id: 'a', text: '<child [saved]="onSaved($event)"></child>' },
        { id: 'b', text: '<child (saved)="onSaved($event)"></child>' },
        { id: 'c', text: '<child {{ saved }}="onSaved()"></child>' },
        { id: 'd', text: '<child (saved)="saved"></child>' },
      ],
      correctOptionId: 'b',
      explanation: 'Use event binding syntax: (eventName)="handler($event)".',
      tags: ['@Output', 'Events'],
    },
    {
      id: 'q10',
      title: 'Selector Best Practice',
      prompt: 'A common best practice for component selectors is:',
      options: [
        { id: 'a', text: 'Use random names without prefixes' },
        {
          id: 'b',
          text: 'Use a consistent prefix like app- to avoid collisions',
        },
        { id: 'c', text: 'Use IDs instead of selectors' },
        { id: 'd', text: 'Avoid kebab-case' },
      ],
      correctOptionId: 'b',
      explanation:
        'Using a consistent prefix (e.g., app-) helps avoid conflicts with native/custom elements.',
      tags: ['Selector', 'Style'],
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
