var express = require("express");
var path = require("path");
const exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var routes = require("./routes/index");
var createDataSeed = require("./routes/createDataSeed");
var viewUsers = require("./routes/viewUsers");
var viewRooms = require("./routes/viewRooms");
var viewAdmins = require("./routes/viewAdmins");
var deleteAdmin = require("./routes/deleteAdmin");
var deleteBooking = require("./routes/deleteBooking");
var deleteRoom = require("./routes/deleteRoom");
var deleteUser = require("./routes/deleteUser");
var updateAdmin = require("./routes/updateAdmin");
var updateBooking = require("./routes/updateBooking");
var updateRoom = require("./routes/updateRoom");
var updateUser = require("./routes/updateUser");

var app = express();

// view engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
app.use("/create-data", createDataSeed);
app.use("/view-users", viewUsers);
app.use("/view-rooms", viewRooms);
app.use("/view-admins", viewAdmins);
app.use("/delete-admin/:id", deleteAdmin);
app.use("/delete-booking/:id", deleteBooking);
app.use("/delete-room/:id", deleteRoom);
app.use("/delete-user/:id", deleteUser);
app.use("/update-admin/:email", updateAdmin);
app.use("/update-booking/:email", updateBooking);
app.use("/update-room/:roomId", updateRoom);
app.use("/update-user/:email", updateUser);

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
