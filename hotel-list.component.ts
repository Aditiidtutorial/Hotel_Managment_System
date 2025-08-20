import { Component, OnInit } from '@angular/core';
import { Hotel, HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  newHotel: Hotel = { name: '', location: '', totalRooms: 0 };

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe(data => this.hotels = data);
  }

  addHotel(): void {
    if (!this.newHotel.name || !this.newHotel.location || this.newHotel.totalRooms <= 0) return;

    this.hotelService.addHotel(this.newHotel).subscribe(() => {
      this.newHotel = { name: '', location: '', totalRooms: 0 };
      this.loadHotels();
    });
  }

  deleteHotel(id: number | undefined): void {
    if (!id) return;
    this.hotelService.deleteHotel(id).subscribe(() => this.loadHotels());
  }
}
