import { Component } from '@angular/core';
import { SharedService } from '../../../../../services/shared-service.service';

@Component({
  selector: 'app-sharing-data-using-signals-step2',
  standalone: true,
  templateUrl: './sharing-data-using-signals-step2.component.html',
  styleUrl: './sharing-data-using-signals-step2.component.scss',
})
export class SharingDataUsingSignalsStep2Component {
  info =
    'Step 2 does not own the data. It only reads the shared signal from SharedService. When Step 1 updates the shared signal, Step 2 updates automatically.';

  constructor(public sharedService: SharedService) {}
}
