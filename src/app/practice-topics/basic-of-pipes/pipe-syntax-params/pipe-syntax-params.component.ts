import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pipe-syntax-parameters',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pipe-syntax-params.component.html',
  styleUrl: './pipe-syntax-params.component.scss',
})
export class PipeSyntaxParametersComponent {
  // demo data
  today = new Date();
  price = 12345.678;
  name = 'john doe';
  fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

  // snippets (safe)
  basicSyntaxCode = `{{ value | pipeName }}`;
  paramSyntaxCode = `{{ value | pipeName:arg1:arg2 }}`;

  dateParamCode = `{{ today | date:'fullDate' }}
{{ today | date:'shortTime' }}`;

  currencyParamCode = `{{ price | currency:'USD':'symbol':'1.2-2' }}`;

  sliceParamCode = `{{ fruits | slice:1:4 }}`;

  chainingCode = `{{ name | titlecase | slice:0:8 }}`;

  definitions: string[] = [
    'Pipes transform a value for display in the template.',
    'Pipe syntax uses the | symbol (value | pipeName).',
    'Pipes can accept parameters separated by colons (:).',
    'You can chain multiple pipes from left to right.',
  ];

  chainingNotes: string[] = [
    'Chaining runs pipes from left to right.',
    'Each pipe receives the output of the previous pipe.',
    'Chaining is great for small formatting steps (not heavy computations).',
  ];
}
