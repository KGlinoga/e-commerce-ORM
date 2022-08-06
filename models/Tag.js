const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Diet extends Model {}

Diet.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      allowNull: false
    },
    tag_name: {
     type:DataTypes.STRING 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'diet'
  }
);

module.exports = Diet;
