import React from 'react';
import ToDoItem from './ToDoItem'

const ToDoList = ({todos, completeToDo, deleteToDo}) => {
  return (
    <div>
      <p>{todos.length} ToDo's Remaining</p>
      <ul>
        {todos.map((todo,index)=><ToDoItem key={index} index={index} todo={todo} completeToDo = {completeToDo}/>)}
      </ul>
    </div>
  )
}

export default ToDoList
