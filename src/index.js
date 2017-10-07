import style from './index.scss'
import React from 'react'
import store from './store'
import theme from './theme'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-css-themr'
import { BrowserRouter as Router } from 'react-router-dom'

import Login from './Components/Login'
import Home from './Components/Home'
import Header from './Components/Header'
import Register from './Components/Register'
import Notifications from './Components/Notifications'
import { PrivateRoute, OnlyPublicRoute } from './Components/Routing'

const __store = store()
const __init_el = document.createElement('div')
__init_el.id = style.reactinit

ReactDOM.render(
  <Provider store={__store}>
    <ThemeProvider theme={theme}>
      <div>
        <Notifications />
        <Header />
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <OnlyPublicRoute path="/login" component={Login} />
            <OnlyPublicRoute path="/register" component={Register} />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  </Provider>,
  document.body.appendChild(__init_el)
)
