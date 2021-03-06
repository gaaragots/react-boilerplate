import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.css'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import SubReddit from './Components/Subreddit'

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/r/:subreddit" component={SubReddit} />
        </Switch>
      </Router>
    </Provider>
    <style global jsx>
      {style}
    </style>
  </div>,
  document.querySelector('#app')
)
