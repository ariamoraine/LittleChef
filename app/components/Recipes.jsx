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
   console.log("RECIPES", props)

   const oldest = props.recipes.reduce(function(oldest, currentValue) {
    console.log(oldest.updated_at, currentValue.updated_at)
    const thisOldest = oldest.updated_at < currentValue.updated_at ? oldest : currentValue
    console.log("EACH OLDEST",thisOldest)
    return thisOldest
   })

   console.log("AFTER REDUCE", oldest)

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
