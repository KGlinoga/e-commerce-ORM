const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      null:false,
      primaryKey: true,
      auto_increment:true
    },
    product_id: {
      type:DataTypes.INTEGER,
      // TODO: References the PRODUCT Model's id
    },
    tag_id: {
      type:DataTypes.INTEGER
      // TODO: Referrences the TAG Model's ID. 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
