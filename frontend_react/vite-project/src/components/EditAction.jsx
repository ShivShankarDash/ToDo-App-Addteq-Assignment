import React, { useState } from 'react';
import axios from 'axios'


function EditAction({id}) {
 
    const [toDo,setToDo] = useState()
    const [title,setTitle] = useState()
    const handleChange = () => {
       
            axios.put("http://localhost:3000/api/v1/todo/" + id, {title})
            .then(result => location.reload())
            .catch(error => console.log(error))
        
    }

  return (
    <div>
      <input className = "editText" type="text" placeholder="Edit the existing task and click on done" onChange={(e)=>setTitle(e.target.value)} />
      <button onClick={handleChange}>Done</button>
    </div>
  );
}

export default EditAction;
