const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model { }


Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monster: {
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
    weapons: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    },
    img_link: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    img_name: {
      type: DataTypes.STRING,
      allowNull: true
    }

  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: "character"
  }
)


module.exports = Character;