var express = require("express");
var router = express.Router();
var models = require("../models");

router.post("/", function(req, res, next) {
  try {
    if (checkInDate.req.checkInDate == Date.now) {
      throw console.error(
        "Your Check In Date is too close, you can't update your Booking! "
      );
    }
    models.booking
      .update(
        {
          checkInDate: req.body.checkInDate,
          checkOutDate: req.body.checkOutDate,
          name: req.body.name,
          phone: req.body.phone,
          description: req.body.description,
          quantity: req.body.quantity
        },
        {
          where: { email: req.body.email }
        }
      )
      .then(function() {
        res.redirect("/view-bookings");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
