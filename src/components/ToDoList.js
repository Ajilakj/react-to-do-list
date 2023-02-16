import React from 'react';
import ToDoItem from './ToDoItem'

const ToDoList = ({todo}) => {
  return (
    <div>
      <p>X ToDo's Remaining</p>
      <ul>
        {todo.map((todo,index)=><ToDoItem key={index} todo={todo}/>)}
      </ul>
    </div>
  )
}

export default ToDoList
