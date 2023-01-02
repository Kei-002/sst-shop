const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
const Item = require("./Item");

const Stock = sequelize.define(
    "stocks",
    {
        item_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
        quantity: {
            type: Sequelize.DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

Item.hasOne(Stock, {
    foreignKey: "item_id",
});
Stock.belongsTo(Item, { foreignKey: "item_id" });

module.exports = Item;
