"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Perk, { foreignKey: "perkId" });
    }
  }
  Item.init(
    {
      perkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Perks" },
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
