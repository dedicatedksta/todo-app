import React, { FC, useState } from "react";
import { BsArrow90DegDown } from "react-icons/bs";
import { ITodo } from "../../types";
import styles from "./Input.module.css";
import { nanoid } from "nanoid";

interface InputProps {
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Input: FC<InputProps> = ({ setTodos }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === "Enter") {
			addTodo();
		}
	};

	function addTodo() {
		const newTodo: ITodo = { id: nanoid(), body: value, completed: false };
		setTodos((prev) => [...prev, newTodo]);
		setValue("");
	}

	return (
		<div className={styles.input_wrapper}>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={handleSubmit}
				type="text"
				placeholder="Create a new todo..."
			/>
			<button onClick={() => addTodo()}>
				<BsArrow90DegDown className={styles.icon} />
			</button>
		</div>
	);
};

export default Input;
