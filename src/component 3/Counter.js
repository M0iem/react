import {React,useState} from "react";
import Header from "./Header";



// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
    const [count,setCount]=useState(0);
    const finc=()=>setCount(count+1)
    const fdes=()=>setCount(count-1)
    const freset=()=>setCount(0)
    return(
    <div className="container mt-5">
    
        <Header title="counter and descounter"/> 
        <div className="text-center alert-success p-5">
            <h2 className="text-capitalize text-center mt-5">Counter</h2>
            <h3 className="text-capitalize text-center ">{count}</h3>
            <button className="btn btn-dark m-2"  onClick={finc}>Counter</button>
            <button onClick={fdes} className="btn btn-light m-2">Descounter</button>
            <button className="btn btn-warning m-2" onClick={freset}>Resert</button>
            

        </div>
    


    </div>
    )
}