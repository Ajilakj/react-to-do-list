import React from 'react';
import ToDoForm from './ToDoForm';

const Header = (props) => {
  return (
    <header>
      <h1>To Do List in React</h1>
      <ToDoForm {...props}/>
    </header>
  )
}

export default Header
