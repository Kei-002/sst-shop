const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");
const User = require("./User");
const Employee = sequelize.define(
    "employees",
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
User.hasOne(Employee);
Employee.belongsTo(User, { foreignKey: "user_id" });
module.exports = Employee;
