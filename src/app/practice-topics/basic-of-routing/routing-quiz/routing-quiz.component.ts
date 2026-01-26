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
  selector: 'app-routing-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routing-quiz.component.html',
  styleUrl: './routing-quiz.component.scss',
})
export class RoutingQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'Router Configuration',
      prompt: 'In Angular, routes are typically defined as:',
      options: [
        { id: 'a', text: 'A string in angular.json' },
        {
          id: 'b',
          text: 'An array of Route objects (Routes) with path + component/loadComponent',
        },
        { id: 'c', text: 'A CSS file containing URLs' },
        { id: 'd', text: 'A template reference variable' },
      ],
      correctOptionId: 'b',
      explanation:
        'Routes are configured using the `Routes` array, where each route defines `path` and how to load a component (or children).',
      tags: ['Router', 'Config'],
    },
    {
      id: 'q2',
      title: 'RouterOutlet',
      prompt: 'What is the role of <router-outlet>?',
      options: [
        { id: 'a', text: 'It creates HTTP requests automatically' },
        {
          id: 'b',
          text: 'It is a placeholder where routed components are rendered',
        },
        { id: 'c', text: 'It creates services for routes' },
        { id: 'd', text: 'It compiles templates at runtime' },
      ],
      correctOptionId: 'b',
      explanation:
        '<router-outlet> is the placeholder that Angular Router uses to display the active route’s component.',
      tags: ['RouterOutlet'],
    },
    {
      id: 'q3',
      title: 'RouterLink',
      prompt: 'What does [routerLink] primarily do?',
      options: [
        { id: 'a', text: 'Navigates without changing URL' },
        {
          id: 'b',
          text: 'Binds a link/navigation instruction to Router navigation (client-side)',
        },
        {
          id: 'c',
          text: 'Reloads the entire page like a normal anchor always',
        },
        { id: 'd', text: 'Adds CSS classes automatically' },
      ],
      correctOptionId: 'b',
      explanation:
        'routerLink tells Angular Router to navigate client-side without full page reload (SPA navigation).',
      tags: ['RouterLink'],
    },
    {
      id: 'q4',
      title: 'Programmatic Navigation',
      prompt: 'Which is a common way to navigate programmatically?',
      options: [
        { id: 'a', text: 'window.location.href = "/path"' },
        { id: 'b', text: 'router.navigate(["/path"])' },
        { id: 'c', text: 'document.route("/path")' },
        { id: 'd', text: 'location.goBack("/path")' },
      ],
      correctOptionId: 'b',
      explanation:
        'Using Router (router.navigate / router.navigateByUrl) is the standard programmatic way.',
      tags: ['Navigation'],
    },
    {
      id: 'q5',
      title: 'Route Guards',
      prompt: 'What is the purpose of a route guard?',
      options: [
        { id: 'a', text: 'To style routes using CSS' },
        {
          id: 'b',
          text: 'To control access/navigation based on conditions (auth/roles/unsaved changes)',
        },
        { id: 'c', text: 'To load images faster' },
        { id: 'd', text: 'To replace HttpClient' },
      ],
      correctOptionId: 'b',
      explanation:
        'Guards are used to allow/deny navigation depending on auth, permissions, data readiness, etc.',
      tags: ['Guards'],
    },
    {
      id: 'q6',
      title: 'Auth Guard Example',
      prompt: 'A common auth guard checks:',
      options: [
        { id: 'a', text: 'If the CSS loaded correctly' },
        {
          id: 'b',
          text: 'If the user is authenticated before allowing route activation',
        },
        { id: 'c', text: 'If localStorage is empty only' },
        { id: 'd', text: 'If the user has installed Angular CLI' },
      ],
      correctOptionId: 'b',
      explanation:
        'Auth guards usually verify login/session/token and redirect to login when not authenticated.',
      tags: ['Guards', 'Auth'],
    },
    {
      id: 'q7',
      title: 'Guard Types',
      prompt: 'Which guard type is commonly used to prevent entering a route?',
      options: [
        { id: 'a', text: 'CanActivate' },
        { id: 'b', text: 'CanDeactivate' },
        { id: 'c', text: 'Resolve' },
        { id: 'd', text: 'CanMatchStyle' },
      ],
      correctOptionId: 'a',
      explanation:
        'CanActivate is used to decide if a route can be activated (entered).',
      tags: ['Guards'],
    },
    {
      id: 'q8',
      title: 'CanDeactivate',
      prompt: 'What is a typical use-case for CanDeactivate guard?',
      options: [
        {
          id: 'a',
          text: 'Prevent leaving a route if there are unsaved form changes',
        },
        { id: 'b', text: 'Prevent rendering of router-outlet' },
        { id: 'c', text: 'Prevent HTTP requests' },
        { id: 'd', text: 'Prevent Angular build' },
      ],
      correctOptionId: 'a',
      explanation:
        'CanDeactivate commonly asks “Are you sure?” when leaving a page with unsaved changes.',
      tags: ['Guards'],
    },
    {
      id: 'q9',
      title: 'Route Configuration',
      prompt: 'What does `path: ""` usually represent in a route config?',
      options: [
        { id: 'a', text: 'A wildcard route (404)' },
        { id: 'b', text: 'The default/empty path (base route)' },
        { id: 'c', text: 'A route that disables navigation' },
        { id: 'd', text: 'A route for CSS only' },
      ],
      correctOptionId: 'b',
      explanation: 'The empty path is the default route for that route level.',
      tags: ['Config'],
    },
    {
      id: 'q10',
      title: 'RouterModule / provideRouter',
      prompt:
        'In standalone Angular apps, routing is commonly configured using:',
      options: [
        { id: 'a', text: 'provideRouter(routes)' },
        { id: 'b', text: 'NgRoutingModule.generateRoutes()' },
        { id: 'c', text: 'RouterCSSModule' },
        { id: 'd', text: 'RouterOutletProvider()' },
      ],
      correctOptionId: 'a',
      explanation:
        'Standalone apps typically use `provideRouter(routes)` in ApplicationConfig or bootstrap providers.',
      tags: ['Standalone', 'Config'],
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
