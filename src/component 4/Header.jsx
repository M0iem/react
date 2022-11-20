import React from 'react'

export default function Header(props) {
  return (
    <div>
  
    <h2 className='alert text-capitalize alert-danger mt-5 text-center'>{props.title}</h2>
    </div>
  )
}
