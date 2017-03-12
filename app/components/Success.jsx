import React from 'react'
import Paper from 'material-ui/paper'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  block: {
    minWidth: 250,
    paddingBottom: 50,
  },
  checkbox: {
    marginBottom: 16,
    alignItems: 'left'
  },
    page: {
    marginLeft: 150,
    marginRight: 150,
    marginBottom: 50,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',

  },
}

export default function (props) {
  console.log("SUCCESS!", props)
    return (
      <div>
        <Paper style={styles.page} zDepth={4}>
          <div style={styles.root}>
          <h1 id="chefHeadTesk">Little Chef just texted you</h1>
          <h2 id="subhead">Just in case here's a copy of that list</h2>
          <div style={styles.block}>
            {props.recipeIngredients.map((ingredient) => (
            <Checkbox key={ingredient.id} label={`${ingredient.amount}, ${ingredient.name}`}/>
              ))
            }
          </div>
          </div>
        </Paper>
      </div>
    )
}

