const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      null: false,
      primaryKey: true,
      auto_increment: true,
    },
     category_name: {
      type:DataTypes.STRING,
      null: false
     }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
