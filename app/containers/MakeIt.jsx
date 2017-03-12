import React from 'react'
import Paper from 'material-ui/paper'
import { connect } from 'react-redux'
import Success from '../components/Success'

function formatRecipeLines (ingArray) {
  console.log("ing ARRAY", ingArray)
  ingArray = ingArray.map(function (ing) {
    return ({
      name: ing.ingredient.name,
      amount: ing.amount,
      id: ing.id
    })
  })
  console.log("new ingArray", ingArray)
  return ingArray
}

export default connect (state => ({
    name: state.recipe.recipeIngredients[0].recipe.name,
    photo: state.recipe.recipeIngredients[0].recipe.photo,
    recipeIngredients: formatRecipeLines(state.recipe.recipeIngredients),
})) (Success)
