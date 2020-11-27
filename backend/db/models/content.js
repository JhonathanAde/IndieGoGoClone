"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.belongsTo(models.Campaign, { foreignKey: "campaignId" });
      Content.hasMany(models.FAQ, { foreignKey: "contentId" });
    }
  }
  Content.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Campaigns" },
      },
      overlay: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      story: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Content",
    }
  );
  return Content;
};
