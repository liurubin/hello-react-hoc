import React, { Component } from 'react'

class Mouse extends Component {
  state = {
    x: '',
    y: ''
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default Mouse
