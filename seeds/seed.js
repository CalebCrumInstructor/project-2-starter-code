const sequelize = require('../config/connection');
const { User, Lore, Story } = require('../models');
// const { Lore } = require('../models');
// const { Story } = require('../models');

const userData = require('./userData.json');
const loreData = require('./loreData.json');
const storyData = require('./storyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const lore = await Lore.bulkCreate(loreData, {
    individualHooks: true,
    returning: true,
  });

  const story = await Story.bulkCreate(storyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
