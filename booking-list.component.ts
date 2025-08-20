import { Component, OnInit } from '@angular/core';
import { Booking, BookingService } from '../../services/booking.service';
import { Hotel, HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Booking[] = [];
  hotels: Hotel[] = [];

  newBooking: Booking = {
    customerName: '',
    roomNumber: 0,
    checkInDate: '',
    checkOutDate: '',
    hotel: { id: 0, name: '', location: '', totalRooms: 0 }
  };

  constructor(
    private bookingService: BookingService,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.loadBookings();
    this.hotelService.getHotels().subscribe(data => this.hotels = data);
  }

  loadBookings(): void {
    this.bookingService.getBookings().subscribe(data => this.bookings = data);
  }

  addBooking(): void {
    if (!this.newBooking.customerName || !this.newBooking.roomNumber || !this.newBooking.hotel.id) return;

    this.bookingService.addBooking(this.newBooking).subscribe(() => {
      this.newBooking = {
        customerName: '',
        roomNumber: 0,
        checkInDate: '',
        checkOutDate: '',
        hotel: { id: 0, name: '', location: '', totalRooms: 0 }
      };
      this.loadBookings();
    });
  }

  deleteBooking(id: number | undefined): void {
    if (!id) return;
    this.bookingService.deleteBooking(id).subscribe(() => this.loadBookings());
  }
}
