var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.Booking.destroy({
      where: {
        id: req.query.id
      }
    }).then(function() {
      res.redirect("/delete-booking/:id");
    });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
