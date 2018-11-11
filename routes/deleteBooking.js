var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.booking
      .destroy({
        where: { email: req.query.email }
      })
      .then(function() {
        res.redirect("/view-bookings");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
