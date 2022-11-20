import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
    const [user ,setUser]=useState();
    const [password ,setPassword]=useState();
    const dispatch = useDispatch();
    const loginUser=useSelector(state=>state.user.isLogin);
    const [msg,setMsg]=useState(""); 

    const Login=(e)=>{
        e.preventDefault();
        console.log('LoginUser.username')
        
    if (loginUser.username ===user && loginUser.password ===password ){
        dispatch({type:"LOGIN",pyload:{user,password}})
    }else{
        setMsg('username or psswrd is incorrect');
    }
    }


  return (
    <div className='container w-20 '>
      <h1 className="alert alert-dark"> Login</h1>
      <label className="form-label"> Username : </label><br />
      <input type="text" className="form-control" placeholder="type ur username here ... " onChange={(e)=>setUser(e.target.value)} /> <br />
      <label > Passwords : </label><br />
      <input type="text" className="form-control "placeholder="******" onChange={(e)=>setPassword(e.target.value)} /> 
      <button className='form-control btn-dark my-2' onClick={Login}> Save</button>
      <p className='text-danger m-4'>{msg}</p>
      


    </div>
  )
}
