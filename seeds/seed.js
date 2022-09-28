const sequelize = require('../config/connection');
const { User, Character, Weapon } = require('../models');


const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Character.bulkCreate([{name: "Something", character_type: "Something", description: "Something", health: 45,}], {
    individualHooks: true,
    returning: true, 
  })
  await Weapon.bulkCreate([{name: "Something", damage: 8324}], {
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
