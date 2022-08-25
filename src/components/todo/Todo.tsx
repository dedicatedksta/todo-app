import React, { FC } from "react";
import {BsCheck} from "react-icons/bs"
import { ITodo } from "../../types";
import styles from "./Todo.module.scss"
import {IoMdTrash} from "react-icons/io"
import { motion } from "framer-motion";

interface TodoProps{
  todo:ITodo,
  last?:boolean,
  setTodos:React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Todo:FC<TodoProps> = ({todo,last,setTodos}) => {

  const handleClick=(id:string)=>{
    setTodos(prev=>{
      const newTodos=prev.map(t=>t.id===id?{...t,completed:!t.completed}:t)
      return newTodos
    })
  }

  const deleteTodo=(e:React.MouseEvent<HTMLOrSVGElement>,id:string)=>{
    e.stopPropagation()
    setTodos(prev=>{
      const newTodos=prev.filter(t=>t.id!==id)
      return newTodos
    })
  }

  return <motion.li initial={{height:0}} animate={{height:'58px'}} exit={{scaleY:0}} onClick={()=>handleClick(todo.id)} className={`${styles.todo} ${todo.completed?styles.completed:""}`}>
      <div>
        <BsCheck/>
      </div>
      <span  className={last?styles.last:""}>
        {todo.body}
      </span>
      <IoMdTrash onClick={(e)=>deleteTodo(e,todo.id)} className={styles.trash}/>
    </motion.li>
};

export default Todo;
