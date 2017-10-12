import { types } from '../Actions/User'
import { actions } from '../Actions/utils'

export default (state = {}, action) => {
  switch (action.type) {
    case actions.asResolved(types.LOGOUT_INTENT):
      return {
        ...state,
        ...action.payload
      }

    case types.LOGOUT_INTENT:
      return {}

    default:
      return state
  }
}
