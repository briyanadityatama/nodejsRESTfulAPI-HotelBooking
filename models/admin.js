"use strict";

module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define(
    "admin",
    {
      adminId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
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
      phone: {
        type: DataTypes.INTEGER(20)
      },
      gender: {
        type: DataTypes.ENUM("male", "female")
      },
      age: {
        type: DataTypes.INTEGER(3),
        validate: { max: 55, min: 18 }
      },
      address: {
        type: DataTypes.TEXT
      },
      country: {
        type: DataTypes.STRING(255)
      },
      state: {
        type: DataTypes.STRING(255)
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
  return Admin;
};
