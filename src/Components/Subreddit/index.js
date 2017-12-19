import SubReddit from './Subreddit'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { actions, selectors } from '../../Actions/Reddit'

const mapStateToProps = state => ({
  posts: selectors.getPosts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchPosts(subreddit) {
    return dispatch(actions.RequestPosts(subreddit))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { subreddit } = this.props.match.params
      this.props.fetchPosts(subreddit)
    }
  })
)(SubReddit)
