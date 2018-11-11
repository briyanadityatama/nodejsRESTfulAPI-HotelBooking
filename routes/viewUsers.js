var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    var query = {};
    if (req.query.state != undefined) {
      query.where = {
        state: req.query.state
      };
      query.include = [
        {
          model: models.booking
        }
      ];
      models.user.findAll(query).then(function(users) {
        res.render("viewUsers", { users: users, req: req });
      });
    } else if (req.query.email != undefined) {
      query.where = {
        email: req.query.email
      };
      query.include = [
        {
          model: models.booking
        }
      ];
      models.user.findOne(query).then(function(user) {
        res.render("viewUsers", { users: [user ? user : {}], req: req });
      });
    } else {
      models.user
        .findAll({
          limit: 100,
          include: [
            {
              model: models.booking
            }
          ]
        })
        .then(function(users) {
          res.render("viewUsers", { users: users, req: req });
        });
    }
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
