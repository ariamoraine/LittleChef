import React from 'react'

import Recipe from './Recipe'

//material UI things
import Paper from 'material-ui/paper'

//here is where we would loop through all
//recipes and render a RECIPE compnent
//in grids with that information

export default function (props) {
    console.log("RECIPES", props)
    return (
      <div>
        <Paper>
          <Recipe recipe={props.recipes[0]}/>
        </Paper>
      </div>
    )
}
