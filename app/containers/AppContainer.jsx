import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes'
import { receiveRecipes } from '../reducers/recipe'

//get user id and
//filter recipes down to the recipe
//component based on that user and
//render recipe component

export default connect(
  (state) => {
    return {
      recipes: state.recipe.allRecipes
    }
  }, (dispatch) => {
    return {}
  }
)(Recipes)
