import { Component } from '@angular/core';
import { SharingDataWithoutSignalsStep1Component } from './sharing-data-without-signals-step-1/sharing-data-without-signals-step-1.component';
import { SharingDataWithoutSignalsStep2Component } from './sharing-data-without-signals-step-2/sharing-data-without-signals-step-2.component';

@Component({
  selector: 'app-sharing-data-without-signals',
  standalone: true,
  imports: [
    SharingDataWithoutSignalsStep1Component,
    SharingDataWithoutSignalsStep2Component,
  ],
  templateUrl: './sharing-data-without-signals.component.html',
  styleUrl: './sharing-data-without-signals.component.scss',
})
export class SharingDataWithoutSignalsComponent {}
