import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
import Joke from './Joke'

const propsLogger = (WrapperComponent) => {
  return class extends Component {
    render(){
      return <WrapperComponent {...this.props}/>
    }
  }
}

const Hello = propsLogger((props) => {
  return (
  <div>{props.name}</div>
  )
})

class App extends Component {
 
  render(){
    console.log('render App')
    return (
      <div>app
        <Hello name='rail'/>
        <User/>
        <Joke/>
      </div>
    )
  }
}

export default App;
