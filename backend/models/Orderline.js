const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
const Customer = require("./Customer");
const Item = require("./Item");
const Orderinfo = require("./Orderinfo");
const Shipper = require("./Shipper");

const Orderline = sequelize.define(
    "orderline",
    {
        // id: {
        //     autoIncrement: true,
        //     primaryKey: true,
        //     type: Sequelize.DataTypes.INTEGER,
        // },
        orderinfo_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
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

Orderline.belongsToMany(Orderinfo, {
    foreignKey: "orderinfo_id",
});

module.exports = Orderinfo;
