import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template-example.component.html',
  styleUrl: './ng-template-example.component.scss',
})
export class NgTemplateExampleComponent {
  showDivData: boolean = true;
  toggleData() {
    this.showDivData = !this.showDivData;
  }
}
