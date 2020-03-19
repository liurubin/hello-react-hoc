import React, { Component } from 'react'
import withFetch from './hoc/withFetch'
const User = withFetch('https://randomuser.me/api/')(props=>{
  console.log(props)
  return (
    <h1>{props.data.results[0].email}</h1>
    )
})
// class User extends Component {

//   state = {
//     loading: true,
//     user:null
//   }

//   componentDidMount(){
//     fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(user=>{
//       this.setState({
//         loading: false,
//         user
//       })
//     })
//   }
//   render(){
//     if(this.state.loading){
//       return <div>loading</div>
//     }else{
//       return (
//       <h1>{this.state.user.results[0].email}</h1>
//       )
//     }
    
//   }
// }

export default User