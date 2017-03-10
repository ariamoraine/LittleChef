import React, { Component } from 'react'
import { connect } from 'react-redux'

//material UI things
import Paper from 'material-ui/paper'

class Recipes extends Component {

  constructor (props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Paper>
          <div>
            <h1>HiZZZ!</h1>
          </div>
        </Paper>
      </div>
    )
  }
}

export default connect()(Recipes)
