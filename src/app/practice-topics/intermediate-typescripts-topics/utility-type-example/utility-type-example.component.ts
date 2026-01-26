import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

@Component({
  selector: 'app-utility-type-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utility-type-example.component.html',
  styleUrl: './utility-type-example.component.scss',
})
export class UtilityTypeExampleComponent {
  users: User[] = [
    { name: 'John', age: 25, isAdmin: true },
    { name: 'Doe', age: 30, isAdmin: false },
  ];

  partialUser: Partial<User> = {
    name: 'Partial John',
    age: 28,
  };

  requiredUser: Required<User> = {
    name: 'Required Doe',
    age: 32,
    isAdmin: true,
  };

  readonlyUser: Readonly<User> = {
    name: 'Readonly Alex',
    age: 29,
    isAdmin: false,
  };

  // 🔽 CODE SNIPPETS (for UI display)
  userTypeCode = `type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};`;

  partialCode = `const partialUser: Partial<User> = {
  name: 'Partial John',
  age: 28
  // isAdmin is optional
};`;

  requiredCode = `const requiredUser: Required<User> = {
  name: 'Required Doe',
  age: 32,
  isAdmin: true
};`;

  readonlyCode = `const readonlyUser: Readonly<User> = {
  name: 'Readonly Alex',
  age: 29,
  isAdmin: false
};

// readonlyUser.age = 30; ❌ Error`;
}
