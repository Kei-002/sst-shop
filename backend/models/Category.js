const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
const Item = require("./Item");

const Category = sequelize.define(
    "categories",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        category_name: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

// Item.hasOne(Category, {
//     foreignKey: "category_id",
// });
// Category.belongsTo(Item, { foreignKey: "category_id" });
// Category.associate = function (models) {
// Category.hasOne(models.Item, {
//     foreignKey: "category_id",
// });
// Item.belongsTo(Category, {
//     foreignKey: "category_id",
// });
// };

module.exports = Category;
