import {useState} from "react";
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import React from 'react';

function App() {
  const [todos, setTodos] = useState([{
    text:"Buy milk",
    complete:false
  },
  {
    text:"Go jogging",
    complete:true
  }
  ]);

  const addTodo=(newTodo) => setTodos([newTodo, ...todos])

  const completeTodo =(id) => {
    const updatedToDos=todos.map((todo,index) => {
      if(index===id){
        return {
          ...todos,
          complete:todo.complete
        }
      }
      return todos;
    })
    setTodos(updatedToDos);
  }

  const deleteToDo = (id) =>{
    const updatedTodos = todos.filter((todo, index) => index!==id);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <Header addTodo={addTodo}/>
      <ToDoList todos={todos} completeTodo = {completeTodo} deleteToDo = {deleteToDo}/>
    </div>
  );
}

export default App;
