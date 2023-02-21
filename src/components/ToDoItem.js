import React from 'react';


const ToDoItem = ({todo:{text,complete}, index, completeToDo}) => {
  const style={
    complete:{ 
      textDecoration: complete ? "line-through" : "none"
    }
  }
  return (
    <div>
     <span style={style.complete}>{text}</span>
     {complete ? (
     <button onClick={()=>completeToDo(index)}>Mark as incomplete</button>
     ): (
     <button onClick={()=>completeToDo(index)}>Mark as complete</button>
    )}
    </div>
  )
}

export default ToDoItem
