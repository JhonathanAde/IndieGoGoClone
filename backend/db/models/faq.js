"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FAQ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FAQ.belongsTo(models.Content, { foreignKey: "contentId" });
    }
  }
  FAQ.init(
    {
      contentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Contents " },
      },
      questions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answers: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "FAQ",
    }
  );
  return FAQ;
};
