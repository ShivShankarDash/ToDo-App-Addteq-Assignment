import { useState } from "react";
import axios from 'axios'

function CreateTodo(){
    const [toDo,setToDo] = useState()
    const handleAdd = () => {
        if(toDo){
            axios.post("http://localhost:3000/api/v1/todo", {toDo})
            .then(result => location.reload())
            .catch(err => console.log(error))
        }
       
    }

    return (
        <div className="create-form">
            <input type="text" placeholder="Enter task" onChange={(e)=>setToDo(e.target.value)}></input>
            <button type="button" onClick={handleAdd} >Add a task</button>
        </div>
    )

}

export default CreateTodo