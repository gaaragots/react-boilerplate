import React from 'react'
import style from './style'
import Search from './Search'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const Home = ({ value, onSearch }) => (
  <div className="container">
    <Search onSubmit={onSearch} />
    {value ? <Redirect to={`/r/${value}`} /> : null}
    <style jsx>{style}</style>
  </div>
)

Home.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func
}

export default Home
