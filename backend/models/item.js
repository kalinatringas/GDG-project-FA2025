const { DataTypes } = require('sequelize'); //import sequelize from databse
const sequelize = require('../database'); 

const Item = sequelize.define('Item', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

//Make item model available to other files
module.exports = Item;