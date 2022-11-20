import React from 'react'
import Contact from './Contact'
import { useSelector } from 'react-redux';

export default function About() {
  // const name='ali baba'
  const name=useSelector((state)=>state.user.name);
    return (
    <div>
      <h1 className="text-center text-capitalize alert-success p-4">hi {name} on About
      <Contact/></h1>
    </div>
  )
}
