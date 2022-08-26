import React, { FC, useEffect, useMemo, useState } from "react";
import { ITodo } from "../../types";
import Indicator from "../indicator/Indicator";
import Todo from "../todo/Todo";
import styles from "./Todos.module.css"
import { AnimatePresence, motion } from "framer-motion";

interface TodosProps{
  todos:ITodo[],
  setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>,
  sort:string,
  setSort:React.Dispatch<React.SetStateAction<string>>
}

const Todos:FC<TodosProps> = ({todos,setTodos,sort,setSort}) => {
  
  const clearTodos=()=>{
    setTodos([])
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
    <Indicator sort={sort} setSort={setSort}  clearTodos={clearTodos} itemLength={todos.length}/>
  </>
};

export default Todos;
