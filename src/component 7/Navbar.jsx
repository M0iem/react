import React from 'react';
import Home  from './Home';
import Counter  from './Counter';
import img from '../logo192.png'

import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';


export default function Nav() {
  return (
    <div>
        <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-success bg-light p-2 m-2 '>
                <img src={img} alt="" width="40px" />
            <ul className="navbar-nav me-auto mx-3 px-2 mb-2 mb-lg-0">
            <li class="nav-item">

            <Link className="nav-link active" to="/" exact="True">Home</Link>
            </li>   
            <li class="nav-item">

            <Link className="nav-link active"  to="/Counter" >Counter</Link>
            </li>   

            </ul>

        </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/counter'element={<Counter/>}></Route>
        </Routes>




        </BrowserRouter>
    </div>

  )
}
