var express = require("express");
var router = express.Router();
var models = require("../models");

// Update User data findBy emails
router.put("/", function(req, res, next) {
  try {
    models.User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        address: req.body.address,
        country: req.body.country,
        state: req.body.state
      },
      {
        where: {
          email: req.body.email
        }
      }
    ).then(function() {
      res.redirect("/update-user/:email");
    });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
