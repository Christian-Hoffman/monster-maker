const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Weapon extends Model{}

Weapon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    damage: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    character_id: {
      references: {
        model: "character",
        key: "id"
      }
    }
  },
  {
    sequelize, 
    underscored: true,
    modelName: "weapon",
  }
)