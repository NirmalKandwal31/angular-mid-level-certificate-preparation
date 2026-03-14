import { Component, inject, signal } from '@angular/core';
import { TeslaService } from '../tesla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tesla-step-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tesla-step-2.component.html',
  styleUrl: './tesla-step-2.component.scss'
})
export class TeslaStep2Component {

  teslaService = inject(TeslaService);
  //to display all dropdown values
  //configurations = this.teslaService.configOptions.flatMap(o => o.configs);
  allConfiguartions = this.teslaService.configs;
  selectedConfiguration = this.teslaService.selectedConfig;


  yokeAvailable = this.teslaService.yokeAvailable;
  towAvailable = this.teslaService.towAvailable;

  yokeSelected = this.teslaService.yokeSelected;
  towSelected = this.teslaService.towSelected;


  selectedConfigurationEvent(event: any) {
    const id = Number(event.target.value)
    this.teslaService.setConfigId(id)

  }

  towSelectedEvent(e: any) {
    this.teslaService.setTowSelected(e.target.checked);
  }
  yokeSelectedEvent(e: any) {
    this.teslaService.setYokeSelected(e.target.checked);
  }

}
