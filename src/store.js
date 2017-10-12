import Reducers from './Reducers'
import Observables from './Observables'
import UserStorage from './Middlewares/UserStorage'
import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware, compose } from 'redux'

const UserStorageMiddleware = new UserStorage('__USER__')
const composeEnhanced =
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export default createStore(
  Reducers,
  UserStorageMiddleware.InitialState(),
  composeEnhanced(
    applyMiddleware(
      createEpicMiddleware(Observables),
      UserStorageMiddleware.Middleware()
    )
  )
)
