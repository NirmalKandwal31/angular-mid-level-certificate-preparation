import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ng-template-vs-ng-container',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ng-template-vs-ng-container.component.html',
  styleUrl: './ng-template-vs-ng-container.component.scss',
})
export class NgTemplateVsNgContainerComponent {
  // Live demo toggles
  showBox = false;
  showElseBlock = false;

  // Demo data
  users = [
    { name: 'Alex', role: 'Admin' },
    { name: 'Sara', role: 'User' },
    { name: 'John', role: 'User' },
  ];

  overviewPoints: string[] = [
    '<ng-container> groups elements but does NOT create an extra DOM node.',
    '<ng-template> is NOT rendered by default. Angular renders it only when you reference it (lazy).',
    'ng-template is commonly used with *ngIf else, *ngFor (template), and ngTemplateOutlet.',
    'ng-container is useful when you need a structural directive wrapper without adding extra markup.',
  ];

  containerPoints: string[] = [
    'Use ng-container when you need *ngIf or *ngFor but you do not want an extra <div> in the DOM.',
    'Great for clean HTML and easier CSS layouts (no unwanted wrapper).',
  ];

  templatePoints: string[] = [
    'ng-template content does not appear unless Angular is told to render it.',
    'It is lazy: rendered only when condition is true or when used via ngTemplateOutlet.',
    'Common pattern: *ngIf="condition; else elseTemplate".',
  ];

  // Safe code snippets
  containerSnippet = `<!-- No extra DOM wrapper -->
<ng-container *ngIf="isLoggedIn">
  <button>Logout</button>
  <p>Welcome back!</p>
</ng-container>`;

  templateIfElseSnippet = `<!-- ng-template used as else block -->
<div *ngIf="isAdmin; else notAdmin">
  Admin Panel
</div>

<ng-template #notAdmin>
  <p>Access denied</p>
</ng-template>`;

  outletSnippet = `<!-- Render a template explicitly -->
<ng-template #card let-name="name">
  <div class="card">Hello {{name}}</div>
</ng-template>

<div [ngTemplateOutlet]="card"
     [ngTemplateOutletContext]="{ name: 'Alex' }">
</div>`;
}
