import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TeslaServiceWithoutSignal } from './tesla.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tesla-project-without-signal',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './tesla-project-without-signal.component.html',
  styleUrl: './tesla-project-without-signal.component.scss'
})
export class TeslaProjectWithoutSignalComponent {

  isModel = this._teslaSerice.selectedCar$
  isConfig = this._teslaSerice.selectedConfig$;

  constructor(private _teslaSerice: TeslaServiceWithoutSignal, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['tesla-project-without-signal/step1'], { replaceUrl: true })
  }

}
