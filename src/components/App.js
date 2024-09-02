
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todoVal,setTodoVal]=useState('');
  const[todos,setTodos]=useState([]);
  function handleAddtodo(){
    setTodos([...todos,todoVal]);
    setTodoVal(""); 
  }
  function handleDelete(index){
    const newTodo=todos.filter((_, i) => i !== index);
    setTodos(newTodo)
  }
  return (
    <div>
        <h1>TO-DO LIST</h1>
        <input type="text"  value={todoVal} onChange={(e)=>setTodoVal(e.target.value)}/>
        <button onClick={handleAddtodo}>Add to-do</button>
        <ul>
          {todos.map((todo,ind)=>(
            <li key={ind}>{todo}
            <button onClick={()=>handleDelete(ind)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
