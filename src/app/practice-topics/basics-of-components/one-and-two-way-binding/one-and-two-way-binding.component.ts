import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-and-two-way-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './one-and-two-way-binding.component.html',
  styleUrl: './one-and-two-way-binding.component.scss',
})
export class OneAndTwoWayBindingComponent {
  // --------------------------
  // 1) ONE-WAY demo (TS -> HTML)
  // --------------------------
  oneWayTsValue = 'Hello from TypeScript (one-way)';
  oneWayInputValue = 'Try typing here...';

  changeOneWayTsValue() {
    this.oneWayTsValue =
      'TS value changed at ' + new Date().toLocaleTimeString();
  }

  // --------------------------
  // 2) TWO-WAY demo (TS <-> HTML)
  // --------------------------
  twoWayValueManual = 'Type here (manual two-way)';
  twoWayValueNgModel = 'Type here (ngModel two-way)';

  reset() {
    this.oneWayTsValue = 'Hello from TypeScript (one-way)';
    this.oneWayInputValue = 'Try typing here...';
    this.twoWayValueManual = 'Type here (manual two-way)';
    this.twoWayValueNgModel = 'Type here (ngModel two-way)';
  }

  // --------------------------
  // ✅ Code snippets to show in UI (safe)
  // --------------------------
  tsSnippet = `export class OneAndTwoWayBindingComponent {
  // One-way
  oneWayTsValue = 'Hello from TypeScript (one-way)';

  // Two-way
  twoWayValueManual = 'Type here (manual two-way)';
  twoWayValueNgModel = 'Type here (ngModel two-way)';
}`;

  oneWayHtmlSnippet = `<!-- ONE-WAY (TS -> HTML) -->
<p>{{ oneWayTsValue }}</p>

<!-- This input does NOT update TS automatically -->
<input [value]="oneWayTsValue" />`;

  twoWayManualHtmlSnippet = `<!-- TWO-WAY (Manual) = [value] + (input) -->
<input
  [value]="twoWayValueManual"
  (input)="twoWayValueManual = $any($event.target).value"
/>
<p>{{ twoWayValueManual }}</p>`;

  twoWayNgModelHtmlSnippet = `<!-- TWO-WAY (ngModel) -->
<input [(ngModel)]="twoWayValueNgModel" />
<p>{{ twoWayValueNgModel }}</p>`;
}
