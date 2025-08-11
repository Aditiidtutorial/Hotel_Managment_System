package com.example.HotelManagementSystem;

import jakarta.persistence.*;

import java.time.LocalDate;



@Entity

@Table(name = "bookings") // टेबलचं नाव define केलं

public class BookingEntity {



    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;



    @Column(nullable = false) // required field

    private String customerName;



    @Column(nullable = false)

    private int roomNumber;



    @Column(nullable = false)

    private LocalDate checkInDate;



    @Column(nullable = false)

    private LocalDate checkOutDate;



    @ManyToOne(fetch = FetchType.LAZY) // performance improvement

    @JoinColumn(name = "hotel_id", nullable = false)

    private HotelEntity hotel;



    // Default constructor (JPA साठी आवश्यक)

    public BookingEntity() {}



    // Parameterized constructor

    public BookingEntity(String customerName, int roomNumber, LocalDate checkInDate, LocalDate checkOutDate, HotelEntity hotel) {

        this.customerName = customerName;

        this.roomNumber = roomNumber;

        this.checkInDate = checkInDate;

        this.checkOutDate = checkOutDate;

        this.hotel = hotel;

    }



    // Getters

    public Long getId() {

        return id;

    }



    public String getCustomerName() {

        return customerName;

    }



    public int getRoomNumber() {

        return roomNumber;

    }



    public LocalDate getCheckInDate() {

        return checkInDate;

    }



    public LocalDate getCheckOutDate() {

        return checkOutDate;

    }



    public HotelEntity getHotel() {

        return hotel;

    }



    // Setters

    public void setId(Long id) {

        this.id = id;

    }



    public void setCustomerName(String customerName) {

        this.customerName = customerName;

    }



    public void setRoomNumber(int roomNumber) {

        this.roomNumber = roomNumber;

    }



    public void setCheckInDate(LocalDate checkInDate) {

        this.checkInDate = checkInDate;

    }



    public void setCheckOutDate(LocalDate checkOutDate) {

        this.checkOutDate = checkOutDate;

    }



    public void setHotel(HotelEntity hotel) {

        this.hotel = hotel;

    }

}

