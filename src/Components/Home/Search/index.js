import style from './style'
import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ value, onChange, onSubmit }) => (
  <div className="search-box">
    <h1>Search a Subreddit:</h1>
    <input type="search" name="value" value={value} onChange={onChange} />
    <button onClick={onSubmit}>Search!</button>
    <style jsx>{style}</style>
  </div>
)

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default Search
