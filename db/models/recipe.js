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
  timesMade: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: "https://lorempixel.com/400/400/food",
  }
}, {
  scopes: {
    default: {
      include: [{all: true}]
    }
  }
});

module.exports = Recipe;
