import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sharing-data-using-input-output-child',
  standalone: true,
  templateUrl: './sharing-data-using-input-output-child.component.html',
  styleUrl: './sharing-data-using-input-output-child.component.scss',
})
export class SharingDataUsingInputOutputChildComponent {
  // ✅ @Input: Parent → Child data
  @Input() inputDataFromChild!: string;

  // ✅ @Output: Child → Parent event
  @Output() emitDataToParent = new EventEmitter<string>();

  sendDataToParent() {
    this.emitDataToParent.emit(
      'Data sent from Child to Parent using @Output + EventEmitter'
    );
  }
}
