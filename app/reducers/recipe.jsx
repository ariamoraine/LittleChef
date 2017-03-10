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

export default reducer
