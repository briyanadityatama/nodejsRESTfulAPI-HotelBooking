var express = require("express");
var router = express.Router();
var models = require("../models");

router.post("/", function(req, res, next) {
  if (req.body.dataType === "user") {
    try {
      models.user
        .bulkCreate(JSON.parse(req.body.userData), { validate: true })
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
  } else if (req.body.dataType === "room") {
    try {
      models.room
        .bulkCreate(JSON.parse(req.body.roomData))
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
  } else if (req.body.dataType === "admin") {
    try {
      models.admin
        .bulkCreate(JSON.parse(req.body.adminData))
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
  } else if (req.body.dataType === "booking") {
    try {
      models.booking
        .bulkCreate(JSON.parse(req.body.bookingData))
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
