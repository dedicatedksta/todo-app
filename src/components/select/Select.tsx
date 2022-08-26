import React, { FC } from "react";
import styles from "./Select.module.css"

interface SelectProps{
  sort:string,
  setSort:React.Dispatch<React.SetStateAction<string>>
}

const Select:FC<SelectProps> = ({sort,setSort}) => {
  return  <select className={styles.select_wrapper} value={sort} onChange={s=>setSort(s.target.value)} >
    <option value="all">All todos</option>
    <option value="complete">Complete</option>
    <option value="incomplete">Incomplete</option>
  </select>;
};

export default Select;
