"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Admin", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: "compositeIndex"
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: { isEmail: true },
        unique: true
      },
      password: { type: Sequelize.STRING(100) },
      phone: {
        type: Sequelize.INTEGER(20)
      },
      gender: {
        type: Sequelize.ENUM("male", "female")
      },
      age: {
        type: Sequelize.INTEGER(3),
        validate: { max: 999, min: 18 }
      },
      address: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.STRING(255)
      },
      state: {
        type: Sequelize.STRING(255)
      },
      isActive: { type: Sequelize.INTEGER, defaultValue: 1 },
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
    return queryInterface.dropTable("Admin");
  }
};
