const db = require('APP/db')
const recipeRouter = require('express').Router()
const Recipe = require('APP/db/models/recipe')

recipeRouter.get('/', (req, res, next) => {
  Recipe.findAll({})
  .then(recipes => {
    res.send(recipes)
  })
})

module.exports = recipeRouter
