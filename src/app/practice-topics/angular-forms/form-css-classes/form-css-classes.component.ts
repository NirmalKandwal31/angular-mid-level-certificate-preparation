import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-css-classes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form-css-classes.component.html',
  styleUrl: './form-css-classes.component.scss',
})
export class AngularFormCssClassesComponent {
  user = {
    name: '',
    email: '',
  };

  definitions: string[] = [
    'Angular automatically adds CSS classes to form controls based on their state.',
    'These classes help you style inputs without writing extra logic.',
    'They work with both Template-driven and Reactive forms.',
  ];

  classDefinitions = [
    {
      name: 'ng-untouched',
      meaning: 'Input has not been focused + blurred yet.',
    },
    {
      name: 'ng-touched',
      meaning: 'User focused and then left the input (blur).',
    },
    { name: 'ng-valid', meaning: 'Value passes validation rules.' },
    {
      name: 'ng-invalid',
      meaning: 'Value fails one or more validation rules.',
    },
  ];

  // ✅ Example CSS usage snippet
  cssUsageCode = `/* Show red border after user touches invalid input */
input.ng-touched.ng-invalid {
  border-color: #dc3545;
  background: #fff5f5;
}

/* Show green border after user touches valid input */
input.ng-touched.ng-valid {
  border-color: #198754;
  background: #f3faf7;
}`;

  // ✅ Example HTML snippet
  htmlUsageCode = `<input
  class="form-control"
  name="email"
  ngModel
  required
  email
/>`;

  // ✅ Helper to show class list in UI
  getModelClasses(model: NgModel): string {
    const classes: string[] = [];

    if (model.untouched) classes.push('ng-untouched');
    if (model.touched) classes.push('ng-touched');

    if (model.valid) classes.push('ng-valid');
    if (model.invalid) classes.push('ng-invalid');

    return classes.join(' ');
  }

  liveDemoSteps: string[] = [
    'Step 1: Initially, inputs are ng-untouched. They may also be ng-invalid because required is empty.',
    'Step 2: Click inside input and then click outside → it becomes ng-touched.',
    'Step 3: If value is still invalid (empty/wrong email), you will see red styling (ng-touched + ng-invalid).',
    'Step 4: Enter a valid value → it becomes ng-valid and styling turns green (ng-touched + ng-valid).',
  ];
}
