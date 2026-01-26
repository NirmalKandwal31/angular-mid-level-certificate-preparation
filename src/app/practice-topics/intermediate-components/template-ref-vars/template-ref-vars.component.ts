import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-reference-variables',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './template-ref-vars.component.html',
  styleUrl: './template-ref-vars.component.scss',
})
export class TemplateReferenceVariablesComponent implements AfterViewInit {
  // ✅ ViewChild: access the same element via template reference variable
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

  // UI state
  currentValueFromTemplateRef = '';
  currentValueFromViewChild = '';
  afterViewInitMessage = '';

  // Content
  overviewPoints: string[] = [
    'A template reference variable is created using #ref in the HTML template.',
    'It gives you a direct reference to an element or component instance inside the template.',
    'You can read DOM values instantly (e.g., input.value) without creating extra variables.',
    'If you want to access the same element in TypeScript, use @ViewChild with the same #ref name.',
  ];

  useCases: string[] = [
    'Read input values on button click without two-way binding',
    'Focus an input programmatically',
    'Access child component methods/properties',
    'Quick DOM reference inside template for simple tasks',
  ];

  // Safe snippets (render with [textContent])
  refSnippet = `<input #nameInput type="text" />
<button (click)="readFromTemplate(nameInput.value)">Read</button>`;

  viewChildSnippet = `@ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;

readFromViewChild() {
  const value = this.nameInputRef.nativeElement.value;
}`;

  focusSnippet = `this.nameInputRef.nativeElement.focus();`;

  // Lifecycle: ViewChild becomes available here
  ngAfterViewInit(): void {
    this.afterViewInitMessage =
      'ViewChild is available now (after ngAfterViewInit).';
  }

  // ✅ Read value using template ref variable (passed from template)
  readFromTemplate(value: string) {
    this.currentValueFromTemplateRef = value;
  }

  // ✅ Read value using ViewChild in TS
  readFromViewChild() {
    if (!this.nameInputRef) return;
    this.currentValueFromViewChild = this.nameInputRef.nativeElement.value;
  }

  // ✅ Focus using ViewChild
  focusInput() {
    if (!this.nameInputRef) return;
    this.nameInputRef.nativeElement.focus();
  }

  // ✅ Set value using ViewChild
  setDemoValue() {
    if (!this.nameInputRef) return;
    this.nameInputRef.nativeElement.value = 'Hello from ViewChild!';
    this.currentValueFromViewChild = this.nameInputRef.nativeElement.value;
  }

  clear() {
    this.currentValueFromTemplateRef = '';
    this.currentValueFromViewChild = '';
    if (this.nameInputRef) this.nameInputRef.nativeElement.value = '';
  }
}
