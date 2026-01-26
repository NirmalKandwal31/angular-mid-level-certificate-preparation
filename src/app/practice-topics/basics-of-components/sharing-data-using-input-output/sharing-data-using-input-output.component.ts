import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharingDataUsingInputOutputChildComponent } from './sharing-data-using-input-output-child/sharing-data-using-input-output-child.component';

@Component({
  selector: 'app-sharing-data-using-input-output',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharingDataUsingInputOutputChildComponent,
  ],
  templateUrl: './sharing-data-using-input-output.component.html',
  styleUrl: './sharing-data-using-input-output.component.scss',
})
export class SharingDataUsingInputOutputComponent {
  // ✅ Parent → Child
  inputDataFromChild = 'Data sent from Parent to Child using @Input decorator';

  // ✅ Child → Parent result show
  displayMessageOfOutPutDecorator = '';

  displayMessageMethod(event: string) {
    this.displayMessageOfOutPutDecorator = event;
  }

  // -----------------------------
  // ✅ Code Snippets for UI
  // -----------------------------
  parentTsSnippet = `export class SharingDataUsingInputOutputComponent {
  inputDataFromChild =
    'Data sent from Parent to Child using @Input decorator';

  displayMessageOfOutPutDecorator = '';

  displayMessageMethod(event: string) {
    this.displayMessageOfOutPutDecorator = event;
  }
}`;

  parentHtmlSnippet = `<app-sharing-data-using-input-output-child
  [inputDataFromChild]="inputDataFromChild"      <!-- ✅ Parent → Child -->
  (emitDataToParent)="displayMessageMethod($event)" <!-- ✅ Child → Parent -->
></app-sharing-data-using-input-output-child>`;

  childTsSnippet = `export class SharingDataUsingInputOutputChildComponent {
  @Input() inputDataFromChild!: string; // ✅ Parent → Child

  @Output() emitDataToParent = new EventEmitter<string>(); // ✅ Child → Parent

  sendDataToParent() {
    this.emitDataToParent.emit('message from child');
  }
}`;

  childHtmlSnippet = `<p>{{ inputDataFromChild }}</p> <!-- ✅ showing @Input value -->
<button (click)="sendDataToParent()">Emit</button> <!-- ✅ emits @Output -->
`;
}
