import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-typescript-syntax',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './typescript-syntax.component.html',
  styleUrl: './typescript-syntax.component.scss',
})
export class TypescriptSyntaxComponent {
  introPoints: string[] = [
    'TypeScript extends JavaScript syntax by adding types and class-based features.',
    'It helps developers write safer and more predictable code.',
    'This syntax is heavily used in Angular components and services.',
  ];

  variableExample = `let username: string = 'John';
const age: number = 30;
let isLoggedIn: boolean = true;`;

  arrayExample = `let fruits: string[] = ['Apple', 'Banana', 'Mango'];
let scores: Array<number> = [10, 20, 30];`;

  classExample = `class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo(): string {
    return \`\${this.name} is \${this.age} years old\`;
  }
}`;

  accessModifierExample = `class Account {
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
    this.accountType = 'Savings';
  }

  public getBalance(): number {
    return this.balance;
  }
}`;

  accessModifiers: string[] = [
    'public: Accessible from anywhere (default in TypeScript).',
    'private: Accessible only within the same class.',
    'protected: Accessible within the class and its subclasses.',
  ];

  angularNote =
    'Angular makes heavy use of classes and access modifiers, especially in components, services, and dependency injection.';
}
