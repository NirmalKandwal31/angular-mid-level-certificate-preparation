import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class PracticeCodeService {
    private store$ = new BehaviorSubject<any>(null);

    storeUsingSignal = signal<number | null>(null);

    getStoreValue() {
        console.log("this.store", this.store$)
        return this.store$;
    }

    setStoreValue(value: any) {
        this.store$.next(value)
        console.log("value", value)
    }

    // getStoreValueUsingSignal(){
    //     return this.storeUsingSignal;
    // }

    setStoreValueUsingSignal(value: any) {
        this.storeUsingSignal.set(value);
    }

}