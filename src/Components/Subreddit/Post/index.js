import style from './style'
import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ title, thumbnail, url, permalink }) => (
  <div className="post">
    <img
      src={
        thumbnail && thumbnail !== 'self'
          ? thumbnail
          : 'http://lorempixel.com/400/200/'
      }
      alt={`${title} image`}
    />
    <a className="title" href={url}>
      {title}
    </a>
    <a className="permalink" href={`${process.env.API_URL}${permalink}`}>
      Comment
    </a>
    <style jsx>{style}</style>
  </div>
)

Post.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
  permalink: PropTypes.string
}

export default Post
