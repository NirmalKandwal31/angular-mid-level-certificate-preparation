import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-strings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template-strings.component.html',
  styleUrl: './template-strings.component.scss',
})
export class TemplateStringsComponent {
  introPoints: string[] = [
    'Template strings (template literals) were introduced in ES6.',
    'They use backticks (`) instead of single or double quotes.',
    'They allow string interpolation and multi-line strings easily.',
  ];

  // Safe code snippets (to avoid Angular ICU parsing issues)
  interpolationCode = `const name = 'John';
const message = \`Hello \${name}\`;`;

  multilineCode = `const text = \`This is line one
This is line two
This is line three\`;`;

  expressionCode = `const a = 10;
const b = 20;
const result = \`Sum is \${a + b}\`;`;

  comparisonOldWay = `// Without template strings
const name = 'John';
const msg = 'Hello ' + name + ', welcome!';`;

  comparisonNewWay = `// With template strings
const name = 'John';
const msg = \`Hello \${name}, welcome!\`;`;

  angularNote =
    'Template strings are commonly used in Angular for logging, messages, dynamic text, and readable code.';
}
