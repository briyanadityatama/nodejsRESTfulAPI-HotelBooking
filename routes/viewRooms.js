var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    var query = {};
    if (req.query.roomType != undefined) {
      query.where = {
        roomType: req.query.roomType
      };
      query.include = [
        {
          model: models.booking
        }
      ];
      models.room.findAll(query).then(function(rooms) {
        res.render("viewrooms", { rooms: rooms, req: req });
      });
    } else if (req.query.roomName != undefined) {
      query.where = {
        roomName: req.query.roomName
      };
      query.include = [
        {
          model: models.booking
        }
      ];
      models.room.findOne(query).then(function(room) {
        res.render("viewrooms", { rooms: [room ? room : {}], req: req });
      });
    } else {
      models.room
        .findAll({
          limit: 100,
          include: [
            {
              model: models.booking
            }
          ]
        })
        .then(function(rooms) {
          res.render("viewrooms", { rooms: rooms, req: req });
        });
    }
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
