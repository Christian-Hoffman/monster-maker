const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our CharWeapon model
class CharWeapon extends Model {}

// create fields/columns for CharWeapon model
CharWeapon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id',
        unique: false
      }
    },
    weapon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'weapon',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'CharWeapon'
  }
);

module.exports = CharWeapon;
