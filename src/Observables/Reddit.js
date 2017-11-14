import { Observable } from 'rxjs'
import { combineEpics } from 'redux-observable'

import { Req } from '../API/utils'
import { actions, types } from '../Actions/Reddit'
import { FetchPosts } from '../API/Reddit'

/**
 * Handles a request of posts
 * @param {Object} action$ - Incoming Action
 */
const FetchPostsObs = action$ =>
  action$.ofType(types.REQUEST_POSTS).flatMap(({ subreddit }) =>
    Observable.fromPromise(Req(FetchPosts(subreddit)))
      .flatMap(req => Observable.fromPromise(req.json()))
      .map(_ => actions.RequestPostsResolved(_))
      .catch(err => Observable.of(actions.RequestPostsRejected(err)))
  )

export default combineEpics(FetchPostsObs)
