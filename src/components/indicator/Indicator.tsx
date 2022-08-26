import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../../types";
import Select from "../select/Select";
import styles from "./Indicator.module.scss"

interface IndicatorProps{
  itemLength:number,
  clearTodos:()=>void,
  sort:string,
  setSort:React.Dispatch<React.SetStateAction<string>>
}

const Indicator:FC<IndicatorProps> = ({itemLength,clearTodos,sort,setSort}) => {


  return <div className={styles.indicator_wrapper}>
    <span>
      {itemLength} Items
    </span>
    <div>
      <button onClick={()=>clearTodos()}>Clear</button>
      <Select sort={sort} setSort={setSort}/>
    </div>
  </div>;
};

export default Indicator;
