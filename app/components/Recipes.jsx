import React from 'react'

import Recipe from './Recipe'

//material UI things
import Paper from 'material-ui/paper'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  }
}

export default function (props) {

    const sortedRecipes = props.recipes.sort(function(a, b) {
      return parseFloat(a.updated_at) - parseFloat(b.updated_at)
    }).reverse()


    sortedRecipes[0]['featured'] = true

    console.log(sortedRecipes[0])
    return (
      <div>
        <Paper>
          <div style={styles.root}>
            <h1 id="chefHeadTesk">Little Chef says you should make...</h1>
              <GridList
                cols={2}
                cellHeight={200}
                padding={1}
                style={styles.gridList}>
                {props.recipes.map((recipe) => (
                  <GridTile
                    key={recipe.id}
                    title={recipe.name}
                    subtitle={<span><b>Last made </b>{recipe.updated_at}</span>}
                    subtitle={<span><b>Made: </b>{recipe.timesMade} times</span>}
                    titlePosition="bottom"
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0) 100%)"
                    cols={recipe.featured ? 2 : 1}
                    rows={recipe.featured ? 2 : 1}
                  >
                    <img src={recipe.photo} />
                  </GridTile>
                ))}
              </GridList>
            </div>
         </Paper>
      </div>
    )
}
