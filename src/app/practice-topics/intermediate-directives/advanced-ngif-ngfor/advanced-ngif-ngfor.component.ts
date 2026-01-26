import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type User = {
  id: number;
  name: string;
  role: 'Admin' | 'User';
};

@Component({
  selector: 'app-advanced-ngif-ngfor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './advanced-ngif-ngfor.component.html',
  styleUrl: './advanced-ngif-ngfor.component.scss',
})
export class AdvancedNgIfNgForComponent {
  // Demo state
  isLoading = false;

  users: User[] = [
    { id: 1, name: 'Alex', role: 'Admin' },
    { id: 2, name: 'John', role: 'User' },
    { id: 3, name: 'Sara', role: 'User' },
  ];

  // Code snippets (safe to show in HTML)
  ngIfElseCode = `<!-- else template -->
<div *ngIf="!isLoading; else loadingTpl">
  Content loaded ✅
</div>

<ng-template #loadingTpl>
  Loading...
</ng-template>`;

  ngContainerCode = `<!-- groups logic without extra DOM element -->
<ng-container *ngIf="users.length > 0; else emptyTpl">
  <p>Users available</p>
</ng-container>

<ng-template #emptyTpl>
  No users found
</ng-template>`;

  trackByCode = `trackByUserId(index: number, user: User) {
  return user.id; // stable unique id
}

// usage:
<li *ngFor="let user of users; trackBy: trackByUserId">
  {{ user.name }}
</li>`;

  perfNote: string[] = [
    'Without trackBy, Angular may re-render many list items when the array changes.',
    'With trackBy, Angular reuses existing DOM elements for items with the same id.',
    'This improves performance for large lists and frequent updates.',
  ];

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  shuffleUsers() {
    // creates a new array (simulating data refresh)
    const copy = [...this.users];
    copy.sort(() => Math.random() - 0.5);
    this.users = copy;
  }

  addUser() {
    const nextId = Math.max(...this.users.map((u) => u.id), 0) + 1;
    this.users = [
      ...this.users,
      {
        id: nextId,
        name: `User ${nextId}`,
        role: nextId % 2 ? 'User' : 'Admin',
      },
    ];
  }

  removeFirst() {
    this.users = this.users.slice(1);
  }

  trackByUserId(index: number, user: User) {
    return user.id;
  }
}
