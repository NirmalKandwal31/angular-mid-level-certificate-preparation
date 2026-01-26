import { Component } from '@angular/core';

@Component({
  selector: 'app-rest-operator-example',
  standalone: true,
  imports: [],
  templateUrl: './rest-operator-example.component.html',
  styleUrl: './rest-operator-example.component.scss',
})
export class RestOperatorExampleComponent {
  // Original list
  fruitsList: string[] = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

  // List created using rest operator
  remainingfruitsList: string[] = [];

  ngOnInit() {
    this.remainingFruits();
  }

  /**
   * Rest operator (...) collects remaining values
   * after destructuring into a new array.
   */
  remainingFruits() {
    const [first, second, ...rest] = this.fruitsList;

    console.log('First Fruit:', first);
    console.log('Second Fruit:', second);
    console.log('Remaining Fruits:', rest);

    this.remainingfruitsList = rest;
  }
}
