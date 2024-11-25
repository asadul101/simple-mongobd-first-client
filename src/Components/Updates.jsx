import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Updates = () => {
   const loders=useLoaderData()
   console.log(loders);
   const handlesubmit=e=>{
      e.preventDefault()
      const form=e.target;
      const name=form.name.value;
      const email=form.email.value;
      const UpdatedUsers={name,email}
      console.log(UpdatedUsers);
      fetch(`http://localhost:5000/users/${loders._id}`,{
         method:'put',
         headers:{
            'Content-type': 'application/json'
         },
         body:JSON.stringify(UpdatedUsers)
      })
      .then(res=>res.json())
      .then(data=>{
         console.log(data);
         if(data. modifiedCount>0){
            alert('User Update seccussFully')
         }
      })
   }
   return (
      <div>
         <h1>Users Name: {loders.name}</h1>
         <form onSubmit={handlesubmit}>
            <input type="text" name='name' defaultValue={loders.name} /><br />
            <input type="email" name="email" defaultValue={loders.email} id="" /><br />
            <input type="submit" value="Update" />
         </form>
      </div>
   );
};

export default Updates;