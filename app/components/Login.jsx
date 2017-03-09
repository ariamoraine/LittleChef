import React from 'react'
import {signup} from 'APP/app/reducers/auth'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

//materialUI stuff
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/paper'
import TextField from 'material-ui/TextField';


class Login extends React.Component{
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleLogin(event) {
    console.log("handleLogin")
    this.props.login(event.target.username.value, event.target.password.value)
  }

  handleSignup(event) {
    console.log("handleSignup")
    console.log("this", this)
    console.log("event", event.target)
    this.props.signup(event.target.username.value, event.target.password.value)
  }


  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      card: {
        height: 300,
        width: 600,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      },
    };

    return (
    <div style={styles.root}>

      <Paper style={styles.card} zDepth={4} children={
        <form onSubmit={(e) => {
            e.preventDefault()
            this.handleLogin(e, this)
          }
          } >
          <h1 id="chefHeadTesk">Need a little chef in your life?</h1>
          <TextField floatingLabelText="Email Address" name="username" hintText="Email Address"/>
          <br/>
          <TextField floatingLabelText="Password" name="password" hintText="Password" />
          <RaisedButton label="Login" type="submit" value="Login" />
        </form>
        }>
      </Paper>
    </div>
    )
  }
}

const mapDispatch = dispatch => ({
  login: (username, password) => {
    dispatch(login(username, password))
  },
  signup: (username, password) => {
    dispatch(singup(username, password))
  }
})

export default connect (
  state => ({}),
  mapDispatch
)(Login)
