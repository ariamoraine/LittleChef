import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes'
import { receiveRecipes } from '../reducers/recipe'

function sortRecipes (recipeArray) {
  const sortedRecipes = recipeArray.sort(function(a, b) {
    return parseFloat(a.updated_at) - parseFloat(b.updated_at)
  }).reverse()
  sortedRecipes[0]['featured'] = true

  return sortedRecipes
}

export default connect(
  (state) => {
    return {
      sortedRecipes: sortRecipes(state.recipe.allRecipes)
    }
  }, (dispatch) => {
    return {}
  }
)(Recipes)
