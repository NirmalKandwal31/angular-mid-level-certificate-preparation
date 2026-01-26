import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-arrow-functions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './arrow-functions.component.html',
  styleUrl: './arrow-functions.component.scss',
})
export class ArrowFunctionsComponent {
  value = 10;
  buttonMessage = 'Click a demo button below.';

  syntaxExamples = {
    basic: `const add = (a: number, b: number) => a + b;`,
    blockBody: `const add = (a: number, b: number) => {
  return a + b;
};`,
    singleParam: `const square = n => n * n;`,
    noParam: `const getNow = () => new Date();`,
    objectReturn: `const makeUser = (name: string) => ({ name, active: true });`,
  };

  thisExample = {
    normalFunction: `class Demo {
  value = 10;

  normal() {
    setTimeout(function () {
      // 'this' here is NOT the class instance
      // this.value would be undefined / error in strict mode
    }, 0);
  }
}`,
    arrowFunction: `class Demo {
  value = 10;

  arrow() {
    setTimeout(() => {
      // 'this' is captured from surrounding scope (class instance)
      console.log(this.value); // 10
    }, 0);
  }
}`,
  };

  rxjsExample = `this.search.valueChanges.pipe(
  debounceTime(300),
  map(value => value.trim()),
  distinctUntilChanged(),
  switchMap(value => this.api.search(value))
).subscribe(results => this.results = results);`;

  whyImportant: string[] = [
    'Arrow functions provide shorter syntax for writing functions.',
    'They capture "this" from the surrounding scope (lexical this).',
    'They are widely used in callbacks (array methods, async handlers, etc.).',
    'They are extremely common in RxJS operators like map, filter, switchMap.',
  ];

  limitations: string[] = [
    'Arrow functions do not have their own "this".',
    'They cannot be used as constructors (you cannot use "new" with them).',
    'They do not have their own "arguments" object (use rest parameters instead).',
  ];

  runNormalThisDemo() {
    this.buttonMessage =
      'Normal functions have their own "this". In callbacks, "this" may not refer to the class/component instance.';
  }

  runArrowThisDemo() {
    this.buttonMessage =
      'Arrow functions capture "this" lexically, so inside callbacks it still refers to the class/component instance.';
  }
}
