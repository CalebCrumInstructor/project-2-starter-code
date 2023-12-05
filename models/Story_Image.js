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
    content: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
},
{
    // hooks: {
    //     beforeCreate: async (newLoreData) => {
    //     newLoreData.upvotes = 0;
    //     return newUserData;
    //     },
    //     // beforeUpdate: async (updatedUserData) => {
    //     // updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //     // return updatedUserData;
    //     // },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'story_image',
}
);

module.exports = Story_Image;
