import { Component, OnInit } from '@angular/core';
import { TeslaServiceWithoutSignal } from '../tesla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-3.component.html',
  styleUrl: './step-3.component.scss'
})
export class Step3Component implements OnInit {

  constructor(private _teslaService: TeslaServiceWithoutSignal) { }
  summaryData: any;
  selectedConfigData = this._teslaService.selectedConfig$;
  isTowSelected = this._teslaService.selectedTow;
  isYokeSelected = this._teslaService.selectedYoke;
  totalPrice: any;
  ngOnInit() {
    this.selectedConfigData.subscribe((data: any) => {
      this.summaryData = data;
      if (this.isTowSelected || this.isYokeSelected) {
        this.totalPrice =
          (this.summaryData?.price ?? 0) +
          (this.isTowSelected ? 1000 : 0) +
          (this.isYokeSelected ? 1000 : 0);

      }
      else {
        this.totalPrice = this.summaryData?.price
      }

    });

  }

}
