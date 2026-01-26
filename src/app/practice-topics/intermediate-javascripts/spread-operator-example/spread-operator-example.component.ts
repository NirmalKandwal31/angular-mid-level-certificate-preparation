import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spread-operator-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spread-operator-example.component.html',
  styleUrl: './spread-operator-example.component.scss',
})
export class SpreadOperatorExampleComponent {
  // Arrays example
  fruitsArray1: string[] = ['Apple', 'Banana', 'Orange'];
  fruitsArray2: string[] = ['Mango', 'Pineapple', 'Grapes'];
  combinedFruitsArray: string[] = [];

  // Object example
  user = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA',
    },
  };

  userBeforeSpreadOperator: any;
  userAfterSpreadOperator: any;

  // Code snippets (shown in UI safely)
  arraySpreadCode = `const combined = [...fruitsArray1, ...fruitsArray2];`;
  objectSpreadCode = `const updatedUser = {
  ...user,
  age: 31,
  address: {
    ...user.address,
    city: 'Newtown'
  }
};`;

  ngOnInit() {
    this.combineFruits();
    this.updateUser();
  }

  /**
   * Spread operator (...) expands arrays into individual values.
   * Here it merges two arrays into one.
   */
  combineFruits() {
    this.combinedFruitsArray = [...this.fruitsArray1, ...this.fruitsArray2];
  }

  /**
   * Spread operator can clone/extend objects.
   * IMPORTANT: Spread makes a shallow copy, so for nested objects
   * you should spread nested levels too (as shown below).
   */
  updateUser() {
    const updatedUser = {
      ...this.user,
      age: 31,
      address: {
        ...this.user.address,
        city: 'Newtown',
      },
    };

    this.userBeforeSpreadOperator = this.user;
    this.userAfterSpreadOperator = updatedUser;
  }
}
