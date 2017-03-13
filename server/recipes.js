const db = require('APP/db')
const sequelize = require('sequelize')
const Recipe = require('APP/db/models/recipe')
const RecipeLine = require('APP/db/models/recipelines')
const recipeRouter = require('express').Router()
const Ingredient = require('APP/db/models/ingredients')


recipeRouter.get('/', (req, res, next) => {
  Recipe.findAll({})
  .then(recipes => {
    res.send(recipes)
  })
})

recipeRouter.get('/:recipeId', (req, res, next) => {
  RecipeLine.findAll({
    where: {
      recipe_id: req.params.recipeId
    }
  }).then(recipeLines => {
    res.send(recipeLines)
  })
})

recipeRouter.post('/update', (req, res, next) => {
  Recipe.findOne({
    where: {
      name: req.body.name
    }
  })
  .then(recipe => {
    recipe.update({
      timesMade: recipe.timesMade += 1
    })
  })
})

module.exports = recipeRouter
