const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");

const Service = sequelize.define(
    "services",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        service_name: {
            type: Sequelize.DataTypes.STRING,
        },
        description: {
            type: Sequelize.DataTypes.STRING,
        },
        price: {
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

module.exports = Service;
