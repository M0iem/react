import React, { useState } from 'react';
import Header from './Header';

export default function Examen() {
    const [nf,setNf]=useState(0);
    const [na,setNa]=useState(0);
    const [ne,setNe]=useState(0);
    const[moyenne,setMoyenne]=useState(0);
    const [msg,setMsg]=useState("");
    const [clr,setClr]=useState("");
    

    const calculer=(e)=>{
        e.preventDefault();
        let moy=(parseFloat(nf)+parseFloat(na)+parseFloat(ne))/3;
        setMoyenne(moy);
        if(moy<10){
            setMsg("Eleve Non Admis");
            setClr("text-danger")
            
        }else{
            setMsg("Eleve Admis");
            setClr("text-success");
        }
   


    }
    
  return (
    <div>
          <Header title='Examen de communication'/>
        <form className='form mt-5'>
            <label htmlFor="nf">Note francais :</label><br/>
            <input type="text" value={nf} className='form-control' onChange={(e)=>setNf(e.target.value)}/><br/>
            <label htmlFor="na">Note Arabe   :</label><br />
            <input type="text" value={na} className='form-control' onChange={(e)=>setNa(e.target.value)} /><br />
            <label htmlFor="ne">Note English :</label><br />
            <input type="text" value={ne} className='form-control' onChange={(e)=>setNe(e.target.value)} /><br />
        <button onClick={calculer} className='btn btn-success form-control'> Valider</button>



        </form><br />
        <p className='text-center text-capitalize'>La moyenne general est : {moyenne}</p>
        <ul>
            <li className={clr} >{msg} </li>
        </ul>
    </div>
  )
}
