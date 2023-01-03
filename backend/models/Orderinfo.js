const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
const Customer = require("./Customer");
const Item = require("./Item");
const Shipper = require("./Shipper");

const Orderinfo = sequelize.define(
    "orderinfo",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        customer_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
        date_shipped: {
            type: Sequelize.DataTypes.DATE,
        },
        shipper_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
        status: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
    }
);

Orderinfo.belongsTo(Customer, {
    foreignKey: "customer_id",
});

Orderinfo.belongsTo(Shipper, {
    foreignKey: "shipper_id",
});

module.exports = Orderinfo;
