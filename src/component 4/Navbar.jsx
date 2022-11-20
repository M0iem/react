import React from 'react';
import Examen  from './Examen';
import User  from './User';
import img from '../logo192.png'

import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';
import Adduser from './Adduser';

export default function Nav() {
  return (
    <div>
        <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-success bg-light p-2 m-2 '>
                <img src={img} alt="" width="40px" />
            <ul className="navbar-nav me-auto mx-3 px-2 mb-2 mb-lg-0">
            <li class="nav-item">

            <Link className="nav-link active" to="/" exact="True">User</Link>
            </li>   
            <li class="nav-item">

            <Link className="nav-link active"  to="/examen" >Examen</Link>
            </li>   
            
            <li class="nav-item">

            <Link className="nav-link active"  to="/adduser" >Adduser</Link>
            </li>   

            </ul>

        </nav>
        <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/examen'element={<Examen/>}></Route>
            <Route path='/adduser'element={<Adduser/>}></Route>
        </Routes>




        </BrowserRouter>
    </div>

  )
}
