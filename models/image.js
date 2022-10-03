const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model{}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.STRING,
      allowNull:false
    },
    title:{
      type: DataTypes.STRING, 
      allowNull: false
    },
    character_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "character",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);


module.exports = Image;

