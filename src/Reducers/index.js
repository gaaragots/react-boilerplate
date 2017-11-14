import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import Reddit from './Reddit'

export default combineReducers({
  form,
  Reddit
})
