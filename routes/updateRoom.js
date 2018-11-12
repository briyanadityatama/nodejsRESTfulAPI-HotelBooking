var express = require("express");
var router = express.Router();
var models = require("../models");

// Update Room data findBy id
router.put("/", function(req, res, next) {
  try {
    models.Room.update(
      {
        roomName: req.body.roomName,
        description: req.body.description,
        imageURL: req.body.imageURL,
        quantity: req.body.quantity,
        price: req.body.price
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function() {
      res.redirect("/update-room/:roomId");
    });
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
