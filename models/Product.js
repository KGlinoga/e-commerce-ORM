// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      null: false,
      primarykey: true,
      auto_increment: true,
    },
    product_name: {
      type:DataTypes.STRING,
      null: false
    },
    price: {
      type:DataTypes.FLOAT,
      null: false
      // TODO: validates the value is a DECIMAL
    },
    stock: {
      type:DataTypes.INTEGER,
      null: false;
      default:10
      // TODO: validates the value is NUMERIC
    },
    category_id: {
      type:DataTypes.INTEGER
      // TODO: References the category model's id 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
