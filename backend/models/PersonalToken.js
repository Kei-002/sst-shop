const Sequelize = require("sequelize");
const sequelize = require("../con_sequelize");

const PersonalToken = sequelize.define(
    "personal_access_tokens",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER,
        },
        tokenable_type: {
            type: Sequelize.DataTypes.STRING,
        },
        tokenable_id: {
            type: Sequelize.DataTypes.INTEGER,
        },
        name: {
            type: Sequelize.DataTypes.STRING,
        },
        token: {
            type: Sequelize.DataTypes.STRING,
        },
        abilities: {
            type: Sequelize.DataTypes.STRING,
        },
        last_used_at: {
            type: Sequelize.DataTypes.DATE,
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = PersonalToken;
