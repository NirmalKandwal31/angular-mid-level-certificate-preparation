import { Component } from '@angular/core';
import { SharedService } from '../../../../services/shared-service.service';

@Component({
  selector: 'app-sharing-data-without-signals-step-1',
  standalone: true,
  imports: [],
  templateUrl: './sharing-data-without-signals-step-1.component.html',
  styleUrl: './sharing-data-without-signals-step-1.component.scss',
})
export class SharingDataWithoutSignalsStep1Component {
  testData = [
    { name: 'Mike', age: 24 },
    { name: 'John Doe', age: 30 },
    { name: 'Jane ', age: 28 },
  ];
  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.sharedService.testDataFromStep1BS.next(this.testData);
  }
}
