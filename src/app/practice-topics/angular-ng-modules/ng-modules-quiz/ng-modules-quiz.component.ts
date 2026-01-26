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
  selector: 'app-ng-modules-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-modules-quiz.component.html',
  styleUrl: './ng-modules-quiz.component.scss',
})
export class NgModulesQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'NgModule Purpose',
      prompt:
        'Historically, what was a primary purpose of NgModules in Angular?',
      options: [
        { id: 'a', text: 'To replace TypeScript with JavaScript' },
        {
          id: 'b',
          text: 'To group declarations/providers/imports and define compilation scope',
        },
        { id: 'c', text: 'To run change detection manually' },
        { id: 'd', text: 'To store router URLs in CSS' },
      ],
      correctOptionId: 'b',
      explanation:
        'NgModules grouped components/directives/pipes (declarations), pulled in dependencies (imports), and registered providers.',
      tags: ['Basics'],
    },
    {
      id: 'q2',
      title: 'declarations',
      prompt:
        'What typically goes inside the `declarations` array of an NgModule?',
      options: [
        { id: 'a', text: 'Services only' },
        {
          id: 'b',
          text: 'Components, directives, and pipes that belong to this module',
        },
        { id: 'c', text: 'Routes only' },
        { id: 'd', text: 'Environment variables' },
      ],
      correctOptionId: 'b',
      explanation:
        '`declarations` is for declaring components/directives/pipes that are part of the module.',
      tags: ['NgModule Properties'],
    },
    {
      id: 'q3',
      title: 'imports',
      prompt: 'What does the `imports` array in an NgModule do?',
      options: [
        { id: 'a', text: 'Declares new components for the module' },
        {
          id: 'b',
          text: 'Brings in other modules whose exported declarations are needed in templates',
        },
        { id: 'c', text: 'Bootstraps the app automatically' },
        { id: 'd', text: 'Defines unit tests for the module' },
      ],
      correctOptionId: 'b',
      explanation:
        '`imports` lets your module use directives/components/pipes exported by other modules (e.g., CommonModule).',
      tags: ['NgModule Properties'],
    },
    {
      id: 'q4',
      title: 'providers',
      prompt: 'What is the purpose of the `providers` array in an NgModule?',
      options: [
        { id: 'a', text: 'To declare components' },
        {
          id: 'b',
          text: 'To register services/providers with the injector (DI)',
        },
        { id: 'c', text: 'To define HTML templates' },
        { id: 'd', text: 'To generate routes automatically' },
      ],
      correctOptionId: 'b',
      explanation:
        '`providers` registers dependencies for DI. Many services now prefer `providedIn: "root"` but module providers still exist.',
      tags: ['DI', 'NgModule Properties'],
    },
    {
      id: 'q5',
      title: 'exports',
      prompt: 'What does `exports` do in an NgModule?',
      options: [
        { id: 'a', text: 'Exports environment variables to production' },
        {
          id: 'b',
          text: 'Makes declared components/directives/pipes available to other modules that import this module',
        },
        { id: 'c', text: 'Runs the application' },
        { id: 'd', text: 'Enables SSR' },
      ],
      correctOptionId: 'b',
      explanation:
        '`exports` exposes declarations (and imported modules) to other modules that import this module.',
      tags: ['NgModule Properties'],
    },
    {
      id: 'q6',
      title: 'bootstrap (AppModule)',
      prompt:
        'In the classic NgModule setup, what does the `bootstrap` array in AppModule define?',
      options: [
        { id: 'a', text: 'Which services are injected first' },
        {
          id: 'b',
          text: 'The root component(s) to bootstrap at application startup',
        },
        { id: 'c', text: 'Which pipes are globally available' },
        { id: 'd', text: 'Which routes are lazy-loaded' },
      ],
      correctOptionId: 'b',
      explanation:
        'In module-based apps, `bootstrap: [AppComponent]` specifies the root component to start the app.',
      tags: ['AppModule'],
    },
    {
      id: 'q7',
      title: 'AppModule Role',
      prompt: 'What was a typical role of AppModule in older Angular apps?',
      options: [
        { id: 'a', text: 'To define all CSS styling rules' },
        {
          id: 'b',
          text: 'To serve as the root module that imports feature modules and bootstraps the app',
        },
        { id: 'c', text: 'To replace RouterModule entirely' },
        { id: 'd', text: 'To generate components automatically at runtime' },
      ],
      correctOptionId: 'b',
      explanation:
        'AppModule commonly acted as the root module that wired everything together (imports/providers/bootstrap).',
      tags: ['AppModule'],
    },
    {
      id: 'q8',
      title: 'CommonModule vs BrowserModule',
      prompt: 'Which statement is most correct?',
      options: [
        {
          id: 'a',
          text: 'BrowserModule should be imported in every feature module',
        },
        {
          id: 'b',
          text: 'CommonModule is typically used in feature modules; BrowserModule is usually only in AppModule',
        },
        {
          id: 'c',
          text: 'CommonModule enables routing, BrowserModule enables HTTP',
        },
        { id: 'd', text: 'They are identical' },
      ],
      correctOptionId: 'b',
      explanation:
        'BrowserModule is generally imported once in the root module. Feature modules typically import CommonModule.',
      tags: ['NgModule Properties'],
    },
    {
      id: 'q9',
      title: 'Standalone vs NgModules',
      prompt: 'In modern Angular, why do many apps use standalone components?',
      options: [
        { id: 'a', text: 'Because NgModules are required for routing now' },
        {
          id: 'b',
          text: 'To reduce boilerplate by using component-level imports and simpler lazy-loading patterns',
        },
        { id: 'c', text: 'To remove DI from Angular' },
        { id: 'd', text: 'To disable compilation' },
      ],
      correctOptionId: 'b',
      explanation:
        'Standalone components reduce NgModule boilerplate and make imports/lazy-loading more direct.',
      tags: ['Modern Angular'],
    },
    {
      id: 'q10',
      title: 'Where NgModules Still Matter',
      prompt: 'Which is a valid reason you might still use an NgModule today?',
      options: [
        {
          id: 'a',
          text: 'To host third-party libraries that require NgModule integration',
        },
        { id: 'b', text: 'To replace RxJS' },
        { id: 'c', text: 'To avoid using components' },
        { id: 'd', text: 'To handle CSS isolation' },
      ],
      correctOptionId: 'a',
      explanation:
        'Some libraries and patterns still rely on NgModules, and some teams keep them for organization/migration reasons.',
      tags: ['Modern Angular'],
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
