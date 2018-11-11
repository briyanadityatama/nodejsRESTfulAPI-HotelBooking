var express = require("express");
var router = express.Router();
var models = require("../models");

router.post("/", function(req, res, next) {
  try {
    models.room
      .update(
        {
          roomName: req.body.roomName,
          description: req.body.description,
          imageURL: req.body.imageURL,
          quantity: req.body.quantity,
          price: req.body.price
        },
        {
          where: {
            roomId: req.body.roomId,
            roomType: req.body.roomType
          }
        }
      )
      .then(function() {
        res.redirect("/update-room");
      });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
