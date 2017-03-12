const Sequelize = require('sequelize');
const db = require('APP/db');

const RecipeLine = db.define('recipelines', {
  amount: Sequelize.STRING
}, {
  scopes: {
    default: {
      include: [{all: true}]
    }
  }
});

module.exports = RecipeLine;
