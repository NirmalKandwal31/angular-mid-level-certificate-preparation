import { Component, computed, signal, WritableSignal } from '@angular/core';
import {
  SharedService,
  User,
} from '../../../../../services/shared-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sharing-data-using-signals-step1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sharing-data-using-signals-step1.component.html',
  styleUrl: './sharing-data-using-signals-step1.component.scss',
})
export class SharingDataUsingSignalsStep1Component {
  /**
   * Step 1 local data (WritableSignal because we may change it later)
   */
  users: WritableSignal<User[]> = signal<User[]>([
    { id: 1, name: 'Mike', age: 24 },
    { id: 2, name: 'John Doe', age: 30 },
    { id: 3, name: 'Jane', age: 28 },
  ]);

  /**
   * Derived data (computed): filtered users (age > 25)
   * computed auto-updates when `users()` changes
   */
  filteredUsers = computed(() => this.users().filter((u) => u.age > 25));

  // UI helper
  info =
    'Step 1 owns the main list. We compute filteredUsers (age > 25) and push it into the shared service signal.';

  flowPoints: string[] = [
    ' Step 1 has a local signal "users".',
    ' filteredUsers is computed from users (age > 25).',
    ' We call sharedService.setTestDataFromStep1(filteredUsers()).',
    ' Step 2 automatically updates because it reads the service signal.',
  ];

  constructor(public sharedService: SharedService) {}

  ngOnInit() {
    // Push initial filtered list to shared service
    this.sharedService.setTestDataFromStep1(this.filteredUsers());
  }

  /**
   * Demo actions: change state in Step1 and see Step2 update automatically
   */
  addUser() {
    const nextId = this.users().length + 1;
    const newUser: User = {
      id: nextId,
      name: `User ${nextId}`,
      age: 20 + nextId,
    };

    this.users.update((list) => [...list, newUser]);

    // update shared state after change
    this.sharedService.setTestDataFromStep1(this.filteredUsers());
  }

  makeAllAdults() {
    this.users.update((list) => list.map((u) => ({ ...u, age: 30 })));
    this.sharedService.setTestDataFromStep1(this.filteredUsers());
  }

  reset() {
    this.users.set([
      { id: 1, name: 'Mike', age: 24 },
      { id: 2, name: 'John Doe', age: 30 },
      { id: 3, name: 'Jane', age: 28 },
    ]);
    this.sharedService.setTestDataFromStep1(this.filteredUsers());
  }
}
