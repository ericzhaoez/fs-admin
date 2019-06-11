import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  // bookings: Array<Booking>;

  constructor(
    private httpClient: HttpClient
  ) {}

  // getBookings(): Array<Bookings> {
  //   return this.bookings;
  // }

  getAllBookings(assign: Function) {
    this.httpClient.get('http://localhost:3000/api/bookings/').subscribe((response: Array<Booking>) => {
      assign(response);
    });
  }
}