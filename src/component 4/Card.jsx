import React from 'react'


export default function Card(props) {
  return (
         <div className="card col-4 mt-5 p-2">
            <img src={props.img} alt="" className='card-img m-1'/>
            <p className='card-text text-capitalize '>Nom :{props.nom}</p>
            <p>Email : {props.email}</p>
            <p>Website : {props.website}</p>
        </div>
    
  )
}
