const { Sequelize, Model } = require("sequelize");
const sequelize = require("../con_sequelize");
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
        remember_token: {
            allowNull: true,
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

// User.init(
//     {
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: Sequelize.DataTypes.INTEGER,
//         },
//         email: {
//             unique: true,
//             type: Sequelize.DataTypes.STRING,
//         },
//         password: {
//             type: Sequelize.DataTypes.STRING,
//         },
//         role: {
//             type: Sequelize.DataTypes.STRING,
//         },
//         remember_token: {
//             allowNull: true,
//             type: Sequelize.DataTypes.STRING,
//         },
//     },
//     {
//         // Other model options go here
//         sequelize, // We need to pass the connection instance
//         modelName: "users", // We need to choose the model name
//         timestamps: true,
//         createdAt: "created_at",
//         updatedAt: "updated_at",
//     }
// );

User.associate = function (models) {
    User.hasOne(Customer, {
        foreignKey: "user_id",
    });
};

module.exports = User;
