const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story extends Model {
    increaseVote(voteCnt) {
        return voteCnt + 1;
    }
}

Story.init(
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
    },
    content: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    upvote: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
            min: 0,
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},
 {
//     hooks: {
//         beforeCreate: async (newLoreData) => {
//         newLoreData.upvotes = 0;
//         return newUserData;
//         },
//         // beforeUpdate: async (updatedUserData) => {
//         // updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
//         // return updatedUserData;
//         // },
//   },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'story',
}
);

module.exports = Story;
