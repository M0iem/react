import React from 'react';
import Form  from './Form';
import Counter  from './Counter';
import {Route,Link,Routes,BrowserRouter} from 'react-router-dom';
import TodoList from './TodoList';


export default function Nav() {
  return (
    <div>
        <BrowserRouter>
        <nav className='navbar navbar-expand-lg navbar-success bg-light p-2 m-2 '>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">

            <Link className="nav-link active" to="/" exact>Home</Link>
            </li>   
            <li class="nav-item">

            <Link className="nav-link active"  to="/counter" >counter</Link>
            </li>   
            <li class="nav-item">

            <Link className="nav-link active"  to="/todolist" >TodoList</Link>
            </li>   

            </ul>

        </nav>
        <Routes>
            <Route path='/' element={<Form/>}></Route>
            <Route path='/counter'element={<Counter/>}></Route>
            <Route path='/todolist'element={<TodoList/>}></Route>
        </Routes>





        </BrowserRouter>
    </div>

  )
}
