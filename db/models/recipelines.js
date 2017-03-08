const Sequelize = require('sequelize');
const db = require('APP/db');

const RecipeLine = db.define('recipelines', {
  amount: Sequelize.STRING
});

module.exports = RecipeLine;
