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
  selector: 'app-forms-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms-quiz.component.html',
  styleUrl: './forms-quiz.component.scss',
})
export class FormsQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Forms CSS Classes',
      prompt:
        'Which classes are commonly added by Angular to indicate validity state?',
      options: [
        {
          id: 'a',
          text: 'ng-valid / ng-invalid (and often ng-touched / ng-untouched)',
        },
        { id: 'b', text: 'css-valid / css-invalid' },
        { id: 'c', text: 'form-good / form-bad' },
        { id: 'd', text: 'valid-class / invalid-class' },
      ],
      correctOptionId: 'a',
      explanation:
        'Angular adds classes like ng-valid, ng-invalid, ng-touched, ng-untouched, ng-dirty, ng-pristine to help style forms.',
      tags: ['CSS Classes'],
    },
    {
      id: 'q2',
      title: 'ng-touched / ng-untouched',
      prompt: 'When does a control typically become `ng-touched`?',
      options: [
        { id: 'a', text: 'When the user focuses the input (focus event)' },
        { id: 'b', text: 'When the user blurs the input after focusing it' },
        { id: 'c', text: 'When the form is submitted only' },
        { id: 'd', text: 'When the control becomes valid' },
      ],
      correctOptionId: 'b',
      explanation:
        'A control is usually marked as touched after the user focuses and then leaves (blur) the control.',
      tags: ['CSS Classes', 'State'],
    },
    {
      id: 'q3',
      title: 'ng-dirty / ng-pristine',
      prompt: 'When does a control become `ng-dirty`?',
      options: [
        { id: 'a', text: 'When the input is created' },
        { id: 'b', text: 'When the user changes the value in the UI' },
        { id: 'c', text: 'When the control becomes valid' },
        { id: 'd', text: 'When the route changes' },
      ],
      correctOptionId: 'b',
      explanation:
        '`dirty` typically means the user changed the value through the UI. `pristine` means unchanged since init/reset.',
      tags: ['CSS Classes', 'State'],
    },
    {
      id: 'q4',
      title: 'FormControl',
      prompt: 'What is a FormControl in Reactive Forms?',
      options: [
        { id: 'a', text: 'A router configuration for forms' },
        {
          id: 'b',
          text: 'A single input control with value, validation state, and observable streams',
        },
        { id: 'c', text: 'A CSS helper class' },
        { id: 'd', text: 'A directive that replaces ngIf' },
      ],
      correctOptionId: 'b',
      explanation:
        'FormControl represents a single form field and tracks its value, status, errors, and more.',
      tags: ['Reactive Forms', 'FormControl'],
    },
    {
      id: 'q5',
      title: 'valueChanges',
      prompt: 'What does `valueChanges` on a FormControl provide?',
      options: [
        { id: 'a', text: 'A Promise that resolves once' },
        {
          id: 'b',
          text: 'An Observable emitting values whenever the control value changes',
        },
        { id: 'c', text: 'A CSS class list' },
        { id: 'd', text: 'A router event stream' },
      ],
      correctOptionId: 'b',
      explanation:
        '`valueChanges` is an Observable that emits every time the control’s value updates.',
      tags: ['Reactive Forms', 'Observables'],
    },
    {
      id: 'q6',
      title: 'Reactive Forms Setup',
      prompt: 'Which is typically required for Reactive Forms in a component?',
      options: [
        { id: 'a', text: 'RouterModule' },
        {
          id: 'b',
          text: 'ReactiveFormsModule (or the standalone providers/imports equivalent)',
        },
        { id: 'c', text: 'HttpClientModule only' },
        { id: 'd', text: 'BrowserAnimationsModule only' },
      ],
      correctOptionId: 'b',
      explanation:
        'Reactive Forms require ReactiveFormsModule so directives like [formControl] / formGroup work.',
      tags: ['Reactive Forms'],
    },
    {
      id: 'q7',
      title: 'Template-driven Forms',
      prompt: 'Template-driven forms primarily rely on:',
      options: [
        { id: 'a', text: 'FormBuilder configuration in TS only' },
        { id: 'b', text: 'Directives in the template like ngModel and NgForm' },
        { id: 'c', text: 'Manual DOM manipulation' },
        { id: 'd', text: 'Router events only' },
      ],
      correctOptionId: 'b',
      explanation:
        'Template-driven forms are built mostly in the template using ngModel/NgForm and are less explicit in TS.',
      tags: ['Template-driven'],
    },
    {
      id: 'q8',
      title: 'Template vs Reactive',
      prompt: 'Which statement best describes the difference?',
      options: [
        {
          id: 'a',
          text: 'Template-driven forms are more explicit and scalable than reactive forms always',
        },
        {
          id: 'b',
          text: 'Reactive forms are model-driven in TS; template-driven forms are declared mostly in templates',
        },
        { id: 'c', text: 'Reactive forms cannot do validation' },
        {
          id: 'd',
          text: 'Template-driven forms do not support two-way binding',
        },
      ],
      correctOptionId: 'b',
      explanation:
        'Reactive forms are built in TypeScript (FormControl/FormGroup), while template-driven forms are built in templates using directives.',
      tags: ['Comparison'],
    },
    {
      id: 'q9',
      title: 'When to Use Reactive Forms',
      prompt: 'Reactive forms are often preferred when:',
      options: [
        { id: 'a', text: 'The form is tiny and has almost no validation' },
        {
          id: 'b',
          text: 'You need complex validation, dynamic controls, and testable form logic',
        },
        { id: 'c', text: 'You want to avoid TypeScript' },
        { id: 'd', text: 'You want to disable Observables' },
      ],
      correctOptionId: 'b',
      explanation:
        'Reactive forms shine for complex, dynamic forms with strong testability and explicit control in code.',
      tags: ['Best Practices'],
    },
    {
      id: 'q10',
      title: 'Common Pitfall',
      prompt: 'Why is unsubscribing from `valueChanges` sometimes important?',
      options: [
        { id: 'a', text: 'Because valueChanges runs only once' },
        {
          id: 'b',
          text: 'Because a long-lived subscription can leak if the component is destroyed',
        },
        { id: 'c', text: 'Because Angular blocks subscriptions automatically' },
        { id: 'd', text: 'Because valueChanges is not an Observable' },
      ],
      correctOptionId: 'b',
      explanation:
        'If you manually subscribe, you should manage the subscription lifecycle (takeUntil/DestroyRef/async pipe patterns).',
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
