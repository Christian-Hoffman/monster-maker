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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id : {
      references:{
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize,
    underscored: true,
    modelName: "character"
  }
)


module.exports = Character;