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
  selector: 'app-angular-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-of-angular-quiz.component.html',
  styleUrl: './basic-of-angular-quiz.component.scss',
})
export class BasicOfAngularQuizComponent {
  // Question bank (edit freely)
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Angular CLI',
      prompt:
        'You want to generate a new Angular app (standalone) with routing. Which command is best?',
      options: [
        { id: 'a', text: 'ng new my-app --routing' },
        { id: 'b', text: 'ng init my-app --routing' },
        { id: 'c', text: 'ng create my-app --router' },
        { id: 'd', text: 'ng new my-app --standalone false' },
      ],
      correctOptionId: 'a',
      explanation:
        '`ng new` generates a new project. `--routing` adds routing setup. Standalone is commonly the default in modern Angular setups.',
      tags: ['CLI', 'Project setup'],
    },
    {
      id: 'q2',
      title: 'Angular vs AngularJS',
      prompt:
        'What is the most important difference between Angular (2+) and AngularJS?',
      options: [
        {
          id: 'a',
          text: 'AngularJS uses TypeScript and Angular uses JavaScript',
        },
        {
          id: 'b',
          text: 'Angular (2+) is component-based, AngularJS was controller/$scope-based',
        },
        { id: 'c', text: 'AngularJS uses Ivy renderer' },
        { id: 'd', text: 'Angular (2+) depends only on jQuery' },
      ],
      correctOptionId: 'b',
      explanation:
        'Angular (2+) is fully component-based with modern tooling and architecture. AngularJS relied on controllers and $scope with a digest cycle.',
      tags: ['AngularJS', 'Architecture'],
    },
    {
      id: 'q3',
      title: 'Core Features',
      prompt:
        'What is the main benefit of Dependency Injection (DI) in Angular?',
      options: [
        { id: 'a', text: 'It makes direct DOM manipulation easier' },
        { id: 'b', text: 'It prevents code minification' },
        {
          id: 'c',
          text: 'Loose coupling and better testability (easy mocking/stubbing)',
        },
        { id: 'd', text: 'It converts templates into CSS' },
      ],
      correctOptionId: 'c',
      explanation:
        'DI helps you swap and mock dependencies easily, reduces coupling, and improves unit testing.',
      tags: ['DI', 'Services'],
    },
    {
      id: 'q4',
      title: 'Change Detection',
      prompt:
        'When does Angular’s default change detection typically run? (Most correct)',
      options: [
        { id: 'a', text: 'Only when setTimeout is used' },
        {
          id: 'b',
          text: 'After user events and async tasks (timers, XHR/fetch, promises, etc.)',
        },
        { id: 'c', text: 'Only when you call detectChanges() manually' },
        { id: 'd', text: 'Only on route changes' },
      ],
      correctOptionId: 'b',
      explanation:
        'Angular typically runs change detection after user interactions and many async tasks (commonly via zone-based triggers).',
      tags: ['Change Detection'],
    },
    {
      id: 'q5',
      title: 'Style Guide',
      prompt:
        'Which option best matches common Angular style guide recommendations?',
      options: [
        { id: 'a', text: 'Put all components in a single folder' },
        {
          id: 'b',
          text: 'Use feature-based folders and consistent naming conventions',
        },
        { id: 'c', text: 'Define services inside components' },
        { id: 'd', text: 'Random file naming is fine' },
      ],
      correctOptionId: 'b',
      explanation:
        'Feature-based structure and consistent naming improves maintainability and scalability.',
      tags: ['Style', 'Project structure'],
    },
    {
      id: 'q6',
      title: 'AOT Compilation',
      prompt: 'What is a direct advantage of Ahead-of-Time (AOT) compilation?',
      options: [
        {
          id: 'a',
          text: 'Templates compile at runtime, which improves performance',
        },
        {
          id: 'b',
          text: 'Templates compile at build time, improving startup and catching template errors earlier',
        },
        { id: 'c', text: 'It only works in development mode' },
        { id: 'd', text: 'It disables routing' },
      ],
      correctOptionId: 'b',
      explanation:
        'AOT compiles templates during build, improving startup performance and surfacing template errors earlier.',
      tags: ['AOT', 'Build'],
    },
    {
      id: 'q7',
      title: 'Standalone Components',
      prompt: 'What is a key practical benefit of using standalone components?',
      options: [
        { id: 'a', text: 'NgModule becomes mandatory everywhere' },
        {
          id: 'b',
          text: 'Less boilerplate: local imports and simpler lazy loading patterns',
        },
        { id: 'c', text: 'It removes TypeScript from Angular' },
        { id: 'd', text: 'It disables routing entirely' },
      ],
      correctOptionId: 'b',
      explanation:
        'Standalone components reduce NgModule boilerplate and make imports and lazy loading more straightforward.',
      tags: ['Standalone', 'Architecture'],
    },
    {
      id: 'q8',
      title: 'Production Build',
      prompt: 'Which command is commonly used for a production build?',
      options: [
        { id: 'a', text: 'ng serve --prod' },
        { id: 'b', text: 'ng build --configuration production' },
        { id: 'c', text: 'ng run prod' },
        { id: 'd', text: 'ng compile --prod' },
      ],
      correctOptionId: 'b',
      explanation:
        '`ng build --configuration production` is the recommended approach. (Older versions often used `--prod` as an alias.)',
      tags: ['CLI', 'Build'],
    },
  ];

  // =========================
  // STATE
  // =========================
  questions = signal<Question[]>(this.shuffle([...this.allQuestions]));
  currentIndex = signal(0);

  // questionId -> chosenOptionId
  answers = signal<Record<string, string>>({});

  // questionId -> submitted?
  submitted = signal<Record<string, boolean>>({});

  // result screen toggle
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

  // score counts ONLY submitted questions (exam-like)
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

  // rows for result screen (review + jump)
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
    // lock selection after submit (exam-like)
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

  // jump from result screen to a specific question
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
