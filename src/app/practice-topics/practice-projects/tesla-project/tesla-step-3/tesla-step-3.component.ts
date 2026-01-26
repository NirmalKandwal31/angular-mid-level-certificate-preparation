import { Component, inject } from '@angular/core';
import { TeslaService } from '../tesla.service';

@Component({
  selector: 'app-tesla-step-3',
  standalone: true,
  imports: [],
  templateUrl: './tesla-step-3.component.html',
  styleUrl: './tesla-step-3.component.scss'
})
export class TeslaStep3Component {
  teslaService = inject(TeslaService);

  selectedConfig = this.teslaService.selectedConfig;

  yokeSelected = this.teslaService.yokeSelected;
  towSelected = this.teslaService.towSelected;
  totalPrice = this.teslaService.totalPrice;

}
