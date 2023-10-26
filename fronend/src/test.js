import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Test = () => {

    //read all data from database
    const [users, setUsers] = useState([])

   useEffect (()=>{
axios.get("http://localhost:8000/")
.then (res=>setUsers(res.data))
.catch(err=>console.log(err))
  },[])



 //delete data from database

const handleDelete = (id)=>{
    axios.delete("http://localhost:8000/delete/"+id)
    .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((data) => {
              return data.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  
      }


return(

    <div className='container  flex justify-center items-center   '>
        <div>
        <h2 className='font-bold text-2xl  mb-20 mt-8'>MYSQL REACT CRUD APPLICATION </h2>
<button className='focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' >
                              <Link to={"/create"}>create</Link></button>
        
   


   <div>
    <table className=' text-sm text-left text-gray-500 dark:text-gray-400  '>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 '>
            <tr className='border-b bg-gray-50 font-bold '>
                
                <th scope="col" className="px-6 py-3 ">id</th>             
                <th scope="col" className="px-6 py-3 ">name</th>
                <th scope="col" className="px-6 py-3">email</th>
                <th scope="col" className="px-6 py-3">age</th>
                <th scope="col" className="px-6 py-3">actions</th>



            </tr>
        </thead>
        <tbody>
          
          
            {users.map((n, i)=> (
                
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={i}>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white" >{n.id}</td>

                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white" >{n.name}</td>


                    <td className="text-clip px-4  font-medium text-gray-900  dark:text-white">{n.email}</td>
                    <td className="text-clip px-4  font-medium text-gray-900  dark:text-white">{n.age}</td>
                    <td className="text-clip px-4  font-medium text-gray-900  dark:text-white">
                    <Link to={`/read/${n.id}`}>read </Link>
                    <button className='mr-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2  mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' 
                           onClick={()=>handleDelete(n.id)} 
                            >delete</button>                       
<button className='focus:outline-none mr-4  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' >
                              <Link to={`/update/${n.id}`}>edit</Link></button>                        </td>


                   
                </tr>
            ))}
        </tbody>
    
    </table>
</div>
</div>
</div>
)




            }

export default Test
