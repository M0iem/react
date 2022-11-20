import React from "react";
import JeuDe from './component/JeuDe'
// import { useSelector } from 'react-redux';
import  './App';

const App=()=>{
  // const islogin=useSelector(state => state.loginUser.isLogin)
  return (
    
    <div className="text-center App ">
      <JeuDe cache={2}/>
  
    
    </div>

)
}
export default App
