import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CRUDService, Users } from '../../../../../services/crud-service.service';



interface MethodDoc {
  name: string;
  purpose: string;
  whenUsed: string;
  input: string;
  output: string;
};

@Component({
  selector: 'app-crud-operation-example',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crud-operation-example.component.html',
  styleUrl: './crud-operation-example.component.scss',
})
export class CrudOperationExampleComponent implements OnInit {
  users: Users[] = [];
  lastAction = 'Page loaded';

  // ✅ Method explanations for UI
  methodDocs: MethodDoc[] = [
    {
      name: 'getAllUsers()',
      purpose: 'READ: returns the full users array from the service.',
      whenUsed: 'Called on page load and after every CRUD operation to refresh UI.',
      input: 'None',
      output: 'Users[]',
    },
    {
      name: 'addUser(user)',
      purpose: 'CREATE: adds a new user object to the service array.',
      whenUsed: 'When you click “Add New User”.',
      input: 'Users (new user object)',
      output: 'number (array length returned by push)',
    },
    {
      name: 'deleteUser(id)',
      purpose: 'DELETE: removes a user by id.',
      whenUsed: 'When you click “Delete” on a row.',
      input: 'number (id)',
      output: 'Users[] (updated array)',
    },
    {
      name: 'editUser(user)',
      purpose: 'UPDATE: finds user by id and replaces the object with updated one.',
      whenUsed: 'When you click “Edit” on a row.',
      input: 'Users (updated user object)',
      output: 'void',
    },
  ];

  // ✅ Simple “flow” explanation for beginners
  flowSteps: string[] = [
    'The component does NOT store data permanently. The service does.',
    'On page load: component calls service.getAllUsers() and shows the table.',
    'On Create/Edit/Delete: component calls a service method, then refreshes the list.',
    'Refreshing list = calling getAllUsers() again so UI updates instantly.',
  ];

  constructor(private crudService: CRUDService) { }

  ngOnInit() {
    this.refreshUsers();
    this.lastAction = 'READ: Loaded all users using getAllUsers()';
  }

  refreshUsers() {
    this.users = this.crudService.getAllUsers();
  }

  // ----------------------------
  // CREATE
  // ----------------------------
  addNewUser() {
    const user: Users = {
      id: this.users.length + 1,
      name: 'Alice',
      age: 30,
      address: 'Chicago',
    };

    this.crudService.addUser(user);
    this.refreshUsers();
    this.lastAction = `CREATE: Added "${user.name}"`;
  }

  // ----------------------------
  // DELETE
  // ----------------------------
  deleteUser(id: number) {
    this.crudService.deleteUser(id);
    this.refreshUsers();
    this.lastAction = `DELETE: Removed user with ID ${id}`;
  }

  // ----------------------------
  // UPDATE
  // ----------------------------
  editUser(user: Users) {
    const updatedUser: Users = { ...user, name: user.name + ' (Edited)' };
    this.crudService.editUser(updatedUser);

    // ✅ refresh to reflect changes in UI
    this.refreshUsers();
    this.lastAction = `UPDATE: Edited user ID ${user.id}`;
  }

  // ----------------------------
  // ✅ Code snippets (safe for template)
  // ----------------------------
  componentTsSnippet = `// crud-operation-example.component.ts
export class CrudOperationExampleComponent {
  users: Users[] = [];

  ngOnInit() {
    this.refreshUsers(); // READ
  }

  refreshUsers() {
    this.users = this.crudService.getAllUsers();
  }

  addNewUser() {
    const user: Users = { id: ..., name: 'Alice', age: 30, address: 'Chicago' };
    this.crudService.addUser(user); // CREATE
    this.refreshUsers();
  }

  editUser(user: Users) {
    const updatedUser = { ...user, name: user.name + ' (Edited)' };
    this.crudService.editUser(updatedUser); // UPDATE
    this.refreshUsers();
  }

  deleteUser(id: number) {
    this.crudService.deleteUser(id); // DELETE
    this.refreshUsers();
  }
}`;

  templateSnippet = `<!-- crud-operation-example.component.html -->
<tr *ngFor="let user of users">
  <td>{{ user.id }}</td>
  <td>{{ user.name }}</td>
  <td>{{ user.age }}</td>
  <td>{{ user.address }}</td>

  <td>
    <button (click)="editUser(user)">Edit</button>
    <button (click)="deleteUser(user.id)">Delete</button>
  </td>
</tr>`;

  serviceSnippet = `// crud-service.service.ts
@Injectable({ providedIn: 'root' })
export class CRUDService {
  users: Users[] = [...];

  getAllUsers(): Users[] {
    return this.users; // READ
  }

  addUser(user: Users) {
    return this.users.push(user); // CREATE
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id); // DELETE
    return this.users;
  }

  editUser(user: Users) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) this.users[index] = user; // UPDATE
  }
}`;
}
