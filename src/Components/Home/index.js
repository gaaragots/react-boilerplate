import style from './style'
import Search from './Search'
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super()
    this.state = { value: '', search: false }
  }

  onSubmit = e => this.setState({ search: true, value: e.search })

  render() {
    return (
      <div className="container">
        <Search onSubmit={this.onSubmit} />
        {this.state.search ? <Redirect to={`/r/${this.state.value}`} /> : null}
        <style jsx>{style}</style>
      </div>
    )
  }
}
