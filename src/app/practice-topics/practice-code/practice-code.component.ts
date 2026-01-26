import { Component, computed, effect, signal } from '@angular/core';
import { PracticeCodeChildComponent } from './practice-code-child/practice-code-child.component';
import { PracticeCodeService } from './practiceCode.service';
import { from, of } from 'rxjs';
import { filter, map, reduce, tap } from 'rxjs/operators';

@Component({
  selector: 'app-practice-code',
  standalone: true,
  imports: [PracticeCodeChildComponent],
  templateUrl: './practice-code.component.html',
  styleUrl: './practice-code.component.scss',
})
export class PracticeCodeComponent {
  salary = signal<number>(20);
  increment = signal<number>(500);
  updateSalary = computed(() => this.salary() + this.increment());
  count = 0;

  inputValue = signal<number>(30);
  inputValueSignalMethod = signal<number>(50);

  users = [
    {
      id: 1, name: 'John', age: 25, address: 'NY',
    },
    {
      id: 2, name: 'Jane', age: 28, address: 'LA',
    },
  ];

  newusers = [
    {
      id: 4, name: 'Let', age: 25, address: 'Dallas',
    },
    {
      id: 5, name: 'var', age: 28, address: 'Tx',
    },
  ];

  constructor(private practiceCodeService: PracticeCodeService) {
    effect(() => {
      console.log('hello', this.updateSalary());
    });
  }


  ngOnInit() {
    //will add new user
    this.users = [...this.users, { id: 3, name: 'Helle', age: 24, address: 'china' }];
    const [firstUser, ...restUsers] = [...this.users];
    console.log("this.users", this.users)
    console.log("first user", firstUser)
    console.log("second user", restUsers)

    const mergeUsers = [...this.users, ...this.newusers]
    console.log("mergeusers", mergeUsers)

    const [...copyArray] = [...this.users];
    console.log("copyarray", copyArray);

    this.checkScope();
    this.checkScopeHere();
    this.rxjsOperators();
  }


  checkScope() {

    let count = 10;
    var countNew = 24;
    const countConst = 33;
    console.log("count", count)
    console.log("coountNew", countNew)
    console.log("countConst", countConst)

    if (count) {
      let countIf = 10;
      var countNewIf = 24;
      const countConstIf = 33;
      console.log("if count", count)
      console.log("if coountNew", countNew)
      console.log("if countConst", countConst)
    }

    //  console.log("countIf", countIf)
    // console.log("countNewIf", countNewIf)
    // console.log("countConstIf", countConstIf)

  }

  checkScopeHere() {
    console.log("count", this.count)
    this.count++;
    this.practiceCodeService.setStoreValue(this.updateSalary());

    //signal

    this.practiceCodeService.setStoreValueUsingSignal(this.salary())
  }

  rxjsOperators() {
    const testValue = signal<number[]>([10, 20, 30]);
    of(testValue()).subscribe((val) => {
      console.log("using of val", val)
    })

    from(testValue()).subscribe((val) => {
      console.log("using from val", val)
    })

    from(testValue()).pipe(map(arr => arr * 3)).subscribe(val =>
      console.log("valu using map", val)
    )

    from(testValue()).pipe(reduce((acc, val) => acc + val * 3, 0)).subscribe(val =>
      console.log("valu using reduce", val)
    )

    from(testValue()).pipe(
      filter(v => v > 20)
    ).subscribe(val => {
      console.log('correct using from:', val);
    });


  }





}
