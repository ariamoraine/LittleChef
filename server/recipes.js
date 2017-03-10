const db = require('APP/db')
const recipeRouter = require('express').Router()
const Recipe = require('APP/db/models/recipe')
const sequelize = require('sequelize')

recipeRouter.get('/', (req, res, next) => {
  Recipe.findAll({})
  .then(recipes => {
    console.log(recipes)
    res.send(recipes)
  })
})

module.exports = recipeRouter
