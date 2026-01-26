import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-control-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-control-example.component.html',
  styleUrl: './form-control-example.component.scss',
})
export class FormControlExampleComponent {
  // ✅ 1) Creating FormControls
  nameControl = new FormControl<string>('');
  emailControl = new FormControl<string>('');

  // ✅ Logs for valueChanges
  nameChanges: string[] = [];

  // ✅ Code snippets (use with [textContent] in HTML to avoid ICU/EOF errors)
  codeCreate = `nameControl = new FormControl('');`;

  codeUsage = `<input class="form-control" [formControl]="nameControl" />`;

  codeValueChanges = `this.nameControl.valueChanges.subscribe(value => {
  console.log(value);
});`;

  constructor() {
    // ✅ 4) valueChanges observable
    this.nameControl.valueChanges.subscribe((value) => {
      this.nameChanges.push(value ?? '');
    });
  }

  // ✅ 2) setValue
  setNameUsingSetValue() {
    this.nameControl.setValue('John Doe');
  }

  // ✅ 3) patchValue
  setNameUsingPatchValue() {
    this.nameControl.patchValue('Alex');
  }

  resetControl() {
    this.nameControl.reset();
    this.nameChanges = [];
  }
}
