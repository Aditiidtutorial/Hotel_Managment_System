package com.example.HotelManagementSystem;



import org.springframework.web.bind.annotation.*;



import java.util.List;



    

	@RestController

	@RequestMapping("/api/booking")

	@CrossOrigin(origins = "http://127.0.0.1:5500") 

	public class BookingController {



	    private final BookingService bookingService;



	    public BookingController(BookingService bookingService) {

	        this.bookingService = bookingService;

	    }



	    @PostMapping

	    public BookingEntity addBooking(@RequestBody BookingEntity booking) {

	        return bookingService.addBooking(booking);

	    }



	    @GetMapping

	    public List<BookingEntity> getAllBookings() {

	        return bookingService.getAllBookings();

	    }



	    @DeleteMapping("/{id}")

	    public void deleteBooking(@PathVariable Long id) {

	        bookingService.deleteBooking(id);

	    }

	}





