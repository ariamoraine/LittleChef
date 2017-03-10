const db = require('APP/db')
const recipeRouter = require('express').Router()
const Recipe = require('APP/db/models/recipe')

recipeRouter.get('/:userId', (req, res, next) => {
  Recipe.findAll({
    where: {
      user_id: req.params.userId
    }
  })
  .then(recipes => {
    res.send(recipes)
  })
})

module.exports = recipeRouter
