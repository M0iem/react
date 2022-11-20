import React, { Component } from 'react'
import Header from './Header'
import users from './users'

export default class List extends Component {
   
 constructor(){
    super()
    this.state={
      users:users}

 }
  render(){
    return (
        <div>
     <Header title="List of Users"/>
    <div className="row">
    {this.state.users.map(user=>(
      <div className="card myCard rounded shadow-lg col-3
       m-4 p-1 alert-light" key={user.id}> 
        <img src={user.photo} alt="" className="card-img-top"  />
        <div className="card-body text-center">
        <h3 className="card-title text-capitalize">
          Nom : {user.name}
   
        </h3>
        <p>
          Phone : {user.phone}<br/>
  
          Email : {user.email} <br />
          <a href={user.website}><i> go check my website</i></a><br/></p>
      </div>
     
      </div>
     ))}

    </div>
     
     
     </div>
    )
  }
}
