import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-common-angular-pipes-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-angular-pipes.component.html',
  styleUrl: './common-angular-pipes.component.scss',
})
export class CommonPipesExampleComponent {
  today = new Date();
  price = 12345.678;
  discount = 0.256;
  user = {
    name: 'John Doe',
    role: 'Admin',
    age: 30,
  };
  fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

  // Code snippets (safe for HTML)
  dateCode = `{{ today | date:'fullDate' }}`;
  currencyCode = `{{ price | currency:'USD' }}`;
  percentCode = `{{ discount | percent }}`;
  jsonCode = `{{ user | json }}`;
  sliceCode = `{{ fruits | slice:1:4 }}`;

  definitions: string[] = [
    'Pipes transform data before displaying it in the template.',
    'They are written using the pipe (|) symbol.',
    'Angular provides many built-in pipes out of the box.',
  ];
}
