import React,{ Component } from 'react'
import withFetch from './hoc/withFetch'

const Joke = withFetch('https://randomuser.me/api/')(props=>{
  return <div>{props.data.results[0].email}</div>
}) 
// class Joke extends Component {

//   state = {
//     loading: true,
//     joke: null
//   }

//   componentDidMount(){
//     fetch('https://randomuser.me/api/')
//     .then(res=>res.json())
//     .then(joke=>{
//       this.setState({
//         loading: false,
//         joke
//       })
//     })
//   }
//   render(){
//     if(this.state.loading){
//       return <div>loading</div>
//     }else{
//     return <div>{this.state.joke.results[0].email}</div>
//     }
//   }
// }

export default Joke