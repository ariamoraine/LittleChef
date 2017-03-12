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


//<Link to={`products/${item.product.id}`}>
//  <img className="image-responsive"
//    src={item.product.photo} />
// </Link>

// onClick={(e) => handleCartAdd(e, user, selectedProduct)}

export default function (props) {

    return (
      <div>
        <Paper style={styles.page} zDepth={4}>
          <div style={styles.root}>
            <span><h1 id="chefHeadTesk">Little Chef says you should...</h1></span>
              <GridList
                cols={2}
                cellHeight={200}
                padding={1}
                style={styles.gridList}>
                {props.sortedRecipes.map((recipe) => (
                  <GridTile
                    key={recipe.id}
                    title={`Make ${recipe.name}`}
                    // subtitle={<span><b>Last made </b>{recipe.updated_at}</span>}
                    // subtitle={<span><b>Made: </b>{recipe.timesMade} times</span>}
                    subtitle={<Link to={`makeit/${recipe.id}`}><h1 tabIndex='0' id="grid-box-hover">Yum! Text me the recipe!</h1></Link>}
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

// <div className='grid-box-hover'><h3>{product.name}<br />${product.price}</h3></div>
