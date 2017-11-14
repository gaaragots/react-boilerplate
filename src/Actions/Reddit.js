import { createSelector } from 'reselect'
import { ResolvedActionFactory, RejectedActionFactory } from './utils'

export const types = {
  REQUEST_POSTS: 'REQUEST_POSTS'
}

export const actions = {
  /**
   * Request Posts from a specific subreddit
   * @param {String} subreddit - Subreddit
   * @return {Object} Action Representation
   */
  RequestPosts(subreddit) {
    return { type: types.REQUEST_POSTS, subreddit }
  },

  /**
   * Action with a successfully response from the API
   * @param {Object} response - HTTP Response
   * @return {Object} Action Representation
   */
  RequestPostsResolved(response) {
    return ResolvedActionFactory(types.REQUEST_POSTS, response)
  },

  /**
   * Action with a failed response from the API
   * @param {Object} error - HTTP Response
   * @return {Object} Action Representation
   */
  RequestPostsRejected(error) {
    return RejectedActionFactory(types.REQUEST_POSTS, error)
  }
}

export const selectors = {
  getPosts: createSelector(
    s => s.Reddit.children,
    (children = []) => children.map(e => e.data)
  )
}
