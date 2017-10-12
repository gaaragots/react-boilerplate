import 'rxjs'
import { combineEpics } from 'redux-observable'

import { types, selector, actions } from '../Actions/Notifications'

const notificationAction = (action$, store) =>
  action$.ofType(types.NOTIFICATION_ACTION).do(({ id }) => {
    const notification = selector(store.getState()).find(n => n._id === id)
    notification.actionMethod && notification.actionMethod(store)
  })

const errorNotification = action$ =>
  action$
    .filter(({ type, message }) => type.includes('_REJECTED') && message)
    .map(_ => actions.OpenNotification(_.message))

export default combineEpics(notificationAction, errorNotification)
