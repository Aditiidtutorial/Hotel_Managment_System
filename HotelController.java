package com.example.HotelManagementSystem;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController

@RequestMapping("/api/hotel")

@CrossOrigin(origins = "http://127.0.0.1:5500") 

public class HotelController {


    private final HotelService hotelService;


    public HotelController(HotelService hotelService) {

        this.hotelService = hotelService;

    }

    @PostMapping

    public HotelEntity addHotel(@RequestBody HotelEntity hotel) {

        return hotelService.addHotel(hotel);

    }

    @GetMapping

    public List<HotelEntity> getAllHotels() {

        return hotelService.getAllHotels();
    }
    
    @DeleteMapping("/{id}")

    public void deleteHotel(@PathVariable Long id) {

        hotelService.deleteHotel(id);

    }
}