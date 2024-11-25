import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
   const loders = useLoaderData()
   const[userall,setUsers]=useState(loders)
   console.log(userall);
   const handleClick=_id=>{
      console.log(_id);
      fetch(`http://localhost:5000/users/${_id}`,{
         method:'delete'
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
         if(data.deletedCount>0){
            alert('Delete SuccessFully')
            const rimaing=userall.filter(user=>user._id !== _id)
            setUsers(rimaing)
         }
      })
   }
   return (
      <div>
         <h1>Counter email length {userall.length}</h1>
         <div>
            {
               userall.map(user=><p key={user._id}>{user.name} : {user.email} :{user._id}
               <Link to={`/users/${user._id}`}>
               <button>Update</button>
               </Link>
               <button onClick={()=> handleClick(user._id)}>X</button>
               </p>)
            }
         </div>
      </div>
   );
};

export default Users;