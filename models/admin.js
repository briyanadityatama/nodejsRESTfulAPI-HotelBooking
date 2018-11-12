"use strict";

const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define(
    "Admin",
    {
      // adminId: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "compositeIndex"
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: { isEmail: true },
        unique: true
      },
      password: { type: DataTypes.STRING(100) },
      phone: {
        type: DataTypes.INTEGER(20)
      },
      gender: {
        type: DataTypes.ENUM("male", "female")
      },
      age: {
        type: DataTypes.INTEGER(3),
        validate: { max: 999, min: 18 }
      },
      address: {
        type: DataTypes.TEXT
      },
      country: {
        type: DataTypes.STRING(255)
      },
      state: {
        type: DataTypes.STRING(255)
      },
      isActive: { type: DataTypes.INTEGER, defaultValue: 1 }
    },
    {
      freezeTableName: true,
      getterMethods: {
        address: function() {
          return this.state + ", " + this.country;
        }
      },
      setterMethods: {
        address: function(value) {
          var names = value.split(", ");
          this.setDataValue("country", names[0]);
          this.setDataValue("state", names[1]);
        }
      }
    }
  );

  Admin.afterValidate(admin => {
    if (admin.password) {
      admin.password = bcrypt.hashSync(admin.password, bcrypt.genSaltSync(10));
    }
    return admin;
  });
  return Admin;
};
