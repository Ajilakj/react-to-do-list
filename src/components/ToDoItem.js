import React from 'react';
import {useState} from "react";


const ToDoItem = ({todo: { text, complete}, index, completeToDo, deleteToDo}) => {
  const style={
    complete:{ 
      textDecoration: complete ? "line-through" : "none"
    }
  }

  const [updatedTodo, setUpdatedTodo] = useState(null)

  return (
    // {updatedTodo ?(

    // ) : (
    <div>
      <span style={style.complete}>{text}</span>
      {complete ? (
      <button onClick={()=>completeToDo(index)}>Mark as incomplete</button>
      ): (
      <button onClick={()=>completeToDo(index)}>Mark as complete</button>
      )}
      <button onClick={()=>deleteToDo(index)}>Delete</button>
    </div>
  )
}

export default ToDoItem
