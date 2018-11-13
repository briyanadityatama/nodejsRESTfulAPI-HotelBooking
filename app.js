var express = require("express");
var path = require("path");
// const exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

const Admin = require("./models").Admin;
const User = require("./models").User;
const Booking = require("./models").Booking;
const Room = require("./models").Room;

// var routes = require("./routes/index");
// var createDataSeed = require("./routes/createDataSeed");
// var viewUsers = require("./routes/viewUsers");
// var viewRooms = require("./routes/viewRooms");
// var viewAdmins = require("./routes/viewAdmins");
// var deleteAdmin = require("./routes/deleteAdmin");
// var deleteBooking = require("./routes/deleteBooking");
// var deleteRoom = require("./routes/deleteRoom");
// var deleteUser = require("./routes/deleteUser");
// var updateAdmin = require("./routes/updateAdmin");
// var updateBooking = require("./routes/updateBooking");
// var updateRoom = require("./routes/updateRoom");
// var updateUser = require("./routes/updateUser");

var app = express();

// view engine setup
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", routes);
// app.use("/create-data", createDataSeed);
// app.use("/view-users", viewUsers);
// app.use("/view-rooms", viewRooms);
// app.use("/view-admins", viewAdmins);
// app.use("/delete-admin/:id", deleteAdmin);
// app.use("/delete-booking/:id", deleteBooking);
// app.use("/delete-room/:id", deleteRoom);
// app.use("/delete-user/:id", deleteUser);
// app.use("/update-admin/:email", updateAdmin);
// app.use("/update-booking/:email", updateBooking);
// app.use("/update-room/:roomId", updateRoom);
// app.use("/update-user/:email", updateUser);

// ==========================================================================

// Routes

// Create Admin
app.post("/admins", (req, res) => {
  Admin.create(req.body.Admin).then(() => res.redirect("/"));
});

// View All Admin
app.get("/admins", (req, res) => {
  Admin.findAll(req.body.Admin).then(() => res.json(req.body.Admin));
});

// // View All User Booking Data
// app.get("/", (req, res) => {
//   User.findAll({
//     include: [Booking, Room]
//   }).then(users => {
//     res.render("index", { users: users });
//   });
// });

// Create User
app.post("/createUser", (req, res) => {
  User.create(req.body).then(() => res.redirect("/"));
});

// View All User
app.get("/viewUsers", (req, res) => {
  User.findAll(req.body).then(() => res.redirect("/"));
});

// Create Booking
app.post("/createBooking", (req, res) => {
  Booking.create(req.body).then(() => res.redirect("/"));
});

// View All Booking
app.get("/viewBookings", (req, res) => {
  Booking.findAll(req.body).then(() => res.redirect("/"));
});

// Create Booking from UserID
app.post("/booking/:user_id", (req, res) => {
  Booking.create({ ...req.body, id: req.params.id }).then(() =>
    res.redirect("/")
  );
});

// Booked Room from BookingID
app.post("/room/:booking_id", (req, res) => {
  Room.create({ ...req.body, id: req.params.id }).then(() => res.redirect("/"));
});

// Create Room
app.post("/rooms", (req, res) => {
  Room.create(req.body).then(() => res.redirect("/"));
});

// View All Room
app.get("/rooms", (req, res) => {
  Room.findAll(req.body).then(() => res.redirect("/"));
});

// ===========================================================================

// Seed Data

// Create Admin
app.post("/admins/1", (req, res) => {
  Admin.create({
    fullName: "John",
    email: "user@test.com",
    password: "A234",
    phone: "081234567890",
    gender: "male",
    age: 28,
    address: "Somewhere street on earth",
    country: "US",
    state: "California",
    isActive: 1
  }).then(() => {
    res.send("Admin Data Received, please check your DB");
    res.json(req.body.Admin);
  });
});

// Create User
app.post("/users/1", (req, res) => {
  User.create({
    identityId: "333344467788",
    identityType: "ktp",
    firstName: "Sample",
    lastName: "User",
    password: "qwerty123",
    email: "user@test.com",
    phone: "081234567890",
    gender: "male",
    age: 40,
    address: "Somewhere street on earth",
    country: "US",
    state: "California",
    dateCheckIn: new Date(),
    dateCheckOut: new Date()
  }).then(() => res.send("User Data Received, please check your DB"));
});

// Create Room
app.post("/rooms/1", (req, res) => {
  Room.create({
    roomName: "Group one",
    roomType: "Deluxe",
    description: "Facilities Given",
    imageURL: "",
    quantity: 3,
    price: "$700"
  }).then(() => res.send("Room Data Received, please check your DB"));
});

// Create Booking
app.post("/createBooking", (req, res) => {
  Booking.create({
    bookingDate: new Date(),
    checkInDate: new Date(),
    checkOutDate: new Date(),
    name: "User",
    phone: "081234567890",
    state: "US",
    email: "user@test.com",
    type: "Deluxe",
    description: "Plus extra bed",
    quantity: 3,
    price: "$700",
    payment: "transfer"
  }).then(() => res.send("Booking Data Received, please check your DB"));
});

// Create Users & Booking
// User.create({
//   identityId: 99887766554433,
//   identityType: "sim",
//   firstName: "John",
//   lastName: "Doe",
//   password: "qwerty123",
//   email: "user@test.com",
//   phone: 081234567890,
//   gender: "male",
//   age: 28,
//   address: "Somewhere street on earth",
//   country: "US",
//   state: "California",
//   dateCheckIn: new Date(),
//   dateCheckOut: new Date()
// }).then(user => {
// 	user.createBooking({
//     bookingDate: new Date(),
//     checkInDate: new Date(),
//     checkOutDate: new Date(),
//     name: "User",
//     phone: 081234567890,
//     state: "US",
//     email: "user@test.com",
//     type: "Deluxe",
//     description: "Plus extra bed",
//     quantity: 3,
//     price: "$700",
//     payment: "transfer"
//   }).then(() => console.log('Worked!'));
// });

// User.findAll({
// 	include: [Booking]
// }).then(users => {
// 	console.log(users[0].Bookings);
// });

//  ======================================================================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

module.exports = app;
