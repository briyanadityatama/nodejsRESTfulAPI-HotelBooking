"use strict";

module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define(
    "booking",
    {
      bookingId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      bookingDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      checkInDate: {
        type: DataTypes.DATE
      },
      checkOutDate: {
        type: DataTypes.DATE
      },
      name: {
        type: DataTypes.STRING(255)
      },
      phone: {
        type: DataTypes.INTEGER(20)
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: { isEmail: true },
        unique: true
      },
      type: {
        type: DataTypes.STRING(255)
      },
      description: {
        type: DataTypes.TEXT
      },
      quantity: {
        type: DataTypes.INTEGER(3)
      },
      price: {
        type: DataTypes.STRING(255)
      },
      payment: {
        type: DataTypes.ENUM("transfer", "cash", "gateway")
      }
    },
    {
      freezeTableName: true
    }
  );
  return Booking;
};
