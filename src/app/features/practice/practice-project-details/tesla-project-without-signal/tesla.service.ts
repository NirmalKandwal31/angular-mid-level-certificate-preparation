import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeslaServiceWithoutSignal {

  models = [
    {
      code: "3",
      description: "Model 3",
      colors: [
        { code: "white", description: "Pearl White Multi-Coat", price: 0 },
        { code: "black", description: "Solid Black", price: 1500 },
        { code: "blue", description: "Deep Blue Metallic", price: 1500 },
        { code: "grey", description: "Midnight Grey Metallic", price: 1500 },
        { code: "red", description: "Red Multi-Coat", price: 2000 }
      ]
    },
    {
      code: "Y",
      description: "Model Y",
      colors: [
        { code: "white", description: "Pearl White Multi-Coat", price: 0 },
        { code: "black", description: "Solid Black", price: 1500 },
        { code: "blue", description: "Deep Blue Metallic", price: 1500 },
        { code: "grey", description: "Midnight Grey Metallic", price: 1500 }, // ✅ silver -> grey
        { code: "red", description: "Red Multi-Coat", price: 2000 }
      ]
    },
    {
      code: "S",
      description: "Model S",
      colors: [
        { code: "white", description: "Pearl White Multi-Coat", price: 0 },
        { code: "black", description: "Solid Black", price: 1500 },
        { code: "blue", description: "Deep Blue Metallic", price: 1500 },
        { code: "grey", description: "Midnight Grey Metallic", price: 1500 },
        { code: "red", description: "Red Multi-Coat", price: 2000 }
      ]
    },
    {
      code: "X",
      description: "Model X",
      colors: [
        { code: "white", description: "Pearl White Multi-Coat", price: 0 },
        { code: "black", description: "Solid Black", price: 1500 },
        { code: "blue", description: "Deep Blue Metallic", price: 1500 },
        { code: "grey", description: "Midnight Grey Metallic", price: 1500 },
        { code: "red", description: "Red Multi-Coat", price: 2000 }
      ]
    },
    {
      code: "C",
      description: "Cybertruck",
      colors: [
        { code: "white", description: "White", price: 0 },
        { code: "black", description: "Black", price: 1500 },
        { code: "grey", description: "Grey", price: 1500 }
      ]
    }
  ];

  configOptions = [
    {
      code: "3",
      configs: [
        { id: 1, description: "Standard Range", range: 272, speed: 140, price: 42990 },
        { id: 2, description: "Long Range", range: 341, speed: 145, price: 47990 },
        { id: 3, description: "Performance", range: 315, speed: 162, price: 53990 },
      ],
      yoke: false,
      towHitch: false,
    },
    {
      code: "Y",
      configs: [
        { id: 1, description: "Long Range", range: 330, speed: 135, price: 48990 },
        { id: 2, description: "Performance", range: 303, speed: 155, price: 52990 },
      ],
      yoke: false,
      towHitch: true,
    },
    {
      code: "S",
      configs: [
        { id: 1, description: "Dual Motor", range: 405, speed: 149, price: 74990 },
        { id: 2, description: "Plaid", range: 396, speed: 200, price: 89990 },
      ],
      yoke: true,
      towHitch: false,
    },
    {
      code: "X",
      configs: [
        { id: 1, description: "Dual Motor", range: 348, speed: 149, price: 79990 },
        { id: 2, description: "Plaid", range: 333, speed: 163, price: 94990 },
      ],
      yoke: true,
      towHitch: true,
    },
    {
      code: "C",
      configs: [
        { id: 1, description: "All-Wheel Drive", range: 340, speed: 112, price: 79990 },
        { id: 2, description: "Cyberbeast", range: 320, speed: 130, price: 99990 },
      ],
      yoke: false,
      towHitch: true,
    },
  ];

  private _selectedCar$ = new BehaviorSubject<any>(null);
  selectedCar$ = this._selectedCar$.asObservable().pipe(delay(0));

  private _selectedColor$ = new BehaviorSubject<string | null>(null);
  selectedColor$ = this._selectedColor$.asObservable();

  private _selectedConfig$ = new BehaviorSubject<string | null>(null);
  selectedConfig$ = this._selectedConfig$.asObservable().pipe(delay(0));


  private _selectedTow$ = new BehaviorSubject<any>(null);
  selectedTow = this._selectedTow$.asObservable().pipe(delay(0));

  private _selectedYoke$ = new BehaviorSubject<any>(null);
  selectedYoke = this._selectedYoke$.asObservable().pipe(delay(0));

  setSelectedCar(code: any) {
    this._selectedCar$.next(code)
  }

  setSelectedColor(code: any) {
    this._selectedColor$.next(code)
  }

  setConfig(config: any) {
    this._selectedConfig$.next(config)
  }

  setTow(isChecked: any) {
    console.log("tow checked", isChecked)
    this._selectedTow$.next(isChecked)
  }

  setYoke(isChecked: any) {
    console.log("yoke checked", isChecked)
    this._selectedYoke$.next(isChecked)
  }

  getImageUrl(selectedCar: any, selectedColor: any) {
    const image = "https://interstate21.com/tesla-app/images/" + selectedCar + '/' + selectedColor + '.jpg';
    return image;
  }


}
