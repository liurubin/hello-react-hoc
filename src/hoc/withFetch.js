import React,{ Component } from 'react'

const withFetch = (url) => (WrapperComponent) => {
  return class extends Component {
    constructor(){
      super();
      this.state = {
        loading: true,
        data: null
      }
    }

    componentDidMount(){
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          loading: false,
          data
        })
      })
    }

    render(){
      if(this.state.loading){
        return <div>loading</div>
      }else{
        return <WrapperComponent data={this.state.data}/>
      }
    }
  }
}

export default withFetch