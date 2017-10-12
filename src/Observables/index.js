import User from './User'
import Notifications from './Notifications'
import { combineEpics } from 'redux-observable'

export default combineEpics(User, Notifications)
