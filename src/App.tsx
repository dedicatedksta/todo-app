import React, { useEffect, useState } from 'react';
import Input from './components/input/Input';
import Todos from './components/todos/Todos';
import { ITodo } from './types';

function App() {

  const [todos,setTodos]=useState<ITodo[]>(getTodos())

  function getTodos(){
    const todos=localStorage.getItem('todos')
    return todos? JSON.parse(todos):[]
  }
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

 
  return (
    <div className="App">
      <Input setTodos={setTodos}/>
      <Todos setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
