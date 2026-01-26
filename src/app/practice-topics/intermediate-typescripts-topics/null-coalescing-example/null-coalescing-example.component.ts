import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-null-coalescing-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './null-coalescing-example.component.html',
  styleUrl: './null-coalescing-example.component.scss',
})
export class NullCoalescingExampleComponent {
  // userName can be string OR null
  userName: string | null = null;

  displayName: string;

  constructor() {
    // Nullish coalescing operator (??)
    this.displayName = this.userName ?? 'Guest User';
  }

  // 🔽 Code snippets for explanation
  basicExampleCode = `const userName: string | null = null;
const displayName = userName ?? 'Guest User';`;

  comparisonCode = `// Using OR operator (||)
const value1 = '' || 'Default';   // 'Default' ❌

// Using Nullish Coalescing (??)
const value2 = '' ?? 'Default';   // '' ✅`;

  explanationPoints: string[] = [
    'The ?? operator returns the right-hand value only if the left-hand value is null or undefined.',
    'It does NOT treat empty string, 0, or false as nullish.',
    'It is safer than the || operator when dealing with valid falsy values.',
  ];
}
