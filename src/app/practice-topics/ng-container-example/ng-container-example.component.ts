import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container-example.component.html',
  styleUrl: './ng-container-example.component.scss',
})
export class NgContainerExampleComponent {
  showNgContainerData: boolean = true;
  toggleData() {
    this.showNgContainerData = !this.showNgContainerData;
  }
}
