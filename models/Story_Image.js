const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story_Image extends Model {
    increaseVote(voteCnt) {
        return voteCnt + 1;
    }
}

Story_Image.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    story_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    attachment_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'story_image',
}
);

module.exports = Story_Image;
