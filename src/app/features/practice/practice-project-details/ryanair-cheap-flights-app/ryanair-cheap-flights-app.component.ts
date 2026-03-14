/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { FlightsService } from '../../../../../services/flights.service';

@Component({
  selector: 'app-ryanair-cheap-flights-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ryanair-cheap-flights-app.component.html',
  styleUrl: './ryanair-cheap-flights-app.component.scss'
})
export class RyanairCheapFlightsAppComponent {

  flights$ = this.flightsService.getFlights();
  loading = false;

  private from$ = new BehaviorSubject<string>('');
  private to$ = new BehaviorSubject<string>('');
  private maxPrice$ = new BehaviorSubject<number>(999999);

  filteredFlights$ = combineLatest([
    this.flights$,
    this.from$,
    this.to$,
    this.maxPrice$
  ]).pipe(
    map(([flights, from, to, maxPrice]) => {
      const f = from.trim().toUpperCase();
      const t = to.trim().toUpperCase();

      return flights.filter(x =>
        (!f || (x.from ?? '').toUpperCase().includes(f)) &&
        (!t || (x.to ?? '').toUpperCase().includes(t)) &&
        (x.price ?? 0) <= maxPrice
      );
    })
  );

  constructor(private flightsService: FlightsService) { }

  trackById(index: number, item: any) {
    return item.id ?? index;
  }

  onFrom(value: string) {
    this.from$.next(value);
  }

  onTo(value: string) {
    this.to$.next(value);
  }

  onMaxPrice(value: string) {
    const n = Number(value);
    this.maxPrice$.next(Number.isFinite(n) ? n : 999999);
  }
}
