import React from 'react'
import Paper from 'material-ui/paper'
import { connect } from 'react-redux'

export default function (props) {
  console.log("SUCCESS!", props)
    return (
      <div>
        <Paper>
          <h1>Little Chef just sent you a shopping list.</h1>
          <h2>Now get cookin'</h2>
          <h2>Just in case heres a list</h2>
          <p>{props.recipe.recipeIngredients[0]}</p>
        </Paper>
      </div>
    )
}

export default connect ((state) => {
  return {

  }
})()
