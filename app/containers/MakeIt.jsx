import React from 'react'
import Paper from 'material-ui/paper'
import { connect } from 'react-redux'
import Success from '../components/Success'
import axios from 'axios'

function formatRecipeLines (ingArray) {
  ingArray = ingArray.map(function (ing) {
    return ({
      name: ing.ingredient.name,
      amount: ing.amount,
      id: ing.id
    })
  })
  return ingArray
}

function makeShoppingList (recipeInfo) {
  let shoppingList = ''
  shoppingList += `To make ${recipeInfo.recipeIngredients[0].recipe.name}, you will need...\n`
  recipeInfo.recipeIngredients.forEach(function(recipe) {
    shoppingList += `${recipe.amount} of ${recipe.ingredient.name}\n`
  })

  return shoppingList
}

export default connect (state => ({
    name: state.recipe.recipeIngredients[0].recipe.name,
    photo: state.recipe.recipeIngredients[0].recipe.photo,
    recipeIngredients: formatRecipeLines(state.recipe.recipeIngredients),
    phone: state.auth.phone,
    shoppingList: makeShoppingList(state.recipe)
}), (dispatch) => {
  return {
    sendSMS: function (smsInfo) {
      axios.post('/api/twilio', smsInfo)
    }
  }
}) (Success)
