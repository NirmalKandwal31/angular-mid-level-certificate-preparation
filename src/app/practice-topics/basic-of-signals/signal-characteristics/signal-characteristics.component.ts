import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signal-characteristics',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './signal-characteristics.component.html',
  styleUrl: './signal-characteristics.component.scss',
})
export class SignalCharacteristicsComponent {
  intro =
    'Signals are Angular’s built-in reactive state primitives. They are synchronous, fine-grained, and great for component/local state without manual unsubscribe.';

  // ---------------------------------------
  // Live Demo State (Signals)
  // ---------------------------------------
  count = signal(0);
  name = signal('Alex');
  showDetails = signal(true);

  // computed = derived state (auto updates when dependencies change)
  greeting = computed(() => `Hello, ${this.name()}!`);

  // Another computed: double count
  doubleCount = computed(() => this.count() * 2);

  // Logs (to show sync updates + effect)
  logs: string[] = [];

  // Effect runs automatically when signals used inside change
  // (Angular cleans up effects when the component is destroyed)
  private demoEffect = effect(() => {
    const msg = `effect: count=${this.count()} name="${this.name()}" showDetails=${this.showDetails()}`;
    this.logs.unshift(msg);
  });

  // ---------------------------------------
  // Definitions (content)
  // ---------------------------------------
  characteristics = [
    {
      title: 'Fine-grained reactivity',
      points: [
        'Only the parts of the UI that read a signal re-render when it changes.',
        'Unlike broad change detection patterns, updates are more targeted.',
        'This can improve performance for complex UIs.',
      ],
    },
    {
      title: 'Synchronous updates',
      points: [
        'Signal updates happen immediately (sync).',
        'When you call set() or update(), computed values update instantly.',
        'Great for predictable state changes.',
      ],
    },
    {
      title: 'No manual unsubscribe',
      points: [
        'Signals are not Observables.',
        'You don’t subscribe to a signal like RxJS, so no unsubscribe is needed.',
        'Effects are also automatically cleaned up when a component is destroyed.',
      ],
    },
    {
      title: 'Great for state',
      points: [
        'Perfect for local UI state: counters, toggles, selected item, form UI flags, etc.',
        'Can also be used in services for shared state (signal-based stores).',
        'Often simpler than Subjects/BehaviorSubjects for state.',
      ],
    },
  ];

  keyTakeaways: string[] = [
    'Signals are best for state (sync, predictable updates).',
    'Use computed() for derived state.',
    'Use effect() for side effects (logging, syncing, calling other APIs).',
    'Use RxJS for async streams/events; use signals for state.',
  ];

  // ---------------------------------------
  // Safe code snippets (render with [textContent])
  // ---------------------------------------
  createSnippet = `const count = signal(0);

count.set(1);           // set value
count.update(v => v+1); // update based on previous`;

  computedSnippet = `const double = computed(() => count() * 2);
// double() always stays updated`;

  effectSnippet = `effect(() => {
  console.log('count changed:', count());
});`;

  compareSnippet = `// RxJS (you subscribe and unsubscribe)
const count$ = new BehaviorSubject(0);
const sub = count$.subscribe(v => console.log(v));
sub.unsubscribe();

// Signals (no subscription needed)
const count = signal(0);
effect(() => console.log(count())); // auto cleanup`;

  // ---------------------------------------
  // Demo actions
  // ---------------------------------------
  inc() {
    this.count.update((v) => v + 1);
  }

  dec() {
    this.count.update((v) => v - 1);
  }

  reset() {
    this.count.set(0);
    this.name.set('Alex');
    this.showDetails.set(true);
    this.logs = [];
  }

  setName(val: string) {
    this.name.set(val);
  }

  toggleDetails() {
    this.showDetails.update((v) => !v);
  }
}
