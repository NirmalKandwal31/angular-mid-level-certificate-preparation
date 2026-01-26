import { Component, EventEmitter, input, Input, Output, } from '@angular/core';
import { PracticeCodeService } from '../practiceCode.service';

@Component({
  selector: 'app-practice-code-child',
  standalone: true,
  imports: [],
  templateUrl: './practice-code-child.component.html',
  styleUrl: './practice-code-child.component.scss'
})
export class PracticeCodeChildComponent {

  @Input() inputValue!: number;
  @Output() emitOutputValue = new EventEmitter();

  inputValueSignalMethod = input<number>();
  behavourValue!: any;
  storeUsingValue!: any;

  ngOnInit() {
    this.showBehaviourResult()
  }
  constructor(private practiceCodeService: PracticeCodeService) { }
  emitOutputValueAfterClicking() {

    this.emitOutputValue.emit(this.inputValue)

  }

  showBehaviourResult() {

    this.practiceCodeService.getStoreValue().subscribe((value) => {
      console.log("behavourValue", value)
      this.behavourValue = value;
    })

    this.storeUsingValue = this.practiceCodeService.storeUsingSignal();
    console.log("signal using", this.practiceCodeService.storeUsingSignal());

  }

}
