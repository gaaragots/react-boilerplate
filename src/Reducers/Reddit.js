import { types } from '../Actions/Reddit'
import { actions } from '../Actions/utils'

export default (state = {}, action) => {
  switch (action.type) {
    case actions.asResolved(types.REQUEST_POSTS):
      return action.data

    default:
      return state
  }
}
