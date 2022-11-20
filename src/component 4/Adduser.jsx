import React,{useState} from 'react'
import Header from './Header';
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
export default function Adduser() {
    const [nom ,setNom]=useState("");
    const [email ,setEmail]=useState("");
    const [website ,setWebsite]=useState("");
    const [img ,setImg]=useState("");
    const fimg=(e)=>{
        const file=e.target.files[0];
        if(file){
            const url=URL.createObjectURL(file)
            setImg(url)
        }
    }

    const [users,setUsers]=useState([
        // {
        //     nom:"ali baba",
        //     email:"ali.baba@gmail.com",
        //     website:"www.ali.ma",
        //     img:{img3}

        // },
        // {
        //     nom:"yafir mariem",
        //     email:"yafir.meryem@gmail.com",
        //     website:"www.meryem.com",
        //     img:{img4}

        // },
        // {
        //     nom:"chaimaa mahy",
        //     email:"mahy.chaimaa@gmail.com",
        //     website:"www.mahy.com",
        //     img:{img3}

        // }
        
    ])
    const add=(e)=>{
        e.preventDefault();
        setUsers(prev=>[...prev,{nom,email,website,img}]);
        setNom("");
        setEmail("");
        setImg("");
        setWebsite("");
    }



  return (
    <div>
          <Header title='Add New User '/>
        <form className='form' >
     
            <label htmlFor="">Add name: </label><br />
            <input className='form-control' type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
            <label htmlFor="">Add Email: </label><br />
            <input className='form-control' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Add ur website: </label><br />
            <input className='form-control' type="text" value={website} onChange={(e)=>setWebsite(e.target.value)} />
            <label htmlFor="">New photo: </label><br />
            <input className='form-control' type="file"  onChange={fimg} /> <br />


            <button className='btn btn-success form-control' onClick={add} >Add</button>
        </form>

        <div className='row'>
        {users.map((user,index)=>
        
                    <div className="card col-4 mt-5 p-2"  key={index}>
                    
                    <img src={user.img} alt="" className='card-img m-1'/>
                    <p className='card-text text-capitalize '>Nom :{user.nom}</p>
                    <p>Email : {user.email}</p>
                    <p>Website : {user.website}</p>
    

            </div>
        )}

        </div>
 

    </div>
  )
}
