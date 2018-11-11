var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.room
      .destroy({
        where: { roomType: req.query.roomType }
      })
      .then(function() {
        res.redirect("/view-rooms");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
