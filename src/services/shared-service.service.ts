import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type User = {
  id: number;
  name: string;
  age: number;
};

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  /**
   * Shared signal state
   * Step1 will update it, Step2 will read it.
   */
  private readonly _testDataFromStep1: WritableSignal<User[]> = signal<User[]>(
    []
  );

  /**
   * Expose as read-only style usage in templates:
   * sharedService.testDataFromStep1()
   */
  testDataFromStep1 = this._testDataFromStep1.asReadonly();
  //For BehaviorSubject
  testDataFromStep1BS = new BehaviorSubject<any | null>(null);

  /**
   * Setter method (clean + controlled)
   */
  setTestDataFromStep1(data: User[]) {
    this._testDataFromStep1.set(data);
  }

  /**
   * Optional: clear
   */
  clear() {
    this._testDataFromStep1.set([]);
  }
}
