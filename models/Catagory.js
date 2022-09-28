const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model{}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },
  {
    sequelize,
    underscored: true,
    modelName: "category"
  }
)