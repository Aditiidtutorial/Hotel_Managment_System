# Hotel_Managment_System
# Contact:
1.Name: Aditi Ashok Patil

  Email: aduu.patil9@gmail.com
  
2.Name: Shrutika Mohan Dubal

  Email:shrutikadubal8@gmail.com
  
3.Name: Ankita Appa Kamble

  Email:ankitakamble154@gmail.com

4. Name: Anuja Bandu Jadhav

   Email:jadhavanuja776@gmail.com

# 🛠 Features 
Hotel Management

Add new hotels (POST /api/hotel)

View all hotels (GET /api/hotel)

Delete hotels (DELETE /api/hotel/{id})

Booking Management

Add new bookings linked to hotels (POST /api/booking)

View all bookings (GET /api/booking)

Delete bookings (DELETE /api/booking/{id})

Relational Mapping

Uses JPA/Hibernate for entity mapping between HotelEntity and BookingEntity

Service Layer

HotelService and BookingService handle business logic

Repository Layer

HotelRepository and BookingRepository extend Spring Data JPA

RESTful API

Controllers (HotelController, BookingController) expose JSON endpoints


# 🗂 Project Structure 
# Backend Structure
src/
  main/
    java/
      com/example/HotelManagementSystem/
        HotelManagementSystemApplication.java  
        HotelEntity.java                       
        BookingEntity.java                     
        HotelRepository.java                   
        BookingRepository.java                   
        HotelService.java                        
        BookingService.java                   
        HotelController.java                     
        BookingController.java                   
    resources/
      application.properties                     
pom.xml 

# Frontend Structure
hotel-booking-frontend/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hotel-list/
│   │   │   │   ├── hotel-list.component.ts
│   │   │   │   ├── hotel-list.component.html
│   │   │   │   └── hotel-list.component.css
│   │   │   └── booking-list/
│   │   │       ├── booking-list.component.ts
│   │   │       ├── booking-list.component.html
│   │   │       └── booking-list.component.css
│   │   ├── services/
│   │   │   ├── hotel.service.ts
│   │   │   └── booking.service.ts
│   │   ├── app-routing.module.ts
        ├── app.module.ts
    

# 📦 Dependencies 
Likely present in pom.xml:
<dependencies>
    <!-- Spring Boot Starter Web (REST controllers) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Boot Starter Data JPA (ORM) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- Database Driver -->
    <!-- Example: H2 for dev -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
    <!-- Or PostgreSQL -->
    <dependency>
        <groupId>org.postgresql</groupId>
        <artifactId>postgresql</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Spring Boot Starter Test (unit + integration testing) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>


# 🖥 Technologies Used
Programming Language: Java (likely Java 17 or Java 11)

Framework: Spring Boot (REST API development)

ORM: Spring Data JPA (Hibernate under the hood)

Database:

H2 (in-memory, for quick development) or

PostgreSQL / MySQL (for production)

Build Tool: Maven

Architecture: Layered (Controller → Service → Repository → Database)

API Format: REST, JSON , ANGULAR

Testing: JUnit + Spring Boot Test (if implemented)

# Output:

<img width="1313" height="858" alt="image" src="https://github.com/user-attachments/assets/8f1c2768-b9c0-45e9-9f98-bf72ec6553d2" />

<img width="1718" height="708" alt="image (1)" src="https://github.com/user-attachments/assets/c5865d9d-cb4a-4906-b96c-1b8516f4abd3" />






