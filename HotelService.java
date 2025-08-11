package com.example.HotelManagementSystem;

import org.springframework.stereotype.Service;



import java.util.List;



@Service

public class HotelService {



    private final HotelRepository hotelRepository;



    public HotelService(HotelRepository hotelRepository) {

        this.hotelRepository = hotelRepository;

    }



    public HotelEntity addHotel(HotelEntity hotel) {

        return hotelRepository.save(hotel);

    }



    public List<HotelEntity> getAllHotels() {

        return hotelRepository.findAll();

    }



    public void deleteHotel(Long id) {

        hotelRepository.deleteById(id);

    }

}








