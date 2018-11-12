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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
