import React from 'react'

//material UI things
import Paper from 'material-ui/paper'

export default function (props) {
    console.log("RECIPES", props)
    return (
      <div>
        <Paper>
          <div>
            <h1>HiZZZ!</h1>
            <h1>{props.recipes[0].name}</h1>
            <img alt="Food" src={props.recipes[0].photo}/>
            <p>{props.recipes[0].updated_at}</p>

          </div>
        </Paper>
      </div>
    )
}
