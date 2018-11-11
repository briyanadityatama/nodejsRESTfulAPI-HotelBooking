var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.admin
      .destroy({
        where: {
          id: req.query.adminId
        }
      })
      .then(function() {
        res.redirect("/delete-admin/:id");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
