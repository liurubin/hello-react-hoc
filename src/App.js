import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
import Joke from './Joke'
import Mouse from './Mouse'

const propsLogger = (WrapperComponent) => {
  return class extends Component {
    render() {
      return <WrapperComponent {...this.props} />
    }
  }
}

const Hello = propsLogger((props) => {
  return (
    <div>{props.name}</div>
  )
})

const Position = ({x,y}) => {
  return (
  <p>position is {x,y}</p>
  )
}
class App extends Component {

  render() {
    console.log('render App')
    return (
      <div>app
        <Hello name='rail' />
        <User />
        <Joke />
        <Mouse render={(props) => <Position {...props} />} />
      </div>
    )
  }
}

export default App;
