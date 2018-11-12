var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    var query = {};

    // find All Users data & Bookings data from "state" given input
    if (req.query.state != undefined) {
      query.where = {
        state: req.query.state
      };
      query.include = [
        {
          model: models.Booking
        }
      ];
      models.User.findAll(query).then(function(users) {
        res.render("viewUsers", { users: users, req: req });
      });

      // find an User data and/or an Booking data from "email" given input
    } else if (req.query.email != undefined) {
      query.where = {
        email: req.query.email
      };
      query.include = [
        {
          model: models.Booking
        }
      ];
      models.User.findOne(query).then(function(user) {
        res.render("viewUsers", { users: [user ? user : {}], req: req });
      });
    } else {
      models.User.findAll({
        limit: 100,
        include: [
          {
            model: models.Booking
          }
        ]
      }).then(function(users) {
        res.render("view-users", { users: users, req: req });
      });
    }
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
