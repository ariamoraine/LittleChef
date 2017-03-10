'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

//outside stuff
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {cyan500, darkBlack, white} from 'material-ui/styles/colors'

//my stuff
import store from './store'
import Recipes from './components/Recipes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
  }
})

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <nav>
          {user ? <div> <WhoAmI/> {children} </div> : <Login/>}
        </nav>
      </div>
    </MuiThemeProvider>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/recipes" />
        <Route path="/recipes" component={Recipes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
