// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}
  
Product.init(
  {
    // define columns
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
