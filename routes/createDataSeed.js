var express = require("express");
var router = express.Router();
var models = require("../models");

router.post("/", function(req, res, next) {
  if (req.body.dataType === "Admin") {
    try {
      // models.Admin.create(req.body.adminData)
      models.Admin.bulkCreate(JSON.parse(req.body.adminData))
        .then(function() {
          res.send(
            "Admin data seed created. You can now close this tab & check your DB."
          );
        })
        .catch(function(errors) {
          res.send("Following error occured: <br/>", errors);
        });
    } catch (e) {
      console.log(e.toString());
    }
  } else if (req.body.dataType === "User") {
    try {
      // models.User.create(req.body.userData)
      models.User.bulkCreate(JSON.parse(req.body.userData), { validate: true })
        .then(function() {
          res.send(
            "User data seed created. You can now close this tab & check your DB."
          );
        })
        .catch(function(errors) {
          res.send("Following error occured: <br/>", errors);
        });
    } catch (e) {
      console.log(e.toString());
    }
  } else if (req.body.dataType === "Room") {
    try {
      // models.Room.create(req.body.roomData)
      models.Room.bulkCreate(JSON.parse(req.body.roomData))
        .then(function() {
          res.send(
            "Room data seed created. You can now close this tab & check your DB."
          );
        })
        .catch(function(errors) {
          res.send("Following error occured: <br/>", errors);
        });
    } catch (e) {
      console.log(e.toString());
    }
  } else if (req.body.dataType === "Booking") {
    try {
      // models.Booking.create(req.body.bookingData)
      models.Booking.bulkCreate(JSON.parse(req.body.bookingData))
        .then(function() {
          res.send(
            "Booking data seed created. You can now close this tab & check your DB."
          );
        })
        .catch(function(errors) {
          res.send("Following error occured: <br/>", errors);
        });
    } catch (e) {
      console.log(e.toString());
    }
  }
});

module.exports = router;
