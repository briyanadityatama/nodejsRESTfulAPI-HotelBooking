var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  var adminData = [
    {
      fullName: "John",
      email: "user@test.com",
      password: "A234",
      phone: 081234567890,
      gender: "male",
      age: 28,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      isActive: 1
    },
    {
      fullName: "User",
      email: "user@test.com",
      password: "B234",
      phone: 081234567890,
      gender: "female",
      age: 54,
      address: "Somewhere street on earth",
      country: "UK",
      state: "Birmingham",
      isActive: 1
    },
    {
      fullName: "Sample",
      email: "user@test.com",
      password: "c234",
      phone: 081234567890,
      gender: "male",
      age: 40,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      isActive: 1
    }
  ];
  var userData = [
    {
      identityId: 99887766554433,
      identityType: "sim",
      firstName: "John",
      lastName: "Doe",
      password: "qwerty123",
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
      identityId: 1234567890,
      identityType: "pasport",
      firstName: "User",
      lastName: "Doe",
      password: "qwerty123",
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
      identityId: 33334445556667788,
      identityType: "ktp",
      firstName: "Sample",
      lastName: "User",
      password: "qwerty123",
      email: "user@test.com",
      phone: 081234567890,
      gender: "male",
      age: 40,
      address: "Somewhere street on earth",
      country: "US",
      state: "California",
      dateCheckIn: new Date(),
      dateCheckOut: new Date()
    }
  ];
  var roomData = [
    {
      roomName: "Group one",
      roomType: "Deluxe",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$700"
    },
    {
      roomName: "Group two",
      roomType: "Regular",
      description: "Facilities Given",
      imageURL: "",
      quantity: 3,
      price: "$300"
    }
  ];
  var bookingData = [
    {
      bookingDate: new Date(),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      name: "User",
      phone: 081234567890,
      state: "US",
      email: "user@test.com",
      type: "Deluxe",
      description: "Plus extra bed",
      quantity: 3,
      price: "$700",
      payment: "transfer"
    },
    {
      bookingDate: new Date(),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      name: "User",
      phone: 081234567890,
      state: "US",
      email: "user@test.com",
      type: "Deluxe",
      description: "Plus extra bed",
      quantity: 3,
      price: "$700",
      payment: "cash"
    },
    {
      bookingDate: new Date(),
      checkInDate: new Date(),
      checkOutDate: new Date(),
      name: "User",
      phone: 081234567890,
      state: "US",
      email: "user@test.com",
      type: "Deluxe",
      description: "Plus extra bed",
      quantity: 3,
      price: "$700",
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
