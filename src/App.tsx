import React, { useEffect, useMemo, useState } from 'react';
import Input from './components/input/Input';
import Todos from './components/todos/Todos';
import { ITodo } from './types';

function App() {

  const [todos,setTodos]=useState<ITodo[]>(getTodos())
  const [sort,setSort]=useState<string>('all')

  function getTodos(){
    const todos=localStorage.getItem('todos')
    return todos? JSON.parse(todos):[]
  }
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const sortedPosts=useMemo(()=>{
    switch(sort){
      case 'all':
        return todos
      case 'complete':
        return todos.filter(t=>t.completed)
      case 'incomplete':
        return todos.filter(t=>!t.completed)
    }
  },[todos,sort])
 
 
  return (
    <div className="App">
      <Input setTodos={setTodos}/>
      <Todos setTodos={setTodos} todos={sortedPosts!} sort={sort} setSort={setSort}/>
    </div>
  );
}

export default App;
