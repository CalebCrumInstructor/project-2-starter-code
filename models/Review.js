const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {
    increaseVote(voteCnt) {
        return voteCnt + 1;
    }
}

Review.init(
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
}
);

module.exports = Review;
