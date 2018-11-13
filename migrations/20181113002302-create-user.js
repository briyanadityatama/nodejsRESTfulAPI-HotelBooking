"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("User", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identityId: {
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      identityType: {
        type: Sequelize.ENUM("ktp", "pasport", "sim")
      },
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: "compositeIndex"
      },
      lastName: {
        type: Sequelize.STRING(255),
        unique: "compositeIndex"
      },
      password: { type: Sequelize.STRING(100) },

      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: { isEmail: true },
        unique: true
      },
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
      dateCheckIn: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      dateCheckOut: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable("User");
  }
};
