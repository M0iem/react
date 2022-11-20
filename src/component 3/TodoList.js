import {React,useState} from "react";
import Header from "./Header";

export default function TodoList(){
const[title,setTitle]=useState("")  
const[body,setBody]=useState("")  
const[Todos, setTodos]=useState([
    {
            title:"Learn React",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus necessitatibus, fugit iure rerum illo eligendi quam a aperiam vero cum, similique architecto beatae voluptates labore nesciunt nihil repudiandae perspiciatis hic!"
    },{
           title:"Learn React",
           body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus necessitatibus, fugit iure rerum illo eligendi quam a aperiam vero cum, similique architecto beatae voluptates labore nesciunt nihil repudiandae perspiciatis hic!"
        },
        {
            title:"Learn Php",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus necessitatibus, fugit iure rerum illo eligendi quam a aperiam vero cum, similique architecto beatae voluptates labore nesciunt nihil repudiandae perspiciatis hic!"
            },
     {
            title:"Learn js",
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus necessitatibus, fugit iure rerum illo eligendi quam a aperiam vero cum, similique architecto beatae voluptates labore nesciunt nihil repudiandae perspiciatis hic!"
      },
]);
const add=(e)=>{
    e.preventDefault();
    setTodos(prev=>[...prev,{title,body}]);
    setTitle("");
    setBody("");

}
return(
    <div className="mt-5"> 
        <Header title="Creat Todo List"/>
        
        <form className="container ">
            <label>Title :</label><br/>
            <input className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} type="text" /><br/>
            <label>Body :</label>
            <textarea className="form-control" value={body} onChange={(e)=>setBody(e.target.value)}></textarea> <br/>
            <button className="btn btn-dark form-control" onClick={add} >Add </button>

        </form>
        <br/>
        {Todos.map((todo,index)=>
        <div  key={index}>
        <h2 className="text-center alert alert-warning">{todo.title}</h2>    
        <p className="text-center alert ">{todo.body}</p>   <br/> 
        </div>
        )}





    </div>
)

}
