"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contributions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      campaignId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Campaigns" },
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      perkId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Perks" },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      visibility: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Contributions");
  },
};
