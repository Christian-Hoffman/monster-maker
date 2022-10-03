const User = require('./User');
const Character = require('./Character');
const Image = require('./image');



User.hasMany(Character, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

// TODO: ADD RELATIONSHIPS
Character.belongsTo(User, {
  foreignKey: "user_id"
});

Character.hasMany(Image, {
  foreignKey: "character_id",
  onDelete: "CASCADE"
});

Image.belongsTo(Character, {
  foreignKey: "character_id"
});




module.exports = { User, Character, Image };
