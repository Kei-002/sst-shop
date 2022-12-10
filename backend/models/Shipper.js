const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");

const Shipper = sequelize.define(
    "shippers",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        shipper_name: {
            type: Sequelize.DataTypes.STRING,
        },
        phone: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Shipper;
