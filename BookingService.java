package com.example.HotelManagementSystem;

import org.springframework.stereotype.Service;



	import java.util.List;



	@Service

	public class BookingService {



	    private final BookingRepository bookingRepository;



	    public BookingService(BookingRepository bookingRepository) {

	        this.bookingRepository = bookingRepository;

	    }



	    public BookingEntity addBooking(BookingEntity booking) {

	        return bookingRepository.save(booking);

	    }



	    public List<BookingEntity> getAllBookings() {

	        return bookingRepository.findAll();

	    }



	    public void deleteBooking(Long id) {

	        bookingRepository.deleteById(id);

	    }

	}



