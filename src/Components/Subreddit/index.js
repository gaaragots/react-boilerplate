import { actions, selectors } from '../../Actions/Reddit'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Post from './Post'

class Subreddit extends Component {
  static propTypes = {
    posts: PropTypes.array,
    fetchPosts: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.object
    })
  }

  componentWillMount() {
    const { subreddit } = this.props.match.params
    this.props.fetchPosts(subreddit)
  }

  render() {
    return this.props.posts.map(e => <Post {...e} key={e.id} />)
  }
}

const mapStateToProps = state => ({
  posts: selectors.getPosts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts(subreddit) {
    return dispatch(actions.RequestPosts(subreddit))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit)
