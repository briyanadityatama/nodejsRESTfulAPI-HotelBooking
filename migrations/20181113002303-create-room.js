"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Room", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Room");
  }
};
