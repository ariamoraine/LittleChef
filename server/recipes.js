const db = require('APP/db')
const sequelize = require('sequelize')
const Recipe = require('APP/db/models/recipe')
const RecipeLine = require('APP/db/models/recipelines')
const recipeRouter = require('express').Router()

recipeRouter.get('/', (req, res, next) => {
  Recipe.findAll({})
  .then(recipes => {
    res.send(recipes)
  })
})

recipeRouter.get('/:recipeId', (req, res, next) => {
  console.log("INSIDE THE ROUTER~~~~~~~~~~~~~~~~~")
  console.log(req.params)
  RecipeLine.findAll({
    where: {
      recipe_id: req.params.recipeId
    }
  }).then(recipeLines => {
    console.log(recipeLines)
    res.send(recipeLines)
  })
})

module.exports = recipeRouter
