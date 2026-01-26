import { CommonModule } from '@angular/common';
import { Component, Injectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

type User = { id: number; name: string };

/**
 * ✅ Service that represents:
 * 1) API calls (simulated)
 * 2) Shared state
 * 3) Business logic separation
 */
@Injectable({ providedIn: 'root' })
export class UserDataService {
  private users: User[] = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Sara' },
  ];

  private selectedUserId: number | null = null;

  // -------------------------
  // 1) API calls (simulated)
  // -------------------------
  async fetchUsers(): Promise<User[]> {
    // Simulating an HTTP call
    await new Promise((r) => setTimeout(r, 300));
    return [...this.users];
  }

  // -------------------------
  // 2) Shared state
  // -------------------------
  setSelectedUser(id: number) {
    this.selectedUserId = id;
  }

  getSelectedUserId() {
    return this.selectedUserId;
  }

  // -------------------------
  // 3) Business logic separation
  // -------------------------
  formatUserLabel(user: User): string {
    // Example of business/display logic centralized in service
    return `#${user.id} - ${user.name.toUpperCase()}`;
  }
}

@Component({
  selector: 'app-when-to-use-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './when-to-use-services.component.html',
  styleUrl: './when-to-use-services.component.scss',
})
export class WhenToUseServicesComponent {
  private userSvc = inject(UserDataService);

  // UI state
  users: User[] = [];
  loading = false;

  selectedId: number | null = null;

  // Content
  intro =
    'Services are used to keep components clean by moving reusable logic outside the UI layer.';

  sections = [
    {
      title: '1) API Calls (HTTP)',
      points: [
        'Keep HTTP calls in services, not in components.',
        'Makes code reusable across multiple components.',
        'Easier to test (mock service methods).',
      ],
    },
    {
      title: '2) Shared State',
      points: [
        'If multiple components need the same data/state, store it in a service.',
        'Examples: logged-in user, cart count, selected item, theme settings.',
        'Prevents prop drilling and repeated fetching.',
      ],
    },
    {
      title: '3) Business Logic Separation',
      points: [
        'Components should focus on UI (rendering + user interaction).',
        'Business rules should live in services: formatting, calculations, validations, decision rules.',
        'Improves maintainability and reduces duplication.',
      ],
    },
  ];

  // Safe snippets (use [textContent])
  apiSnippet = `// service
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/users');
  }
}`;

  sharedStateSnippet = `// service (shared state)
selectedUserId: number | null = null;

setSelectedUser(id: number) {
  this.selectedUserId = id;
}

getSelectedUserId() {
  return this.selectedUserId;
}`;

  businessLogicSnippet = `// service (business logic)
formatUserLabel(user: User) {
  return \`#\${user.id} - \${user.name.toUpperCase()}\`;
}`;

  // -------------------------
  // Live demo actions
  // -------------------------
  async loadUsers() {
    this.loading = true;
    this.users = [];
    try {
      const result = await this.userSvc.fetchUsers();
      this.users = result;
    } finally {
      this.loading = false;
    }
  }

  selectUser(id: number) {
    this.userSvc.setSelectedUser(id);
    this.selectedId = this.userSvc.getSelectedUserId();
  }

  getLabel(u: User): string {
    return this.userSvc.formatUserLabel(u);
  }

  clearSelection() {
    this.userSvc.setSelectedUser(null as any); // keep simple
    this.selectedId = this.userSvc.getSelectedUserId();
  }
}
