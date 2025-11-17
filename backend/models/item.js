const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Item = sequelize.define('Item', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Item;