"use strict";

module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define(
    "Room",
    {
      // roomId: {
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   allowNull: false,
      //   unique: true
      // },
      roomName: {
        type: DataTypes.STRING(255)
      },
      roomType: {
        type: DataTypes.STRING(255)
      },
      description: {
        type: DataTypes.STRING
      },
      imageURL: {
        type: DataTypes.STRING(2048)
      },
      quantity: {
        type: DataTypes.INTEGER(3)
      },
      price: {
        type: DataTypes.STRING(255)
      }
    },
    {
      freezeTableName: true
    }
  );

  Room.associate = function(models) {
    // Room belongsTo Booking
    Room.belongsTo(models.Booking, { foreignKey: "id" });
    Room.belongsTo(models.User, { foreignKey: "id" });
  };
  return Room;
};
