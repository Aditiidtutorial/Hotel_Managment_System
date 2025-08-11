//✅ Add Hotel
document.getElementById("addHotelBtn").addEventListener("click", function () {
    let name = document.getElementById("hotelName").value;
    let location = document.getElementById("hotelLocation").value;
    let totalRooms = document.getElementById("totalRooms").value;

    fetch("http://localhost:4444/api/hotel", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, location: location, totalRooms: totalRooms })
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to add hotel");
        return res.text();
    })
    .then(data => {
        alert("✅ Hotel successfully added!");
        console.log(data);
        getAllHotels();
    })
    .catch(err => alert("⚠ " + err.message));
});

// ✅ Get All Hotels
document.getElementById("refreshHotels").addEventListener("click", getAllHotels);
function getAllHotels() {
    fetch("http://localhost:4444/api/hotel")
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("hotelList");
        list.innerHTML = "";
        data.forEach(hotel => {
            let li = document.createElement("li");
            li.textContent = `ID: ${hotel.id} | ${hotel.name} (${hotel.location}) - Rooms: ${hotel.totalRooms}`;
            list.appendChild(li);
        });
    })
    .catch(err => alert("⚠ " + err.message));
}

// ✅ Add Booking
document.getElementById("addBookingBtn").addEventListener("click", function () {
    let customerName = document.getElementById("customerName").value;
    let roomNumber = document.getElementById("roomNumber").value;
    let checkInDate = document.getElementById("checkInDate").value;
    let checkOutDate = document.getElementById("checkOutDate").value;
    let hotelId = document.getElementById("hotelId").value;

    fetch("http://localhost:4444/api/booking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ customerName, roomNumber, checkInDate, checkOutDate, hotelId })
    })
    .then(res => {
        if (!res.ok) throw new Error("Failed to add booking");
        return res.text();
    })
    .then(data => {
        alert("✅ Booking successfully added!");
        console.log(data);
        getAllBookings();
    })
    .catch(err => alert("⚠ " + err.message));
});

// ✅ Get All Bookings
document.getElementById("refreshBookings").addEventListener("click", getAllBookings);
function getAllBookings() {
    fetch("http://localhost:4444/api/booking")
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("bookingList");
        list.innerHTML = "";
        data.forEach(booking => {
            let li = document.createElement("li");
            li.textContent = `Booking ID: ${booking.id} | Customer: ${booking.customerName} | Hotel ID: ${booking.hotelId} | Room: ${booking.roomNumber}`;
            list.appendChild(li);
        });
    })
    .catch(err => alert("⚠ " + err.message));
}
