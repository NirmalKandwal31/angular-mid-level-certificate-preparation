import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Enum definition
 * Enums define a fixed set of named constants
 */
const enum Colors {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

@Component({
  selector: 'app-enums-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enums-example.component.html',
  styleUrl: './enums-example.component.scss',
})
export class EnumsExampleComponent {
  // Using enum values
  favoriteColor: Colors = Colors.Green;
  nonFavoriteColor: Colors = Colors.Blue;

  // 🔽 Code snippets for explanation (safe for HTML)
  enumDefinitionCode = `enum Colors {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}`;

  usageCode = `favoriteColor: Colors = Colors.Green;
nonFavoriteColor: Colors = Colors.Blue;`;

  whyEnumPoints: string[] = [
    'Provides a fixed set of allowed values',
    'Improves code readability',
    'Prevents invalid values',
    'Commonly used for status, roles, and flags',
  ];

  enumVsStringCode = `// Without enum (error-prone)
let color: string = 'Green';

// With enum (safe)
let color: Colors = Colors.Green;`;
}
