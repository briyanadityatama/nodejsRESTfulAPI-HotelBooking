var express = require("express");
var router = express.Router();
var models = require("../models");

router.post("/", function(req, res, next) {
  try {
    models.user
      .update(
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
            userId: req.body.userId,
            email: req.body.email
          }
        }
      )
      .then(function() {
        res.redirect("/update-user");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
