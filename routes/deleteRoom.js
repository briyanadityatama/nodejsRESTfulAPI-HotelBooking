var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    models.room
      .destroy({
        where: { roomId: req.query.roomId }
      })
      .then(function() {
        res.redirect("/delete-room/:id");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
