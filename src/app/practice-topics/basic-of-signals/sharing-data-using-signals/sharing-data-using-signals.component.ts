import { Component } from '@angular/core';
import { SharingDataUsingSignalsStep1Component } from './sharing-data-using-signals-step1/sharing-data-using-signals-step1.component';
import { SharingDataUsingSignalsStep2Component } from './sharing-data-using-signals-step2/sharing-data-using-signals-step2.component';

@Component({
  selector: 'app-sharing-data-using-signals',
  standalone: true,
  imports: [
    SharingDataUsingSignalsStep1Component,
    SharingDataUsingSignalsStep2Component,
  ],
  templateUrl: './sharing-data-using-signals.component.html',
  styleUrl: './sharing-data-using-signals.component.scss',
})
export class SharingDataUsingSignalsComponent {}
