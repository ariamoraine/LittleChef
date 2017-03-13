import React from 'react'
import { connect } from 'react-redux'
import AddRecipe from '../components/AddRecipe'

export default connect((state) => {
  return {
    auth: state.auth
  }
}, (dispatch) => {
  return {}
})(AddRecipe)
