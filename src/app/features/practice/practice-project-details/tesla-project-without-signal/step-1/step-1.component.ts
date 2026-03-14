import { Component } from '@angular/core';
import { TeslaServiceWithoutSignal } from '../tesla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.scss'
})
export class Step1Component {

  availableCars: any;
  selectedCar: any;

  availableColors: any;
  selectedColor: any;
  imageUrlSrc: any;

  constructor(private _teslaService: TeslaServiceWithoutSignal) { }

  ngOnInit() {
    this.availableCars = this._teslaService.models;
  }

  selectedCarEvent(event: any) {
    this.selectedCar = event.target.value;
    this.availableColors = this.availableCars.find((c: any) => c.code === this.selectedCar).colors;
    this.selectedColor = this.availableColors.length ? this.availableColors[0].code : null;
    this._teslaService.setSelectedCar(this.selectedCar);
    this.imageUrlSrc = this._teslaService.getImageUrl(this.selectedCar, this.selectedColor);
  }

  selectedColorEvent(event: any) {
    this.selectedColor = event.target.value;
    this._teslaService.setSelectedColor(this.selectedColor);
    this.imageUrlSrc = this._teslaService.getImageUrl(this.selectedCar, this.selectedColor);
  }

}
