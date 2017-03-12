import axios from 'axios'

// REDUCER
const initialState = {
  recipes: {}
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case "RECEIVE_RECIPES":
      newState.allRecipes = action.recipes
      break;

    case "RECEIVE_RECIPE_INGREDIENTS":
      newState.recipeIngredients = action.recipe
      break;

    default: return state;
  }

  return newState
}

// ACITON CREATOR

export const receiveRecipes = (recipes) => {
  return {
    type: "RECEIVE_RECIPES",
    recipes
  }
}

export const singleRecipe = (recipe) => {
  return {
    type: "RECEIVE_RECIPE_INGREDIENTS",
    recipe
  }
}

export default reducer
