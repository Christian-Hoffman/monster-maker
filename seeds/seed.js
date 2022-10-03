const sequelize = require('../config/connection');
const { User, Character, Image } = require('../models');


const userData = require('./userData.json');
const charData = require('./charData.json');
const imgData = require("./imgData.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Character.bulkCreate(charData, {
    individualHooks: true,
    returning: true,
  })

  await Image.bulkCreate(imgData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();