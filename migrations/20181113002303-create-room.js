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
        type: Sequelize.STRING(255)
      },
      roomType: {
        type: Sequelize.STRING(255)
      },
      description: {
        type: Sequelize.STRING
      },
      imageURL: {
        type: Sequelize.STRING(2048)
      },
      quantity: {
        type: Sequelize.INTEGER(3)
      },
      price: {
        type: Sequelize.STRING(255)
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
