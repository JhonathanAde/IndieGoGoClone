"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contribution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contribution.hasMany(models.Comment, { foreignKey: "contributionId" });
      Contribution.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Contribution.init(
    {
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Campaigns" },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      perkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Perks" },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      visibility: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
    },
    {
      sequelize,
      modelName: "Contribution",
    }
  );
  return Contribution;
};
