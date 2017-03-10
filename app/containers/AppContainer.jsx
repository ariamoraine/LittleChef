import React from 'react';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes'
import { receiveRecipes } from '../reducers/recipe'

export default connect(
  (state) => {
    return {
      recipes: state.recipe.allRecipes
    }
  }, (dispatch) => {
    return {}
  }
)(Recipes)
