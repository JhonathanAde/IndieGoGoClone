"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Campaign.hasMany(models.Perk, { foreignKey: "campaignId" });
      Campaign.hasMany(models.Contribution, { foreignKey: "campaignId" });
      Campaign.hasOne(models.Content, { foreignKey: "campaignId" });
    }
  }
  Campaign.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cardImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Campaign",
    }
  );
  return Campaign;
};
