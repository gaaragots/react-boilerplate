import { METHODS } from './utils'

/**
 * Fetch Posts from a selected subreddit
 * @param {String} subreddit - Subreddit to find
 */
export const FetchPosts = (subreddit = 'javascript') =>
  fetch(`${process.env.API_URL}/r/${subreddit}.json`, {
    method: METHODS.GET
  })
