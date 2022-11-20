import React from 'react'
import {useDispatch ,useSelector} from 'react-redux' 

export default function Counter() {
    const count =useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <div className='container my-5'>
      <h2 className='text-center'>{count}</h2>
      <div className='text-center'>
      <button className='btn btn-dark alert-warning m-2' onClick={()=>dispatch({type:"ADD" ,pyload:10})}>+10</button>
      <button className='btn btn-dark alert-success m-2' onClick={()=>dispatch({type:"UP"})}>+</button>
      <button className='btn btn-dark m-2 alert-danger' onClick={()=>dispatch({type:"DOWN"})}>-</button>
      <button className='btn btn-dark alert-warning m-2' onClick={()=>dispatch({type:"DD" ,pyload:-10})}>-10</button>
      </div>

    </div>
  )
}
