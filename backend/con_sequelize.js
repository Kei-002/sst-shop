const Sequelize = require("sequelize");

const sequelize = new Sequelize("sst-shop_db", "root", "", {
    dialect: "mysql",
});

module.exports = sequelize;
