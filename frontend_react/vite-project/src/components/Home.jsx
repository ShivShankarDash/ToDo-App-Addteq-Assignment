import { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsPencil, BsPencilFill, BsTrashFill } from 'react-icons/bs';
import EditAction from './EditAction';


function Home() {
  const [todos, setTodos] = useState([])
  const [isVisible,setIsVisible] = useState(false)
  const [editToDoId, setToDoId] = useState(null)
  
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/todos")
    .then(result => setTodos(result.data))
    .catch(error => console.log(error))
  },[])
  const handleEdit = (id) =>{
    
        axios.put("http://localhost:3000/api/v1/todo/status/" + id)
        .then(result => location.reload())
        .catch(error => console.log(error))
     
  }

  const handleDelete = (id) =>{
    axios.delete("http://localhost:3000/api/v1/todo/" + id)
    .then(result => location.reload())
    .catch(error => console.log(error))
  }

  const toggleVisibilty = () => {
    setIsVisible(prevState => !prevState)
  }
  const handleChange = (id) =>{
    setToDoId(id)
  }
  

  return (
    
      <div className='home'>
       <h1>Add tasks</h1>
       <CreateTodo></CreateTodo>
       <br></br>
       {isVisible && <EditAction id={editToDoId}/>}
       <br></br>
       {
        todos.length === 0 ? <h2>No tasks in the list</h2> : (todos.map(todo => (
            <div className="task" key={todo.id}>
             <div className='checkbox' onClick={()=>handleEdit(todo.id)}>
                {todo.completed ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>: <BsCircleFill className='icon' />}
             </div>
             <p className={todo.completed ? "line_through" : ""}>{todo.title}</p>
             <div>
                <span><BsPencilFill className='icon' onClick={(e)=>{handleChange(todo.id); toggleVisibilty();}}></BsPencilFill></span>
                <span><BsTrashFill className='icon' onClick={()=>handleDelete(todo.id)}></BsTrashFill></span>
                </div>
            </div>
          )))
       }
     
      </div>
  )
}

export default Home
