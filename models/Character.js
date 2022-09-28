const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}


Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    character_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false, 
    modelName: "character"
  }
)


module.exports = Character;