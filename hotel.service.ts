import { Injectable } from '@angular/core';

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels: Hotel[] = [
    { id: 1, name: 'Grand Hotel', location: 'Paris', rating: 5 },
    { id: 2, name: 'City Inn', location: 'London', rating: 4 }
  ];

  getHotels(): Hotel[] {
    return this.hotels;
  }
}
