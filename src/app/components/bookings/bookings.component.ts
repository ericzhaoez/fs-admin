import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Array<Booking> = new Array();

  constructor(
    private bookingService: BookingService
  ) {
    this.bookingService.getAllBookings((res) => {
      this.bookings = res;
    });

  }

  ngOnInit() {
  }

}