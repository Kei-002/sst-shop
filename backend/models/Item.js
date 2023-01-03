const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
const Category = require("./Category");
const Stock = require("./Stock");

const Item = sequelize.define(
    "items",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        item_name: {
            type: Sequelize.DataTypes.STRING,
        },
        description: {
            type: Sequelize.DataTypes.STRING,
        },
        category_id: {
            type: Sequelize.DataTypes.STRING,
        },
        cost_price: {
            type: Sequelize.DataTypes.DECIMAL(8, 2),
        },
        sell_price: {
            type: Sequelize.DataTypes.DECIMAL(8, 2),
        },
        img_path: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

// Item.associate = function (models) {
    // Stock.belongsTo(Item, {
    //     foreignKey: "item_id",
    // });
    Item.belongsTo(Category, {
        foreignKey: "category_id",
    });
    // Category.belongsTo(models.Item, {
    //     foreignKey: "category_id",
    // });
    // Item.hasOne(models.Stock, {
    //     foreignKey: "item_id",
    // });
// };
// Item.hasOne(Stock, {
//     foreignKey: "item_id",
// });
// Stock.belongsTo(Item, { foreignKey: "item_id" });

module.exports = Item;
