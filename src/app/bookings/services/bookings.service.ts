import { Injectable } from '@angular/core';
import flights from '../files/flights.json';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor() { }

  // Get all flights
  getFlights() {
    return flights;
  }
}
