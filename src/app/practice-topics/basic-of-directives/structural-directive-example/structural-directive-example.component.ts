import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Person = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-structural-directive-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directive-example.component.html',
  styleUrl: './structural-directive-example.component.scss',
})
export class StructuralDirectiveExampleComponent {
  users: Person[] = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 28 },
    { name: 'Doe', age: 22 },
  ];

  // ✅ Code snippets for explanation (safe)
  definitionPoints: string[] = [
    'Structural directives change the DOM layout by adding/removing elements.',
    'They are written with a * syntax (e.g., *ngIf, *ngFor).',
    'Under the hood, Angular converts them into <ng-template>.',
  ];

  ngForCode = `<li *ngFor="let u of users">
  {{ u.name }} ({{ u.age }})
</li>`;

  ngIfCode = `<p *ngIf="u.age >= 25">
  {{ u.name }} is 25 or older.
</p>`;

  ngContainerCode = `<ng-container *ngFor="let u of users">
  <p *ngIf="u.age >= 25">...</p>
  <p *ngIf="u.age < 25">...</p>
</ng-container>`;
}
