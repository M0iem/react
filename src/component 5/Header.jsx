import React, { Component } from 'react'
import img from '../logo192.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center text-capitalize px-5 alert '>  
        <img className='imgSpin' style={{width:'50px',marginRight:'50px'}} src={img} alt="" />{this.props.title}
        </h1>
        <hr />
    </div>

    )
  }
}
