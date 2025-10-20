const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'barter_app.sqlite', 
    logging: false 
});

module.exports = sequelize;