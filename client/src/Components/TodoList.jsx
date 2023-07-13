import React from "react";

const TodoList = ({
	id,
	i,
	limit,
	page,
	title,
	status,
	statusToggler,
	isDeleted,
}) => {
	const buttonStyle = {
		padding: "10px 22px",
		color: "white",
		background: "teal",
		borderRadius: "6px",
		border: "none",
		cursor: "pointer",
	};

	return (
		<tr>
			<td>{i + 1 + (page - 1) * limit}.</td>
			<td>{title}</td>
			<td>{status ? "Done" : "Pending"}</td>
			<td>
				<button style={buttonStyle} onClick={() => statusToggler(id)}>
					Change
				</button>
			</td>
			<td>
				<button style={buttonStyle} onClick={() => isDeleted(id)}>
					Delete
				</button>
			</td>
		</tr>
	);
};

export default TodoList;
