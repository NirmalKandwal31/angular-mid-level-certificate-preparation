import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Flight {
  id: string;        // computed id
  from: string;
  to: string;
  date: string;      // keep string or change to Date later
  price: number;
  airline?: string;
}
@Injectable({
  providedIn: 'root'
})


export class FlightsService {



  private url = 'assets/flights.json';

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.url);
  }
}
