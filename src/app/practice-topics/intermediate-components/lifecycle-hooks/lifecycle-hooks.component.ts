import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.scss',
})
export class LifecycleHooksComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  // ✅ Demo: Input value to show ngOnChanges
  // (Normally this comes from parent, but we’ll simulate it with a "child preview".)
  @Input() parentValue = 'Initial value';

  // ✅ Demo: ViewChild to show ngAfterViewInit
  @ViewChild('demoInput') demoInput!: ElementRef<HTMLInputElement>;

  // ✅ Logs (to visually show call order)
  logs: string[] = [];

  // ✅ ngOnDestroy demo: interval
  private intervalId: any = null;
  seconds = 0;
  timerRunning = false;

  // UI fields (simulate parent changing input)
  simulatedParentText = 'Initial value';

  // Definitions
  intro =
    'Lifecycle hooks are methods Angular calls at specific times in a component’s life (creation, updates, destruction).';

  hookCards = [
    {
      name: 'ngOnInit',
      when: 'Runs once after the first component initialization.',
      usedFor: 'API calls, initial setup, subscriptions, initializing data.',
    },
    {
      name: 'ngOnChanges',
      when: 'Runs when an @Input() value changes (including first time).',
      usedFor: 'Reacting to input changes from parent component.',
    },
    {
      name: 'ngAfterViewInit',
      when: 'Runs once after the component view + ViewChild elements are ready.',
      usedFor:
        'DOM access, reading ViewChild, focusing input, measuring elements.',
    },
    {
      name: 'ngOnDestroy',
      when: 'Runs just before the component is removed/destroyed.',
      usedFor: 'Cleanup: unsubscribe, clear timers, remove listeners.',
    },
  ];

  // Safe snippets (use [textContent] in template)
  initSnippet = `ngOnInit() {
  // Runs once after component is created
  // Good place for initial data fetch
}`;

  changesSnippet = `ngOnChanges(changes: SimpleChanges) {
  // Runs when @Input() changes
  // changes['myInput'].currentValue
}`;

  afterViewInitSnippet = `@ViewChild('demoInput') demoInput!: ElementRef<HTMLInputElement>;

ngAfterViewInit() {
  // Now ViewChild is available
  this.demoInput.nativeElement.focus();
}`;

  destroySnippet = `ngOnDestroy() {
  // Cleanup
  clearInterval(this.intervalId);
  this.sub?.unsubscribe();
}`;

  // -------------------------
  // Helpers
  // -------------------------
  private addLog(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logs.unshift(`[${time}] ${message}`);
  }

  // -------------------------
  // Lifecycle hooks
  // -------------------------
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['parentValue']) {
      const prev = changes['parentValue'].previousValue;
      const curr = changes['parentValue'].currentValue;
      this.addLog(
        `ngOnChanges: parentValue changed from "${prev}" to "${curr}"`
      );
    } else {
      this.addLog('ngOnChanges called');
    }
  }

  ngOnInit(): void {
    this.addLog('ngOnInit: component initialized');

    // Example: setup or initial fetch (simulated)
    // (No real HTTP here, just logs)
    this.addLog('ngOnInit: good place for API calls / subscriptions');
  }

  ngAfterViewInit(): void {
    this.addLog('ngAfterViewInit: ViewChild is now ready');

    // DOM access example: focus the input
    if (this.demoInput?.nativeElement) {
      this.demoInput.nativeElement.focus();
      this.addLog('ngAfterViewInit: focused the input using ViewChild');
    }
  }

  ngOnDestroy(): void {
    this.addLog('ngOnDestroy: cleanup started');
    this.stopTimer();
    this.addLog('ngOnDestroy: cleared interval (timer)');
  }

  // -------------------------
  // Demo actions
  // -------------------------
  simulateInputChange() {
    // Simulate parent changing @Input()
    this.parentValue = this.simulatedParentText;
    // ngOnChanges triggers when Angular detects input changes.
    // In real app: parent updates input binding; Angular calls ngOnChanges automatically.
    // Here it may not auto-trigger in all cases due to local assignment; we log manually as explanation:
    this.addLog(
      `Simulated: parent updated @Input() to "${this.simulatedParentText}"`
    );
  }

  startTimer() {
    if (this.timerRunning) return;

    this.timerRunning = true;
    this.addLog('Timer started (will require cleanup in ngOnDestroy)');

    this.intervalId = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.timerRunning = false;
  }

  resetLogs() {
    this.logs = [];
    this.addLog('Logs cleared');
  }
}
