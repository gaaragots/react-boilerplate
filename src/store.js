import Reducers from './Reducers'
import Observables from './Observables'
import { createEpicMiddleware } from 'redux-observable'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const composeEnhancers = composeWithDevTools({})
export default createStore(
  Reducers,
  composeEnhancers(applyMiddleware(createEpicMiddleware(Observables)))
)
