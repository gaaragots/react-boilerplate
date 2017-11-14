import style from './style'
import Search from './Search'
import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'

export default class Home extends Component {
  constructor() {
    super()
    this.state = { value: '', search: false }
  }

  onChange = e => this.setState({ value: e.target.value })
  onSubmit = () => this.setState({ search: true })

  render() {
    return (
      <div className="container">
        <Search
          value={this.state.value}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        {this.state.search ? <Redirect to={`/r/${this.state.value}`} /> : null}
        <style jsx>{style}</style>
      </div>
    )
  }
}
