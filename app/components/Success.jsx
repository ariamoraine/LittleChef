import React from 'react'
import Paper from 'material-ui/paper'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
}

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
          <div style={styles.block}>
            {props.recipeIngredients.map((ingredient) => (
            <Checkbox key={ingredient.id} label={`${ingredient.amount}, ${ingredient.name}`}/>
              ))
            }
          </div>
        </Paper>
      </div>
    )
}

