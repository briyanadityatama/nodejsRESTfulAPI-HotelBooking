var express = require("express");
var router = express.Router();
var models = require("../models");

// Update Admin data findBy emails
router.put("/", function(req, res, next) {
  try {
    models.Admin.update(
      {
        fullName: req.body.fullName,
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
      res.redirect("/update-admin/:email");
    });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
