import { Component } from '@angular/core';

/**
 * User type using Union Type
 * age can be either number OR string
 */
type User = {
  name: string;
  age: number | string;
  isAdmin: boolean;
};

@Component({
  selector: 'app-union-type-example',
  standalone: true,
  imports: [],
  templateUrl: './union-type-example.component.html',
  styleUrl: './union-type-example.component.scss',
})
export class UnionTypeExampleComponent {
  // Users list using union type
  users: User[] = [
    {
      name: 'Juhis',
      age: 25, // number
      isAdmin: true,
    },
    {
      name: 'Alex',
      age: '30', // string
      isAdmin: false,
    },
  ];

  // 🔽 Code snippets for explanation
  userTypeCode = `type User = {
  name: string;
  age: number | string;
  isAdmin: boolean;
};`;

  usageCode = `const users: User[] = [
  { name: 'Juhis', age: 25, isAdmin: true },
  { name: 'Alex', age: '30', isAdmin: false }
];`;

  narrowingCode = `function formatAge(age: number | string): string {
  if (typeof age === 'number') {
    return age + ' years';
  }
  return age;
}`;
}
