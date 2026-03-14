import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeslaService {

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

  //step 1
  private _selectedCar = signal<any>(null);
  readonly selectedCar = this._selectedCar.asReadonly();

  private _availableColors = signal<any>(null);
  readonly availableColors = this._availableColors.asReadonly();

  private _selectedColor = signal<any>(null);
  readonly selectedColor = this._selectedColor.asReadonly();

  //step 2

  private _configs = signal<any[]>([]);
  readonly configs = this._configs.asReadonly();
  private _selectedConfig = signal<any>(null);
  readonly selectedConfig = this._selectedConfig.asReadonly();

  private _yokeAvailable = signal<boolean>(false);
  readonly yokeAvailable = this._yokeAvailable.asReadonly();

  private _towAvailable = signal<boolean>(false);
  readonly towAvailable = this._towAvailable.asReadonly();

  // options selected by user (checkbox)
  private _yokeSelected = signal<boolean>(false);
  readonly yokeSelected = this._yokeSelected.asReadonly();

  private _towSelected = signal<boolean>(false);
  readonly towSelected = this._towSelected.asReadonly();

  //step 3

  readonly totalPrice = computed(() => {
    let total = this.selectedConfig()?.price ?? 0;

    if (this.yokeSelected()) total += 1000;
    if (this.towSelected()) total += 1000;

    return total;
  });

  setModel(modelCode: string) {
    // step1
    const car = this.models.find(m => m.code === modelCode) ?? null;
    this._selectedCar.set(car);

    const colors = car?.colors ?? [];
    this._availableColors.set(colors);
    this._selectedColor.set(colors[0] ?? null);

    // step2
    const opt = this.configOptions.find(o => o.code === modelCode) ?? null;
    const cfgs = opt?.configs ?? [];
    this._configs.set(cfgs);
    this._selectedConfig.set(cfgs[0] ?? null);

    //only setting the value doenst matter if it is true or false
    this._yokeAvailable.set(!!opt?.yoke);
    this._towAvailable.set(!!opt?.towHitch);

    // reset selections
    this._yokeSelected.set(false);
    this._towSelected.set(false);


  }


  setColor(colorCode: string) {
    const color = this.availableColors().find((c: any) => c.code === colorCode) ?? null;
    this._selectedColor.set(color);
  }

  setConfigId(id: number) {
    const cfg = this.configs().find((c: any) => c.id === id) ?? null;
    this._selectedConfig.set(cfg);
  }

  setYokeSelected(checked: boolean) {
    // optional safety: if not available, force false
    if (!this._yokeAvailable()) {
      this._yokeSelected.set(false);
      return;
    }
    this._yokeSelected.set(checked);
  }

  setTowSelected(checked: boolean) {
    if (!this._towAvailable()) {
      this._towSelected.set(false);
      return;
    }
    this._towSelected.set(checked);
  }

  getTotalPrice() {
    let total = this._selectedConfig()?.price ?? 0;
    if (this.yokeSelected()) total += 1000;
    if (this.towSelected()) total += 1000;
    return total;
  }

}
