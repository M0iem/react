import {React,useState} from "react";
import Header from "./Header";

export default function Form(){
    
       const [nom,setNom]=useState("");
       const[poste,setPoste]=useState("");
       const[ville,setVille]=useState("");
       const[gender,setGender]=useState("");
       
       const fnom = (e) =>setNom(e.target.value);
       const fville = (e) =>setVille(e.target.value);
        const fposte = (e) =>setPoste(e.target.value);
        const fgender = (e) =>setGender(e.target.value);
    
    return(
    

        <div className="mt-5" >
            

            <form className="form">
            <Header title="first react project "/> 
            <label>Nom :</label><br/>
            <input type="text" onChange={fnom} className="form-control"/><br/>
            <label>Ville : </label><br/>
           <select  onChange={fville} className="form-control">
            <option>Casa</option>
            <option>Rabat</option>
            <option>Fes</option>

           </select><br/>
        
           <label>Poste:</label> <br/>
           <textarea  onChange={fposte} className="form-control" ></textarea><br/><br/>

           <label>Gender:</label> <br/>

           <input type="radio" className="w-50"  onChange={fgender} name="gender" value="homme" />Homme
            <input type="radio"  className="w-50" onChange={fgender}  name="gender" value="femme" />Femme <br/><br/>


           <p className="p-2 text-center alert-success">Nom: {nom} <br/>Ville: {ville}<br/>Gender: {gender}<br/>Commentaire:  {poste}</p> 
       



     


            </form>
                        
     </div>
    
    )
}