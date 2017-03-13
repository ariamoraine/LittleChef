import React, { Component } from 'react'
import Paper from 'material-ui/paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { teal600 } from 'material-ui/styles/colors.js'

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameEntered: false,
      recipeName: '',
      recipePhoto: '',
      recipeIngredients: [],
      recipeTempIngredientAmount: '',
      recipeTempIngredient: '',
    }

    this.handleNameSave = this.handleNameSave.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhotoChange = this.handlePhotoChange.bind(this)
    this.handleTempIngredientAmount = this.handleTempIngredientAmount.bind(this)
    this.handleIngredientAdd = this.handleIngredientAdd.bind(this)
    this.handleTempIngredient = this.handleTempIngredient.bind(this)
  }

  handleNameChange (event) {
    this.setState({
      recipeName: event.target.value,
    });
  }

  handlePhotoChange (event) {
    this.setState({
      recipePhoto: event.target.value
    })
  }

  handleIngredientAdd (event) {
    this.setState({
      recipeIngredients: this.state.recipeIngredients.concat([{'amount': this.state.recipeTempIngredientAmount, 'Ingredient': this.state.recipeTempIngredient}]),
      recipeTempIngredientAmount: '',
      recipeTempIngredient: '',
    })
  }

  handleTempIngredientAmount(e){
    this.setState({
      recipeTempIngredientAmount: e.target.value
    })
  }

  handleTempIngredient (e) {
    this.setState({
      recipeTempIngredient: e.target.value
    })
  }

  handleNameSave(e){
    this.setState({
      nameEntered: !this.state.nameEntered})
  }

  render() {
    return (
      <Paper>
        <h1 id="chefHeadTesk">Add a new recipe!</h1>
        <div>
          {
            this.state.nameEntered ?
            <div id="subhead">
              <div>{`Recipe Name: ${this.state.recipeName}`}</div>
              <div>{`Recipe URL: ${this.state.recipePhoto}`}</div>
              <div>{this.state.recipeIngredients.map((element, index) => {
                return (<div key={index}><div>{`${index+1}. ${element.amount} ${element.Ingredient}`}</div></div>)
              })}</div>
              <TextField
                id="recipeAmount"
                value={this.state.recipeTempIngredientAmount}
                hintText="Amount"
                onChange={this.handleTempIngredientAmount}
              />
              <TextField
                id="recipeIngredient"
                value={this.state.recipeTempIngredient}
                hintText="Ingredient"
                onChange={this.handleTempIngredient}
              />
              <RaisedButton label="Add an Ingredient"  backgroundColor={teal600} fullWidth={true} type="submit" value="Add this Ingredient" onClick={(e) => {
                  e.preventDefault()
                  this.handleIngredientAdd(e, this)
                }
              }
            />
            </div>
            :
          <div>
            <TextField
              hintText="Recipe Name"
              onChange={this.handleNameChange}
            />
            <TextField
              hintText="Recipe Photo URL"
              onChange={this.handlePhotoChange}
            />
            <RaisedButton label="Add a recipe"  backgroundColor={teal600} fullWidth={true} type="submit" value="Add" onClick={(e) => {
                e.preventDefault()
                console.log("INSIDE ONDUBMIT")
                this.handleNameSave(e, this)
              }}
              />
          </div>
        }
      </div>
    </Paper>
    );
  }
}
