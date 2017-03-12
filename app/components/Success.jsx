import React from 'react'
import Paper from 'material-ui/paper'

export default function (props) {
  console.log("SUCCESS!", props)
    return (
      <div>
        <Paper>
          <h1>Little Chef just texted you a shopping list.</h1>
          <h2>Now get shoppin'</h2>
          <h2>Just in case heres a list</h2>
          <p>{props.name}</p>
          <img src={props.photo} />
        </Paper>
      </div>
    )
}
