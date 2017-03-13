import React, { Component } from 'react'
import Paper from 'material-ui/paper'
import TextField from 'material-ui/TextField'

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeName: '',
      recipePhoto: '',
      recipeIngredients: [],
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // handleChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({
  //     value: event.target.value,
  //   });
  // };

  handleChange(input, event) {
    console.log(input)
    const change = {};
    const value = event.target.value
    change[input] = value

    this.setState(change)
  }

  render() {
    return (
      <Paper>
      <div>
        <TextField
          value="recipeName"
          hintText="Recipe Name"
          onChange={this.handleChange}
        />
        <TextField
          value="recipePhoto"
          hintText="Recipe Name"
          onChange={this.handleChange}
        />
      </div>
      </Paper>
    );
  }
}
