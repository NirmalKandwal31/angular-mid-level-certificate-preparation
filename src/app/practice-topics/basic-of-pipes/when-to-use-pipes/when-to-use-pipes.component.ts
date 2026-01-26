import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Order = {
  id: number;
  customer: string;
  amount: number;
  createdAt: Date;
  discount: number; // 0.15 = 15%
};

@Component({
  selector: 'app-when-to-use-pipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './when-to-use-pipes.component.html',
  styleUrl: './when-to-use-pipes.component.scss',
})
export class WhenToUsePipesComponent {
  // Demo data
  order: Order = {
    id: 101,
    customer: 'John Doe',
    amount: 12345.678,
    createdAt: new Date(),
    discount: 0.15,
  };

  user = {
    name: 'alice',
    role: 'admin',
    preferences: { theme: 'dark', lang: 'en' },
  };

  // Good use-cases
  goodUseCases: string[] = [
    'Formatting values for display: dates, currency, percent, uppercase/lowercase, etc.',
    'Simple transformations in the template to keep UI readable.',
    'Reusable display formatting across multiple templates.',
    'Debugging in templates (json pipe).',
  ];

  // When not to use pipes
  avoidUseCases: string[] = [
    'Heavy computations (sorting large arrays, complex filtering, expensive loops).',
    'Business logic decisions (permissions, pricing rules, auth logic).',
    'Repeated transformations in large lists without care (can impact performance).',
  ];

  // Best practices
  bestPractices: string[] = [
    'Keep pipes focused on display formatting.',
    'Prefer pure pipes for predictable performance (default behavior).',
    'Move complex logic into the component/service and pass final values to the template.',
    'If you must transform big lists frequently, do it in TS or use memoization/signals.',
  ];

  // Snippets
  formattingSnippet = `<!-- Good: format view data -->
<p>{{ order.createdAt | date:'medium' }}</p>
<p>{{ order.amount | currency:'USD':'symbol':'1.2-2' }}</p>
<p>{{ order.discount | percent }}</p>`;

  avoidHeavySnippet = `<!-- Avoid: heavy logic in template -->
<!-- Example of something you should NOT do -->
<li *ngFor="let item of bigList | complexFilter:searchText | sortBy:'price'">
  {{ item.name }}
</li>`;

  betterApproachSnippet = `// Better: do heavy work in TS (component/service)
filteredAndSorted = sortByPrice(
  filterList(this.bigList, this.searchText)
);

// Template stays clean:
<li *ngFor="let item of filteredAndSorted">{{ item.name }}</li>`;

  // Small demo output helper (showing "formatting view data")
  get customerTitle(): string {
    // Keep display formatting simple in template OR in TS — both are fine.
    // This is just for comparison.
    return this.user.name.charAt(0).toUpperCase() + this.user.name.slice(1);
  }
}
