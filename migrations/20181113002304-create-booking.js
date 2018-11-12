"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Booking", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      state: {
        type: DataTypes.STRING(255)
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
    return queryInterface.dropTable("Booking");
  }
};
