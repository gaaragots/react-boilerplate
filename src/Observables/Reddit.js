import { Observable } from 'rxjs'
import nprogress from 'nprogress'
import { combineEpics } from 'redux-observable'

import { Req } from '../API/utils'
import { actions, types } from '../Actions/Reddit'
import { FetchPosts } from '../API/Reddit'

/**
 * Handles a request of posts
 * @param {Object} action$ - Incoming Action
 */
const FetchPostsObs = action$ =>
  action$
    .ofType(types.REQUEST_POSTS)
    .do(() => nprogress.start())
    .flatMap(({ subreddit }) =>
      Observable.fromPromise(Req(FetchPosts(subreddit)))
        .flatMap(req => Observable.fromPromise(req.json()))
        .do(() => nprogress.done())
        .map(_ => actions.RequestPostsResolved(_))
        .catch(err =>
          Observable.of(actions.RequestPostsRejected(err)).do(() =>
            nprogress.start()
          )
        )
    )

export default combineEpics(FetchPostsObs)
