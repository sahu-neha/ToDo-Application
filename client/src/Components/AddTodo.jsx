import React, { useState } from "react";

const AddTodo = ({ addNewTodo }) => {
	const [todos, setTodos] = useState("");

	const addTodoHandler = () => {
		if (todos.trim().length === 0) return;
		const newTodo = {
			title: todos,
			status: false,
		};

		addNewTodo(newTodo);
		setTodos("");
	};

	return (
		<div
			style={{
				position: "fixed",
				background: "white",
				width: "100%",
				left: 0,
				top: 0,
				padding: "20px",
			}}
		>
			<input
				style={{
					padding: "10px 26px",
					borderRadius: "6px",
					border: "2px solid teal",
					opacity: "0.8",
					marginRight: "15px",
					outline: "none",
				}}
				type="text"
				placeholder="Enter Todo"
				value={todos}
				onChange={(e) => setTodos(e.target.value)}
			/>
			<button
				style={{
					padding: "12px 26px",
					color: "white",
					background: "teal",
					borderRadius: "6px",
					border: "none",
					cursor: "pointer",
				}}
				onClick={addTodoHandler}
			>
				Add Todo
			</button>
		</div>
	);
};

export default AddTodo;
