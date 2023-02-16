import React from 'react'

const ToDoItem = ({todo:{text,complete}}) => {
  return (
    <div>
     {text}
     {complete ? <button>Mark as incomplete</button>: <button>Mark as complete</button>}
    </div>
  )
}

export default ToDoItem
