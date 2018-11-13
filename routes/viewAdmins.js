var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", function(req, res, next) {
  try {
    // find All Admins data from "state" given input
    var query = {};
    if (req.query.state != undefined) {
      query.where = {
        state: req.query.state
      };
      models.Admin.findAll(query).then(function(admins) {
        res.render("viewaAdmins", { admins: admins, req: req });
      });

      // find an Admin data from "email" given input
    } else if (req.query.email != undefined) {
      query.where = {
        email: req.query.email
      };
      models.Admin.findOne(query).then(function(admin) {
        res.render("viewAdmins", { admins: [admin ? admin : {}], req: req });
      });
    } else {
      models.Admin.findAll({
        limit: 100
      }).then(function(admins) {
        res.render("view-admins", { admins: admins, req: req });
      });
    }
  } catch (e) {
    console.log(e.toString());
  }
});

module.exports = router;
