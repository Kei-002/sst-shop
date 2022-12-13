const { Sequelize, Model } = require("sequelize");
const sequelize = require("../con_sequelize");
const Customer = require("./Customer");
const User = require("./User");

// class User extends Model {}

const Account = sequelize.define(
    "accounts",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
        account_id: {
            type: Sequelize.DataTypes.STRING,
        },
        provider: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: false,
        // createdAt: "created_at",
        // updatedAt: "updated_at",
    }
);

Account.associate = function (models) {
    Customer.belongsTo(User, {
        foreignKey: "user_id",
    });
    User.hasMany(Account, {
        foreignKey: "user_id",
    });
    Account.belongsTo(User, {
        foreignKey: "user_id",
    });
};

module.exports = Account;
