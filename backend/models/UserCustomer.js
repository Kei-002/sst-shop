const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
// const Customer = require("./Customer");

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

User.hasOne(Customer);
Customer.belongsTo(User, { foreignKey: "user_id" });

(module.exports = User), Customer;
