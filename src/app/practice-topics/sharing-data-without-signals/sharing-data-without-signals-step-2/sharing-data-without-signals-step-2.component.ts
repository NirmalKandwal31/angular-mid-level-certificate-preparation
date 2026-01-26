import { Component } from '@angular/core';
import { SharedService } from '../../../../services/shared-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sharing-data-without-signals-step-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sharing-data-without-signals-step-2.component.html',
  styleUrl: './sharing-data-without-signals-step-2.component.scss',
})
export class SharingDataWithoutSignalsStep2Component {
  //asObservable() BehaviorSubject ko Observable me convert karta hai,
  //jisse sirf data listen ho sakta hai, change nahi.
  userTestData$ = this.sharedService.testDataFromStep1BS.asObservable();
  constructor(private sharedService: SharedService) {}
}
