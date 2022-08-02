const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      null:false,
      primaryKey: true,
      auto_increment:true
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
    modelName: 'tag',
  }
);

module.exports = Tag;
