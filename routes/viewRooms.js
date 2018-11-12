var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    // find All Rooms data and / or Bookings data from "roomType" given input
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
        res.render("viewRooms", { rooms: rooms, req: req });
      });

      // find an Rooms data and / or Bookings data from "roomName" given input
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
        res.render("viewRooms", { rooms: [room ? room : {}], req: req });
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
          res.render("view-rooms", { rooms: rooms, req: req });
        });
    }
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
