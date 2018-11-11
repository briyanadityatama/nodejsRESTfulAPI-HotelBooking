var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.user
      .destroy({
        where: { userId: req.query.userId }
      })
      .then(function() {
        res.redirect("/delete-user/:id");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
