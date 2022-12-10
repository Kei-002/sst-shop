const { Sequelize, Model } = require("sequelize");
const sequelize = require("../con_sequelize");
const User = require("./User");

// class Customer extends Model {}
// const User = sequelize.define(
//     "users",
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
//         timestamps: true,
//         createdAt: "created_at",
//         updatedAt: "updated_at",
//     }
// );

const Customer = sequelize.define(
    "customers",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
        fname: {
            type: Sequelize.DataTypes.STRING,
        },
        lname: {
            type: Sequelize.DataTypes.STRING,
        },
        addressline: {
            type: Sequelize.DataTypes.STRING,
        },
        phone: {
            type: Sequelize.DataTypes.STRING,
        },
        img_path: {
            type: Sequelize.DataTypes.STRING,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

// Customer.init(
//     {
//         id: {
//             autoIncrement: true,
//             primaryKey: true,
//             type: Sequelize.DataTypes.INTEGER,
//         },
//         user_id: {
//             type: Sequelize.DataTypes.INTEGER,
//         },
//         fname: {
//             type: Sequelize.DataTypes.STRING,
//         },
//         lname: {
//             type: Sequelize.DataTypes.STRING,
//         },
//         addressline: {
//             type: Sequelize.DataTypes.STRING,
//         },
//         phone: {
//             type: Sequelize.DataTypes.STRING,
//         },
//         img_path: {
//             type: Sequelize.DataTypes.STRING,
//         },
//     },
//     {
//         // Other model options go here
//         sequelize, // We need to pass the connection instance
//         modelName: "customers", // We need to choose the model name
//         timestamps: true,
//         createdAt: "created_at",
//         updatedAt: "updated_at",
//     }
// );

// User.hasOne(Customer);
// Customer.belongsTo(User, { foreignKey: "user_id" });
Customer.associate = function (models) {
    Customer.belongsTo(User, {
        foreignKey: "user_id",
    });
};
module.exports = Customer;
