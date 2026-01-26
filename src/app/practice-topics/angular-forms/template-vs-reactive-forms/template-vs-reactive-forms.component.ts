import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-vs-reactive-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Template-driven
    ReactiveFormsModule, // Reactive
    RouterModule,
  ],
  templateUrl: './template-vs-reactive-forms.component.html',
  styleUrl: './template-vs-reactive-forms.component.scss',
})
export class TemplateVsReactiveFormsComponent {
  // -------------------------
  // Template-driven demo data
  // -------------------------
  templateUser = {
    name: '',
    email: '',
  };

  templateSubmittedData: any = null;

  submitTemplateForm() {
    this.templateSubmittedData = { ...this.templateUser };
  }

  resetTemplateForm() {
    this.templateUser = { name: '', email: '' };
    this.templateSubmittedData = null;
  }

  // -------------------------
  // Reactive demo form
  // -------------------------
  reactiveForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  reactiveSubmittedData: any = null;

  submitReactiveForm() {
    this.reactiveSubmittedData = this.reactiveForm.getRawValue();
  }

  resetReactiveForm() {
    this.reactiveForm.reset({ name: '', email: '' });
    this.reactiveSubmittedData = null;
  }

  // -------------------------
  // Scalability demo (nested)
  // -------------------------
  scalabilityForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    address: new FormGroup({
      city: new FormControl<string>('', { nonNullable: true }),
      zip: new FormControl<string>('', { nonNullable: true }),
    }),
  });

  // -------------------------
  // Explanations
  // -------------------------
  overviewPoints: string[] = [
    'Template-driven forms are mostly built in the HTML using ngModel.',
    'Reactive forms are built in TypeScript using FormControl and FormGroup.',
    'Reactive forms scale better for complex and dynamic forms.',
  ];

  comparisonRows = [
    {
      key: 'Where logic lives',
      template: 'Mostly in HTML',
      reactive: 'Mostly in TypeScript',
    },
    {
      key: 'Core API',
      template: 'ngModel / ngForm',
      reactive: 'FormControl / FormGroup',
    },
    {
      key: 'Best for',
      template: 'Small/simple forms',
      reactive: 'Large/complex forms',
    },
    {
      key: 'Validation',
      template: 'Template-based',
      reactive: 'Centralized in TS',
    },
    { key: 'Testing', template: 'Harder', reactive: 'Easier' },
    { key: 'Scalability', template: 'Limited', reactive: 'High' },
  ];

  // Code snippets (render with [textContent] to avoid ICU/EOF errors)
  templateHtmlSnippet = `<form #f="ngForm" (ngSubmit)="submitTemplateForm()">
  <input name="name" [(ngModel)]="templateUser.name" required />
  <input name="email" [(ngModel)]="templateUser.email" required email />
  <button [disabled]="f.invalid">Submit</button>
</form>`;

  reactiveTsSnippet = `reactiveForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
});`;

  reactiveHtmlSnippet = `<form [formGroup]="reactiveForm" (ngSubmit)="submitReactiveForm()">
  <input formControlName="name" />
  <input formControlName="email" />
  <button [disabled]="reactiveForm.invalid">Submit</button>
</form>`;

  scalabilityTsSnippet = `// Nested structure (scales better)
scalabilityForm = new FormGroup({
  name: new FormControl(''),
  address: new FormGroup({
    city: new FormControl(''),
    zip: new FormControl(''),
  }),
});`;
}
