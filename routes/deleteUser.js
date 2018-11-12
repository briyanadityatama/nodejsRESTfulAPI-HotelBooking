var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.User.destroy({
      where: {
        id: req.query.id
      }
    }).then(function() {
      res.redirect("/delete-user/:id");
    });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
