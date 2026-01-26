import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hoisting-let-var-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hoisting-let-var-example.component.html',
  styleUrl: './hoisting-let-var-example.component.scss',
})
export class HoistingLetVarExampleComponent {
  blockVarMessage = '';
  blockLetMessage = '';

  varLoopResult: number[] = [];
  letLoopResult: number[] = [];

  constructor() {
    this.blockScopeExample();
    this.loopExample();
  }

  blockScopeExample() {
    // VAR is function-scoped (not block-scoped)
    if (true) {
      var a = 'I am declared with var inside an if-block';
    }
    // Accessible outside the block
    this.blockVarMessage = a;

    // LET is block-scoped
    if (true) {
      let b = 'I am declared with let inside an if-block';
      // Assign inside the block because b is not accessible outside
      this.blockLetMessage = b;
    }

    // If you try to use b here, it will throw an error:
    // this.blockLetMessage = b; // ❌ b is not defined (outside block)
  }

  loopExample() {
    // VAR LOOP (problematic in async callbacks)
    for (var i = 0; i < 3; i++) {
      setTimeout(() => {
        // i will be the final value for all callbacks (usually 3,3,3)
        this.varLoopResult.push(i);
      }, 0);
    }

    // LET LOOP (correct behavior)
    for (let j = 0; j < 3; j++) {
      setTimeout(() => {
        // each iteration gets its own j (0,1,2)
        this.letLoopResult.push(j);
      }, 0);
    }
  }
}
