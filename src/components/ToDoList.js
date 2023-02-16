import React from 'react';
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  return (
    <div>
      <p>X ToDo's Remaining</p>
      <ul>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ul>
    </div>
  )
}

export default ToDoList
