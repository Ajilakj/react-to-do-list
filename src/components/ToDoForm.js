import React from 'react';
import {useState} from "react";


const ToDoForm = ({addTodo}) => {
  const [newTodo, setNewTodo]=useState({
    text:"",
    complete:false
  });
  const submitHandler=(e)=>{
    e.preventDefault();
    if(newTodo.text){ // not empty string
      addTodo(newTodo);
    }
  }
  return (
    <form>
      <input type="text" onChange={(e)=>setNewTodo({...newTodo,text:e.target.value})}/>
      <button onClick={submitHandler}>Add</button>
    </form>
  )
}

export default ToDoForm
