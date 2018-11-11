var express = require("express");
var router = express.Router();
var models = require("../models");

router.post("/", function(req, res, next) {
  try {
    models.admin
      .update(
        {
          fullName: req.body.fullName,
          phone: req.body.phone,
          address: req.body.address,
          country: req.body.country,
          state: req.body.state
        },
        {
          where: {
            adminId: req.body.adminId,
            email: req.body.email
          }
        }
      )
      .then(function() {
        res.redirect("/update-admin");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
