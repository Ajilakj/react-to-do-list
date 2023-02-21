import React from 'react';
import ToDoItem from './ToDoItem'

const ToDoList = ({todo, completeToDo}) => {
  return (
    <div>
      <p>X ToDo's Remaining</p>
      <ul>
        {todo.map((todo,index)=><ToDoItem key={index} index={index} todo={todo} completeToDo = {completeToDo}/>)}
      </ul>
    </div>
  )
}

export default ToDoList
