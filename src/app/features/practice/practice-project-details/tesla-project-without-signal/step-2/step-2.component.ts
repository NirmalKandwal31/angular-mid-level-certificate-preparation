import { Component } from '@angular/core';
import { TeslaServiceWithoutSignal } from '../tesla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.scss'
})
export class Step2Component {

  constructor(private _teslaService: TeslaServiceWithoutSignal) { }

  selectedCar = this._teslaService.selectedCar$;
  range: any;
  maxspeed: any;
  price: any;

  configurations: any;
  isConfig: boolean = false;
  selectedConfigObj: any = null;

  isTow: any;
  isYoke: any;

  ngOnInit() {
    this.selectedCar.subscribe((code: any) => {
      const config = this._teslaService.configOptions.find((c: any) => c.code === code);
      this.configurations = config?.configs ?? [];
      this.isTow = config?.towHitch;

      this.isYoke = config?.yoke;

    })

  }

  selectedConfig(event: any) {
    const configId = Number(event.target.value);
    this.selectedConfigObj = this.configurations.find((c: any) => c.id === configId);
    this._teslaService.setConfig(this.selectedConfigObj);
    this.isConfig = true;
  }

  towCheckedEvent(event: any) {
    this._teslaService.setTow(event.target.checked);
  }

  yokeCheckedEvent(event: any) {
    this._teslaService.setYoke(event.target.checked);
  }

}
