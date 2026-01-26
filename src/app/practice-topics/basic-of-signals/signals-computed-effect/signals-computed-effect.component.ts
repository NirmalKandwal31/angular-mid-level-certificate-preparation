import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-computed-and-effect',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './signals-computed-effect.component.html',
  styleUrl: './signals-computed-effect.component.scss',
})
export class ComputedAndEffectComponent {
  intro =
    'computed() and effect() are core building blocks of Angular Signals. computed() is used for derived state, while effect() is used for side-effects.';

  // -----------------------------
  // Base state (signals)
  // -----------------------------
  price = signal(100);
  quantity = signal(1);
  discountEnabled = signal(false);

  // -----------------------------
  // computed(): derived state
  // -----------------------------
  totalPrice = computed(() => this.price() * this.quantity());

  discountedPrice = computed(() => {
    if (!this.discountEnabled()) {
      return this.totalPrice();
    }
    return this.totalPrice() * 0.9; // 10% discount
  });

  // -----------------------------
  // effect(): side-effects
  // -----------------------------
  logs: string[] = [];

  private logEffect = effect(() => {
    const message = `effect ran → price=${this.price()}, quantity=${this.quantity()}, discount=${this.discountEnabled()}`;
    this.logs.unshift(message);
  });

  // -----------------------------
  // Content / definitions
  // -----------------------------
  computedPoints = [
    'Used for derived state (calculated from other signals).',
    'Automatically re-computes when dependencies change.',
    'Must be pure (no side-effects).',
    'Cached until dependencies change.',
  ];

  effectPoints = [
    'Used for side-effects (logging, syncing, calling APIs).',
    'Runs whenever any used signal changes.',
    'No return value.',
    'Automatically cleaned up when component is destroyed.',
  ];

  avoidInEffect = [
    'Heavy calculations',
    'Expensive loops',
    'Complex business logic',
    'Direct state mutations',
  ];

  bestUseCases = [
    'Use computed() for UI calculations and derived values.',
    'Use effect() for logging, analytics, syncing with localStorage.',
    'Keep effects small and lightweight.',
  ];

  // -----------------------------
  // Safe code snippets
  // -----------------------------
  computedSnippet = `const total = computed(() => price() * quantity());`;

  effectSnippet = `effect(() => {
  console.log('Price changed:', price());
});`;

  badEffectSnippet = `// ❌ Avoid heavy work in effect
effect(() => {
  for (let i = 0; i < 1000000; i++) {
    heavyCalculation();
  }
});`;

  goodPatternSnippet = `// ✅ Heavy logic goes in computed
const total = computed(() => heavyCalculation(price(), quantity()));

effect(() => {
  console.log('Total updated:', total());
});`;

  // -----------------------------
  // UI actions
  // -----------------------------
  incQty() {
    this.quantity.update((v) => v + 1);
  }

  decQty() {
    this.quantity.update((v) => Math.max(1, v - 1));
  }

  toggleDiscount() {
    this.discountEnabled.update((v) => !v);
  }

  reset() {
    this.price.set(100);
    this.quantity.set(1);
    this.discountEnabled.set(false);
    this.logs = [];
  }
}
