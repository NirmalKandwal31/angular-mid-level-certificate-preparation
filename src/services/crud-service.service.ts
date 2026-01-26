import { Injectable, Signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Users {
  id: number;
  name: string;
  age: number;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  users: Users[] = [
    { id: 1, name: 'John', age: 25, address: 'NY' },
    { id: 2, name: 'Jane', age: 28, address: 'LA' },
    { id: 3, name: 'Doe', age: 22, address: 'SF' },
  ];

  getAllUsers(): Users[] {
    return this.users;
  }

  addUser(user: Users) {
    return this.users.push(user);
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return this.users;
  }

  editUser(user: Users) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
