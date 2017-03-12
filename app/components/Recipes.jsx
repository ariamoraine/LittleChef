import React from 'react'
import MakeIt from '../containers/MakeIt'
import { Link } from 'react-router'
//material UI things
import Paper from 'material-ui/paper'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridList: {
    width: 600,
    // height: 450,
    paddingBottom: 50,
    overflowY: 'auto',
  },
  page: {
    marginLeft: 150,
    marginRight: 150,
    marginBottom: 50,
  }
}

export default function (props) {

    const sortedRecipes = props.sortedRecipes.filter(function(recipe) {
      console.log("recipe", recipe.user_id)
      console.log("AUTH ID", props.auth.id)
      if(props.auth.id === recipe.user_id){
        console.log("INSIDE IF")
        return recipe
      }
    })

    return (
      <div>
        <Paper style={styles.page} zDepth={4}>
          <div style={styles.root}>
            <span><h1 id="chefHeadTesk">Little Chef says you should...</h1></span>
              {sortedRecipes.length !== 0 ? <GridList
                cols={2}
                cellHeight={200}
                padding={1}
                style={styles.gridList}>
                {sortedRecipes.map((recipe) => (
                  <GridTile
                    key={recipe.id}
                    title={`Make ${recipe.name}`}
                    subtitle={<Link to={`makeit/${recipe.id}`}><h1 tabIndex='0' id="grid-box-hover">Yum! Text me the recipe!</h1></Link>}
                    titlePosition="bottom"
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.5) 70%,rgba(0,0,0,0) 100%)"
                    cols={recipe.featured ? 2 : 1}
                    rows={recipe.featured ? 2 : 1}>
                    <img src={recipe.photo} />
                  </GridTile>
                ))}
              </GridList> : <h1>Add some recipes because you don't have any</h1> }
            </div>
         </Paper>
      </div>
    )
}
