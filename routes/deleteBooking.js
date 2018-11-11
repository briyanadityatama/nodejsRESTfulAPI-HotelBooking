var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.booking
      .destroy({
        where: { bookingId: req.query.email }
      })
      .then(function() {
        res.redirect("/delete-booking/:id");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
