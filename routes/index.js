var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  var adminData = [
    {
      adminId: 0001,
      fullName: "John",
      email: "user@test.com",
      phone: 081234567890,
      gender: "male",
      age: 28,
      address: "Somewhere street on earth",
      country: "US",
      state: "California"
    },
    {
      adminId: 0002,
      fullName: "User",
      email: "user@test.com",
      phone: 081234567890,
      gender: "female",
      age: 54,
      address: "Somewhere street on earth",
      country: "UK",
      state: "Birmingham"
    },
    {
      adminId: 0003,
      fullName: "Sample",
      email: "user@test.com",
      phone: 081234567890,
      gender: "male",
      age: 40,
      address: "Somewhere street on earth",
      country: "US",
      state: "California"
    }
  ];
  var userData = [
    {
      userId: 0001,
      firstName: "John",
      lastName: "Doe",
      email: "user@test.com",
      phone: 081234567890,
      gender: "male",
      age: 28,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    },
    {
      userId: 0002,
      firstName: "User",
      lastName: "Doe",
      email: "user@test.com",
      phone: 081234567890,
      gender: "female",
      age: 54,
      address: "Somewhere street on earth",
      country: "UK",
      state: "Birmingham",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    },
    {
      userId: 0003,
      firstName: "Sample",
      lastName: "User",
      email: "user@test.com",
      phone: 081234567890,
      gender: "male",
      age: 40,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    },
    {
      userId: 0004,
      firstName: "Example",
      lastName: "Usher",
      email: "user@test.com",
      phone: 081234567890,
      gender: "female",
      age: 34,
      address: "Somewhere street on earth",
      country: "ID",
      state: "Jakarta",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    },
    {
      userId: 0005,
      firstName: "Sample1",
      lastName: "User1",
      email: "user@test.com",
      phone: 081234567890,
      gender: "male",
      age: 52,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    },
    {
      userId: 0006,
      firstName: "Sample2",
      lastName: "User2",
      email: "user@test.com",
      phone: 081234567890,
      gender: "female",
      age: 22,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    }
  ];
  var roomData = [
    {
      roomId: 12345,
      roomName: "Group one",
      roomType: "Deluxe",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$ 700"
    },
    {
      roomId: 12345,
      roomName: "Group two",
      roomType: "Regular",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$ 300"
    },
    {
      roomId: 12345,
      roomName: "Group three",
      roomType: "Deluxe",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$ 700"
    },
    {
      roomId: 12345,
      roomName: "Group four",
      roomType: "First Class",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$ 1000"
    },
    {
      roomId: 12345,
      roomName: "Group five",
      roomType: "Business",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$ 500"
    }
  ];
  var bookingData = [
    {
      bookingId: 001,
      bookingDate: new Date(),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      name: "User",
      phone: 081234567890,
      email: "user@test.com",
      type: "Deluxe",
      description: "Plus extra bed",
      quantity: 3,
      price: "$ 700",
      payment: "transfer"
    },
    {
      bookingId: 002,
      bookingDate: new Date(),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      name: "User",
      phone: 081234567890,
      email: "user@test.com",
      type: "Deluxe",
      description: "Plus extra bed",
      quantity: 3,
      price: "$ 700",
      payment: "cash"
    },
    {
      bookingId: 003,
      bookingDate: new Date(),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      name: "User",
      phone: 081234567890,
      email: "user@test.com",
      type: "Deluxe",
      description: "Plus extra bed",
      quantity: 3,
      price: "$ 700",
      payment: "gateway"
    }
  ];
  res.render("home", {
    adminData: adminData,
    userData: userData,
    roomData: roomData,
    bookingData: bookingData
  });
});

module.exports = router;
