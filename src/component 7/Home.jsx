import React from 'react'
import About from './About'
import { useSelector } from 'react-redux';

export default function Home() {
    // const name='ali baba'
    const name=useSelector((state)=>state.user.name);

    return (
    <div>
      <h1 className="text-center text-capitalize alert-danger p-4">hi {name} on Home
      <About/></h1>
    </div>
  )
}
