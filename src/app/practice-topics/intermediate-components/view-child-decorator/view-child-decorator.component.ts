import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-child-decorator',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-child-decorator.component.html',
  styleUrl: './view-child-decorator.component.scss',
})
export class ViewChildDecoratorComponent implements AfterViewInit {
  // ✅ ViewChild reads the element/component that has #ref in the template
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  // UI state (to show results on screen, not only console)
  inputValueFromViewChild = '';
  emailValueFromViewChild = '';
  infoMessage = '';

  // Content
  overviewPoints: string[] = [
    '@ViewChild lets a component access a child DOM element or child component instance.',
    'It works with a template reference variable (example: #inputElement).',
    'ViewChild becomes available after the view is rendered (ngAfterViewInit).',
    'Common uses: focus input, read value, call child component methods.',
  ];

  useCases: string[] = [
    'Auto-focus an input after the page loads',
    'Read DOM values only when needed (button click)',
    'Scroll to an element / measure element size',
    'Call methods of a child component instance',
  ];

  // ✅ Safe code snippets (render using [textContent] in HTML)
  viewChildSnippet = `@ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

showViewChild() {
  console.log(this.inputElement.nativeElement.value);
}`;

  afterViewInitSnippet = `ngAfterViewInit() {
  this.emailInput.nativeElement.focus();
}`;

  ngAfterViewInit(): void {
    // ✅ ViewChild is ready here
    if (this.emailInput?.nativeElement) {
      this.emailInput.nativeElement.focus();
      this.infoMessage =
        'Email input was auto-focused in ngAfterViewInit (ViewChild is ready).';
    }
  }

  showViewChild() {
    // ✅ Read value from DOM using ViewChild
    const val = this.inputElement?.nativeElement?.value ?? '';
    this.inputValueFromViewChild = val;
  }

  readEmail() {
    const val = this.emailInput?.nativeElement?.value ?? '';
    this.emailValueFromViewChild = val;
  }

  setDemoValues() {
    if (this.inputElement?.nativeElement) {
      this.inputElement.nativeElement.value = 'Hello from ViewChild!';
      this.inputValueFromViewChild = this.inputElement.nativeElement.value;
    }

    if (this.emailInput?.nativeElement) {
      this.emailInput.nativeElement.value = 'test@mail.com';
      this.emailValueFromViewChild = this.emailInput.nativeElement.value;
    }
  }

  clear() {
    this.inputValueFromViewChild = '';
    this.emailValueFromViewChild = '';
    this.infoMessage = '';

    if (this.inputElement?.nativeElement)
      this.inputElement.nativeElement.value = '';
    if (this.emailInput?.nativeElement)
      this.emailInput.nativeElement.value = '';
  }
}
