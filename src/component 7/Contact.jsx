import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux';

export default function Contact() {  
  // const name='ali baba'
  const name=useSelector((state)=>state.user.name);

    return (
    <div className='container'>
      <h1 className="text-center text-capitalize alert-dark p-5">hi {name} on Contact
      <Product/></h1>
    </div>
  )
}
