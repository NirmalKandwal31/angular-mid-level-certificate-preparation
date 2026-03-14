import { Component, inject, signal } from '@angular/core';
import { TeslaService } from '../tesla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tesla-step-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tesla-step-1.component.html',
  styleUrl: './tesla-step-1.component.scss'
})
export class TeslaStep1Component {
  tesla = inject(TeslaService);

  allModels = this.tesla.models;

  // ✅ new names
  colors = this.tesla.availableColors;
  selectedModel = this.tesla.selectedCar;   // (car == model)
  selectedColor = this.tesla.selectedColor;

  selectedModelValue(e: Event) {
    const code = (e.target as HTMLSelectElement).value;
    this.tesla.setModel(code);
  }

  selectedColorValue(e: Event) {
    const code = (e.target as HTMLSelectElement).value;
    this.tesla.setColor(code);
  }
}
