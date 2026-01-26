import { CommonModule } from '@angular/common';
import { Component, Injectable, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

/* -------------------------
   Service
------------------------- */
@Injectable({ providedIn: 'root' })
export class CounterService {
  private count = 0;

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }

  reset() {
    this.count = 0;
  }
}

/* -------------------------
   Component
------------------------- */
@Component({
  selector: 'app-inject-service-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inject-service.component.html',
  styleUrl: './inject-service.component.scss',
})
export class InjectServiceComponentComponent {
  /* -----------------------------------
     1️⃣ Constructor Injection (classic)
  ----------------------------------- */
  constructor(public counterSvc: CounterService) {}

  /* -----------------------------------
     2️⃣ inject() function (standalone)
  ----------------------------------- */
  counterSvcUsingInject = inject(CounterService);

  /* -----------------------------------
     Actions
  ----------------------------------- */
  incrementUsingConstructor() {
    this.counterSvc.increment();
  }

  incrementUsingInject() {
    this.counterSvcUsingInject.increment();
  }

  reset() {
    this.counterSvc.reset();
  }

  /* -----------------------------------
     Explanations
  ----------------------------------- */
  points: string[] = [
    'Services are injected into components using Angular Dependency Injection.',
    'The most common way is constructor injection.',
    'In standalone components, Angular also provides the inject() function.',
  ];

  constructorSnippet = `constructor(private svc: CounterService) {
  // Angular injects the service here
}`;

  injectSnippet = `counterSvc = inject(CounterService);
// No constructor needed`;

  whenToUse: string[] = [
    'Use constructor injection for most cases (recommended & familiar).',
    'Use inject() in standalone components or functional code.',
    'Both methods return the same service instance.',
  ];
}
