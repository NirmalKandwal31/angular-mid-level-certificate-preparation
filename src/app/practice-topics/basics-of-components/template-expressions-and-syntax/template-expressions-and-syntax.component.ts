import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-expressions-and-syntax',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template-expressions-and-syntax.component.html',
  styleUrl: './template-expressions-and-syntax.component.scss',
})
export class TemplateExpressionsAndSyntaxComponent {
  // Demo data
  user = { name: 'Alex', city: 'Dublin' };
  isPremium = true;

  count = 0;
  message = 'Click the button to trigger an event handler.';

  product = { title: 'Keyboard', price: 49.99 };

  maybeUser: { profile?: { email?: string; phone?: string } } | null = {
    profile: { email: 'alex@example.com', phone: '123-456-7890' },
  };

  // Demo handlers
  onIncrement() {
    this.count++;
    this.message = `Count updated to ${this.count}`;
  }

  onTogglePremium() {
    this.isPremium = !this.isPremium;
  }

  // Content (code snippets)
  introBullets: string[] = [
    'Angular templates bind data from your component (TypeScript) to the view (HTML).',
    'Template expressions run in the context of the component instance.',
    'Keep templates clean: avoid heavy logic and prefer readable bindings.',
  ];

  interpolationTemplate = `<p>Hello, {{ user.name }}!</p>
<p>City: {{ user.city }}</p>`;
  interpolationTs = `user = { name: 'Alex', city: 'Dublin' };`;

  propertyBindingTemplate = `<button [disabled]="!isPremium">Premium Action</button>`;
  propertyBindingTs = `isPremium = true;`;

  eventBindingTemplate = `<button (click)="onIncrement()">Increment</button>
<p>{{ message }}</p>`;
  eventBindingTs = `count = 0;
message = 'Click the button...';

onIncrement() {
  this.count++;
  this.message = \`Count updated to \${this.count}\`;
}`;

  pipesTemplate = `<p>Product: {{ product.title }}</p>
<p>Price: {{ product.price | currency:'EUR' }}</p>
<p>Uppercase title: {{ product.title | uppercase }}</p>`;
  pipesTs = `product = { title: 'Keyboard', price: 49.99 };`;

  safeNavTemplate = `<p>Email: {{ maybeUser?.profile?.email }}</p>
<p>Phone (safe): {{ maybeUser?.profile?.phone }}</p>`;
  safeNavTs = `maybeUser = { profile: { email: 'alex@example.com' , phone: '123-456-7890' } };`;

  bestPractices: string[] = [
    'Avoid heavy functions directly in templates (they can run often).',
    'Prefer readable bindings over complex inline expressions.',
    'Use safe navigation (?.) for async or optional data.',
    'Use pipes for formatting values in the view.',
    'Keep templates focused on UI — put logic in TS/services.',
  ];
}
