import React from 'react';
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';
import List from './List';
import Counter from '../component 5/Counter';


export default function Nav() {
  return (
    <div>
        <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-success  alert-primary p-2 m-2 '>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">

            <Link className="nav-link " to="/" exact>Home</Link>
            </li>   
            <li class="nav-item">

            <Link className="nav-link "  to="/Counter" >counter</Link>
            </li> 

            </ul>

        </nav>
        <Routes>
            <Route path='/' element={<List/>}></Route>
            <Route path='/counter'element={<Counter/>}></Route>
        </Routes>





        </BrowserRouter>
    </div>

  )
}
