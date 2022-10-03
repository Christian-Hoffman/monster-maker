const User = require('./User');
const Character = require('./Character');
const Images = require('./images');



User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
})

// TODO: ADD RELATIONSHIPS
Character.belongsTo(User, {
  foreignKey: "user_id"
})

Images.belongsTo(Character, {
  foreignKey: "character_id"
})




module.exports = { User, Character };
