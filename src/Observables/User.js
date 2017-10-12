import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { Req } from '../API/utils'
import { actions, types } from '../Actions/User'
import { Authenticate, Create } from '../API/User'
import { actions as NotificationActions } from '../Actions/Notifications'

const Login = action$ =>
  action$.ofType(types.AUTHENTICATE_INTENT).flatMap(({ data }) =>
    Observable.fromPromise(Req(Authenticate(data.email, data.password)))
      .flatMap(req => Observable.fromPromise(req.json()))
      .map(_ => actions.AuthenticateResolved(_))
      .catch(err => Observable.of(actions.AuthenticateRejected(err)))
  )

const Register = action$ =>
  action$.ofType(types.USER_CREATE_INTENT).flatMap(({ data }) =>
    Observable.fromPromise(Req(Create(data)))
      .flatMap(req => Observable.fromPromise(req.json()))
      .map(_ => actions.UserCreateResolved(_))
      .flatMap(_ =>
        Observable.concat(
          Observable.of(actions.UserCreateResolved(_)),
          Observable.of(
            NotificationActions.OpenNotification(
              'Check your email and validate your account :)'
            )
          )
        )
      )
      .catch(err => Observable.of(actions.UserCreateRejected(err)))
  )

export default combineEpics(Login, Register)
