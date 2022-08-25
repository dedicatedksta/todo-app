import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../../types";
import styles from "./Indicator.module.scss"

interface IndicatorProps{
  itemLength:number,
  clearTodos:()=>void,
  completeTodos:()=>void
}

const Indicator:FC<IndicatorProps> = ({itemLength,clearTodos,completeTodos}) => {


  return <div className={styles.indicator_wrapper}>
    <span>
      {itemLength} Items
    </span>
    <div>
      <button onClick={()=>clearTodos()}>Clear</button>
      <button onClick={()=>completeTodos()}>Complete</button>
    </div>
  </div>;
};

export default Indicator;
