import React, { FC, useEffect, useMemo, useState } from "react";
import { ITodo } from "../../types";
import Indicator from "../indicator/Indicator";
import Todo from "../todo/Todo";
import styles from "./Todos.module.scss"
import { AnimatePresence, motion } from "framer-motion";

interface TodosProps{
  todos:ITodo[],
  setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Todos:FC<TodosProps> = ({todos,setTodos}) => {
  
  const clearTodos=()=>{
    setTodos([])
  }

  const completeTodos=()=>{
    setTodos(prev=>{
      const newTodos=prev.map(todo=>{
        return {...todo,completed:true}
      })
      return newTodos
    })
  }

  return <>
    <ul className={styles.todos_wrapper}>
      <AnimatePresence mode="popLayout">
      {todos.map((todo,i)=>
        i!==todos.length-1?<Todo key={todo.id} setTodos={setTodos} todo={todo}/>
        :<Todo key={todo.id} setTodos={setTodos} todo={todo} last={true}/>
        )}
      </AnimatePresence>
    </ul>
    <Indicator completeTodos={completeTodos}  clearTodos={clearTodos} itemLength={todos.length}/>
  </>
};

export default Todos;
