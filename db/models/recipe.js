const Sequelize = require('sequelize');
const db = require('APP/db');

const Recipe = db.define('recipes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  meal: {
    type: Sequelize.ENUM,
    values: ['Dinner', 'Lunch', 'Breakfast', 'Snack']
  },
  lastMade: Sequelize.DATE,
}, {
  scopes: {
    default: {
      include: [{all: true}]
    }
  }
});

module.exports = Recipe;
