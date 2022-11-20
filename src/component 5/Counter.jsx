 import React, { Component } from 'react'
import Header from './Header'
 
export default class Counter extends Component {
   constructor(){
    super()
    this.state={
        count:0
    
    }
    // this.increment=this.increment.bind(this)
    // this.decrement=this.decrement.bind(this)

   }
   increment=()=>{
    this.setState({count:this.state.count+1})
   }
   decrement=()=>{
    this.setState({count:this.state.count-1})
   }


  render() {
    return (
      <div>
        <Header title='Counter '/>
         <p className='text-center' style={{fontSize:'6em'}}>
            <button className='btn btn-danger m-4'onClick={this.decrement}>-</button>
            {this.state.count}
            <button className='btn btn-success m-4' onClick={this.increment}>+</button>
         </p>
      </div>
    )
  }
}
