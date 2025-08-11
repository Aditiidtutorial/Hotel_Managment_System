package com.example.HotelManagementSystem;

import jakarta.persistence.*;



	@Entity

	public class HotelEntity {



		    @Id

		    @GeneratedValue(strategy = GenerationType.IDENTITY)

		    private Long id;



		    private String name;

		    private String location;

		    private int totalRooms;



		  

		    public HotelEntity() {}



		    public HotelEntity(String name, String location, int totalRooms) {

		        this.name = name;

		        this.location = location;

		        this.totalRooms = totalRooms;

		    }



		   

		    public Long getId() {

		        return id;

		    }



		    public String getName() {

		        return name;

		    }



		    public String getLocation() {

		        return location;

		    }



		    public int getTotalRooms() {

		        return totalRooms;

		    }



		   

		    public void setId(Long id) {

		        this.id = id;

		    }



		    public void setName(String name) {

		        this.name = name;

		    }



		    public void setLocation(String location) {

		        this.location = location;

		    }



		    public void setTotalRooms(int totalRooms) {

		        this.totalRooms = totalRooms;

		    }

		}







