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
  selector: 'app-intermediate-directives-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intermediate-directives-quiz.component.html',
  styleUrl: './intermediate-directives-quiz.component.scss',
})
export class IntermediateDirectivesQuizComponent {
  private allQuestions: Question[] = [
    {
      id: 'q1',
      title: 'HostListener',
      prompt:
        'What does @HostListener primarily do in Angular directives/components?',
      options: [
        { id: 'a', text: 'Binds a CSS class to the host element' },
        {
          id: 'b',
          text: 'Listens to events on the host element (and optionally global targets like window/document)',
        },
        { id: 'c', text: 'Creates a service instance automatically' },
        { id: 'd', text: 'Replaces change detection' },
      ],
      correctOptionId: 'b',
      explanation:
        '@HostListener attaches an event listener to the host element (or window/document/body) and calls the handler method.',
      tags: ['HostListener'],
    },
    {
      id: 'q2',
      title: 'HostBinding',
      prompt: 'What does @HostBinding primarily do?',
      options: [
        { id: 'a', text: 'Subscribes to RxJS observables' },
        {
          id: 'b',
          text: 'Binds a property/attribute/class/style on the host element to a field/getter in the directive/component',
        },
        { id: 'c', text: 'Creates an <ng-template> automatically' },
        { id: 'd', text: 'Adds routes to the router config' },
      ],
      correctOptionId: 'b',
      explanation:
        '@HostBinding links a host element property (like class/style/attr) to your directive/component state.',
      tags: ['HostBinding'],
    },
    {
      id: 'q3',
      title: 'HostBinding Example',
      prompt: 'Which is a correct use-case for @HostBinding?',
      options: [
        {
          id: 'a',
          text: 'To add/remove a class on the host element based on a boolean state',
        },
        { id: 'b', text: 'To fetch data from an API' },
        { id: 'c', text: 'To render a list with *ngFor' },
        { id: 'd', text: 'To navigate using RouterLink' },
      ],
      correctOptionId: 'a',
      explanation:
        'A classic use-case is toggling host classes/styles for hover/active/disabled states.',
      tags: ['HostBinding'],
    },
    {
      id: 'q4',
      title: 'HostListener Targets',
      prompt: 'How can @HostListener listen to window scroll events?',
      options: [
        { id: 'a', text: '@HostListener("scroll")' },
        { id: 'b', text: '@HostListener("window:scroll")' },
        {
          id: 'c',
          text: '@HostListener("document:scroll", ["$event.target"])',
        },
        { id: 'd', text: '@HostListener("router:scroll")' },
      ],
      correctOptionId: 'b',
      explanation:
        'You can target global objects like window/document using prefixes: "window:scroll", "document:click", etc.',
      tags: ['HostListener'],
    },
    {
      id: 'q5',
      title: 'Advanced ngIf',
      prompt: 'Which is a correct way to use *ngIf with an else template?',
      options: [
        {
          id: 'a',
          text: '<div *ngIf="isOk else other"></div> <ng-template #other>...</ng-template>',
        },
        {
          id: 'b',
          text: '<div *ngIf="isOk; else other"></div> <ng-template #other>...</ng-template>',
        },
        { id: 'c', text: '<div *ngIf="isOk: else other"></div>' },
        { id: 'd', text: '<div *ngIf="else other; isOk"></div>' },
      ],
      correctOptionId: 'b',
      explanation:
        'The correct syntax is: *ngIf="condition; else templateRef".',
      tags: ['ngIf', 'Templates'],
    },
    {
      id: 'q6',
      title: 'Advanced ngIf',
      prompt: 'Why does *ngIf use the * (asterisk) syntax?',
      options: [
        { id: 'a', text: 'It is required for all Angular bindings' },
        {
          id: 'b',
          text: 'It is syntactic sugar that Angular expands into an <ng-template>',
        },
        { id: 'c', text: 'It disables rendering until change detection stops' },
        { id: 'd', text: 'It indicates the directive is deprecated' },
      ],
      correctOptionId: 'b',
      explanation:
        'The * syntax is a shorthand; Angular rewrites it into an <ng-template> form behind the scenes.',
      tags: ['ngIf', 'Structural'],
    },
    {
      id: 'q7',
      title: 'Advanced ngFor — trackBy',
      prompt: 'What is the main benefit of using trackBy with *ngFor?',
      options: [
        { id: 'a', text: 'It sorts the list automatically' },
        {
          id: 'b',
          text: 'It improves performance by helping Angular reuse DOM nodes during updates',
        },
        { id: 'c', text: 'It converts items to immutable objects' },
        { id: 'd', text: 'It disables change detection for the list' },
      ],
      correctOptionId: 'b',
      explanation:
        'trackBy provides a stable identity for each item, reducing unnecessary DOM re-creation when lists change.',
      tags: ['ngFor', 'Performance'],
    },
    {
      id: 'q8',
      title: 'trackBy Function',
      prompt: 'A typical trackBy function signature looks like:',
      options: [
        { id: 'a', text: 'trackBy(item) => item.id' },
        { id: 'b', text: 'trackBy(index, item) { return item.id; }' },
        { id: 'c', text: 'trackBy(id) { return index; }' },
        { id: 'd', text: 'trackBy() { return Math.random(); }' },
      ],
      correctOptionId: 'b',
      explanation:
        'trackBy is called with (index, item). You return a stable unique key (like item.id).',
      tags: ['ngFor', 'trackBy'],
    },
    {
      id: 'q9',
      title: 'HostBinding vs Template Binding',
      prompt: 'When is @HostBinding preferred over binding in the template?',
      options: [
        {
          id: 'a',
          text: 'When you want a directive to encapsulate host styling/attributes without requiring template changes',
        },
        { id: 'b', text: 'When you want to replace services' },
        { id: 'c', text: 'When you want to avoid TypeScript' },
        { id: 'd', text: 'When you want to lazy-load a component' },
      ],
      correctOptionId: 'a',
      explanation:
        '@HostBinding is great for reusable directives because it manages host state internally (cleaner templates).',
      tags: ['HostBinding', 'Design'],
    },
    {
      id: 'q10',
      title: 'Directive Patterns',
      prompt:
        'A good real-world use of HostListener + HostBinding together is:',
      options: [
        {
          id: 'a',
          text: 'Implementing a hover directive that toggles a host class on mouseenter/mouseleave',
        },
        { id: 'b', text: 'Implementing routing guards' },
        { id: 'c', text: 'Creating Http interceptors' },
        { id: 'd', text: 'Generating modules automatically' },
      ],
      correctOptionId: 'a',
      explanation:
        'Common pattern: listen to events (HostListener) and update host styles/classes (HostBinding).',
      tags: ['Patterns'],
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
