import style from './style'
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const Search = ({ handleSubmit }) => (
  <div className="search-box">
    <h1>Search a Subreddit:</h1>
    <form onSubmit={handleSubmit}>
      <Field name="search" component="input" type="search" className="" />
      <button tupe="submit">Search!</button>
    </form>
    <style jsx>{style}</style>
  </div>
)

Search.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'search'
})(Search)
