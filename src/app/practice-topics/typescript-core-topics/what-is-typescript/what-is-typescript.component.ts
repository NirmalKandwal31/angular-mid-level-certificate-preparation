import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-typescript-basics',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './what-is-typescript.component.html',
  styleUrl: './what-is-typescript.component.scss',
})
export class WhatIsTypescriptComponent {
  introPoints: string[] = [
    'TypeScript is a strongly typed programming language developed by Microsoft.',
    'It is a superset of JavaScript, meaning all JavaScript code is valid TypeScript.',
    'TypeScript adds static typing and advanced features on top of JavaScript.',
  ];

  supersetExample = {
    js: `// JavaScript
function add(a, b) {
  return a + b;
}`,
    ts: `// TypeScript
function add(a: number, b: number): number {
  return a + b;
}`,
  };

  typeExamples = [
    {
      title: 'Primitive Types',
      code: `let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;`,
    },
    {
      title: 'Array Types',
      code: `let scores: number[] = [10, 20, 30];
let fruits: Array<string> = ['Apple', 'Banana'];`,
    },
  ];

  interfaceExample = `interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user: User = {
  name: 'Alice',
  age: 25,
  isAdmin: false,
};`;

  toolingPoints: string[] = [
    'Early error detection at compile time.',
    'Excellent IDE support with auto-completion and refactoring.',
    'Improved code readability and maintainability.',
    'Better navigation and documentation in large codebases.',
  ];

  angularNote =
    'Angular is built entirely with TypeScript, which makes TypeScript knowledge essential for Angular development.';
}
