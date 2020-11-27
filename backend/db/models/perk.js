"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Perk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Perk.belongsTo(models.Campaign, { foreignKey: "campaignId" });
      Perk.hasMany(models.Contribution, { foreignKey: "perkId" });
      Perk.hasMany(models.Item, { foreignKey: "perkId" });
    }
  }
  Perk.init(
    {
      visibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      perkImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantityAvailable: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Campaigns" },
      },
    },
    {
      sequelize,
      modelName: "Perk",
    }
  );
  return Perk;
};
