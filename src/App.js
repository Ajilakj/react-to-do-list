import {useState} from "react";
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import React from 'react';

function App() {
  const [todo, setTodo]=useState([{
    text:"Buy milk",
    complete:false
  },
  {
    text:"Go jogging",
    complete:true
  }
  ]);
  return (
    <div className="App">
      <Header/>
      <ToDoList todo={todo}/>
    </div>
  );
}

export default App;
