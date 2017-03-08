const Sequelize = require('sequelize');
const db = require('APP/db');

const Ingredient = db.define('ingredients', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isCheatDay: {
    type: Sequelize.ENUM,
    values: ['Yes', 'No']
  }
});

module.exports = Ingredient;
