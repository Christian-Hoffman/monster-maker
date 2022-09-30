const sequelize = require('../config/connection');
const { User, Character, Weapon } = require('../models');


const userData = require('./userData.json');
const charData = require('./charData.json');


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

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
