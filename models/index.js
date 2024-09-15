const User = require('./User');
const Lore = require('./Lore');
const Story = require('./Story');
const Story_Image = require('./Story_Image');
const Review = require('./Review');

//Foreign key reference. User is the parent table. Story is the child table. On delete, set story.user_id to null.
User.hasMany(Story, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',
});

Story.belongsTo(User);

//Foreign key reference. Story is the parent table. Story_image is the child table. On delete of story, delete the story_images.
Story.hasMany(Story_Image, {
    foreignKey: 'story_id',
    onDelete: 'CASCADE',
});

Story_Image.belongsTo(Story);

//Foreign key reference. Story is the parent table. Review is the child table. On delete of story, delete the reviews.
Story.hasMany(Review, {
    foreignKey: 'story_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Story);






module.exports = { User, Lore, Story, Story_Image, Review };
