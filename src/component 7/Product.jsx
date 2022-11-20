import React ,{useState}from 'react'
import {useDispatch, useSelector } from 'react-redux';

export default function Product() {
    const name=useSelector((state)=>state.user.name);
    const dispatch =useDispatch();
    const [newName ,setNewName]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:"update",pyload:newName})
        setNewName("")
    }

  return (
    <div>
      <h1 className="text-center text-capitalize alert-primary p-5">
      hi {name} on Product 
      <div className="container">
        <form onSubmit={handleSubmit} >
            <input type="text" className="form-control text-center my-5" value={newName} onChange={(e)=>setNewName(e.target.value) } placeholder="type ur name" onClick={()=>dispatch({type:"update" ,pyload:newName})}/>
        </form>
      </div>
      </h1>
    </div>
  )
}
