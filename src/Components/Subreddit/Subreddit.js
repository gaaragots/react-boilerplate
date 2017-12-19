import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const SubReddit = ({ posts }) => posts.map(e => <Post {...e} key={e.id} />)

SubReddit.propTypes = {
  posts: PropTypes.array
}

export default SubReddit
