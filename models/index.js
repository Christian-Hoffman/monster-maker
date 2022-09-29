const User = require('./User');
const Character = require('./Character');
const Weapon = require('./Weapon');
const CharWeapon = require("./CharWeapon")


User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
})

// TODO: ADD RELATIONSHIPS
Character.belongsTo(User, {
  foreignKey: "user_id"
})

Character.hasOne(Weapon, {
  through: {
    model: CharWeapon,
    unique: false, 
  }
})

Weapon.belongsToMany(Character, {
  through: {
    model: CharWeapon,
    unique: false,
  }
})


module.exports = { User, Character, Weapon };
