import React, { Component } from 'react'

export default class MovieInfoPage extends Component {
  render() {
    return (
      <div>
          {this.props.data.Title}
      </div>
    )
  }
}
