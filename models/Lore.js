const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lore extends Model {
    increaseVote(voteCnt) {
        return voteCnt + 1;
    }
}

Lore.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [256],
        },
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    upvote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
        },
    },
    source: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [500],
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'lore',
}
);

module.exports = Lore;
