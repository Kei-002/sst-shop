const { Sequelize, Model } = require("sequelize");
const sequelize = require("../con_sequelize");
const Account = require("./Account");
const Customer = require("./Customer");

// class User extends Model {}

const User = sequelize.define(
    "users",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        email: {
            unique: true,
            type: Sequelize.DataTypes.STRING,
        },
        password: {
            type: Sequelize.DataTypes.STRING,
        },
        role: {
            type: Sequelize.DataTypes.STRING,
        },
        confirmed: {
            type: Sequelize.DataTypes.BOOLEAN,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

// User.associate = function (models) {
//     User.hasOne(Customer, {
//         foreignKey: "user_id",
//     });
//     Customer.belongsTo(User);
//     Account.belongsTo(User);
// };

User.hasOne(Customer, {
    foreignKey: "user_id",
});
Customer.belongsTo(User, { foreignKey: "user_id" });

module.exports = User;
