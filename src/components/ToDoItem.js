import React from 'react';


const ToDoItem = ({todo:{text,complete}}) => {
  const style={
    complete:{ 
      textDecoration: complete ? "line-through" : "none"
    }
  }
  return (
    <div>
     <span style={style.complete}>{text}</span>
     {complete ? <button>Mark as incomplete</button>: <button>Mark as complete</button>}
    </div>
  )
}

export default ToDoItem
