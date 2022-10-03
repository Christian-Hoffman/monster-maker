const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Images extends Model{}

Images.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncroment: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.STRING,
      allowNull:false
    },
    caracter_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "character",
        key: "id"
      }
    },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'images',
  }
);


module.exports = Images

