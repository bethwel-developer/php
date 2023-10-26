import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams,Link } from 'react-router-dom';

const Update = () => {




    const {id} = useParams();
const navigate = useNavigate()

//to show data that is to be updates
    useEffect(() => {
      axios.get('http://localhost:8000/read/'+id)
      .then(res => setValues({id: res.data[0].id, name: res.data[0].name, email:res.data[0].email, age: res.data[0].age}))
      .catch(err => console.log(err))
  }, [id])


  const [values, setValues] = useState({
    id:"",
    name:"",
    email:"",
    age:"" 
});

//update data to table 
const handleUpdate =(e) =>{  
e.preventDefault();
axios.put("http://localhost:8000/update/"+id,values)
.then(res=>{console.log(res)
    navigate("/")
    })
    .catch(err=>console.log(err))
}





  return (
    <div  className='mt-52 flex justify-center items-center '> 
 
    <div className=' bg-zinc-300 rounded p-20'>
            <form onSubmit={handleUpdate}>
           
                
            <h1 className=" text-2xl font-bold mb-6 ">UPDATE USER</h1> 
             
            <div>
                    <input placeholder='Enter id' value={values.id} className="border-2 border-slate-300  pl-2 pr-28 mb-4 py-1.5" 
                    type="text" 
                    onChange={e=> setValues({...values,id:e.target.value})}
                   />
                </div>
            
                <div>
                    <input placeholder='Enter names' value={values.name} className="border-2 border-slate-300  pl-2 pr-28 mb-4 py-1.5" 
                    type="text" 
                    onChange={e=> setValues({...values,name:e.target.value})}
                   />
                </div>

                <div  >
                <input placeholder='Enter email' value={values.email} className="border-2 border-slate-300  pl-2 pr-28 mb-4 py-1.5" 
                    type="text" 
                    onChange={e=> setValues({...values,email:e.target.value})}
                   />
                </div>
                
                <div  >
                <input placeholder='Enter age' value={values.age} className="border-2 border-slate-300  pl-2 pr-28 mb-4 py-1.5" 
                    type="text" 
                    onChange={e=> setValues({...values,age:e.target.value})}
                   />
                </div>


               
                <button className='mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                >update user</button>
                <button className='mr-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-8 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' 
                            > <Link to="/">Cancel</Link></button>   
            </form>
            </div>
            </div>
  )
}

export default Update
