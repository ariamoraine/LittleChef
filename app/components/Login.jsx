import React from 'react'
import {signup} from 'APP/app/reducers/auth'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

//materialUI stuff
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/paper'
import TextField from 'material-ui/TextField';
import { teal600 } from 'material-ui/styles/colors.js'


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
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        border: 20,
        textAlign: 'center',
        display: 'inline-block',
        marginTop: 100,
      },
      form: {
        marginBottom: 25,
        padding: 10,
      },
      loginButton: {
        clear: top,
      }
    };

    return (
    <div style={styles.root}>

      <Paper style={styles.card} zDepth={4} children={
        <form onSubmit={(e) => {
            e.preventDefault()
            this.handleLogin(e, this)
          }
          } >
          <div style={styles.form}>
            <h1 id="chefHeadTesk">Need a Little Chef in your life?</h1>
            <TextField fullWidth={true} floatingLabelText="Email Address" name="username" hintText="Email Address"/>
            <br/>
            <TextField fullWidth={true} floatingLabelText="Password" name="password" hintText="Password" />
          </div>
            <RaisedButton style={styles.loginButton} label="Login"  backgroundColor={teal600} fullWidth={true} type="submit" value="Login" />


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
