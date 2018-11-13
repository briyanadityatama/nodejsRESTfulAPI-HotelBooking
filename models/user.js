"use strict";

const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      // userId: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      identityId: {
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      identityType: {
        type: DataTypes.ENUM("ktp", "pasport", "sim")
      },
      firstName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "compositeIndex"
      },
      lastName: {
        type: DataTypes.STRING(255),
        unique: "compositeIndex"
      },
      password: { type: DataTypes.STRING(100) },

      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: { isEmail: true },
        unique: true
      },
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
      dateCheckIn: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      dateCheckOut: {
        type: DataTypes.DATE
      }
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

  User.afterValidate(user => {
    if (user.password) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    }
    return user;
  });

  User.associate = function(models) {
    // User hasMany Booking
    User.hasMany(models.Booking);
  };
  return User;
};
