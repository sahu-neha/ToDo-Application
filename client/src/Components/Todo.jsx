import React, { useEffect, useState } from "react";
import { fetchData } from "../Utils/fetchData";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { deleteData } from "../Utils/deleteData";
import { changeStatus } from "../Utils/changeStatus";
import { addData } from "../Utils/addData";
import Pagination from "./Pagination";

const Todo = () => {
	const url = `${process.env.REACT_APP_API_URL}/todo`;
	// "http://localhost:8080/todo";

	const [todos, setTodos] = useState([]);

	const [limit, setLimit] = useState(5);

	const [currentPage, setCurrentPage] = useState(1);

	const [totalData, setTotalData] = useState(0);

	const handlePagination = (page) => {
		setCurrentPage(page);
	};

	const handleFetchData = (url) => {
		fetchData(`${url}?_limit=${limit}&_page=${currentPage}`).then((res) => {
			setTodos(res.data);
			setTotalData(res.total);
		});
	};

	const addNewTodo = async (newTodo) => {
		await addData(url, newTodo);
		handleFetchData(url);
		window.scrollTo(0, document.documentElement.scrollHeight);
	};

	const statusToggler = async (id) => {
		let payload = todos.find((ele) => ele.id === id);
		await changeStatus(url, id, payload.status);
		handleFetchData(url);
	};

	const isDeleted = async (id) => {
		await deleteData(url, id);
		handleFetchData(url);
	};

	useEffect(() => {
		handleFetchData(url);
	}, [currentPage, limit]);

	return (
		<div>
			<AddTodo addNewTodo={addNewTodo} />

			<table
				style={{
					borderSpacing: "20px",
					marginTop: "40px",
					marginBottom: "40px",
				}}
			>
				<thead>
					<tr>
						<th>S.No.</th>
						<th>Title</th>
						<th>Status</th>
						<th>Toggle Status</th>
						<th>Delete Status</th>
					</tr>
				</thead>

				<tbody>
					{todos.map((ele, i) => (
						<TodoList
							key={ele.id}
							{...ele}
							i={i}
							limit={limit}
							page={currentPage}
							statusToggler={statusToggler}
							isDeleted={isDeleted}
						/>
					))}
				</tbody>
			</table>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "auto",
					marginTop: "30px",
				}}
			>
				<Pagination
					totalPage={Math.ceil(totalData / limit)}
					handlePagination={handlePagination}
					currentPage={currentPage}
				/>

				<select
					onChange={(e) => {
						setLimit(e.target.value);
						setCurrentPage(1);
					}}
					style={{
						padding: "10px 22px",
						borderRadius: "6px",
						border: "1px solid teal",
					}}
				>
					<option value={limit}>Select limit</option>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={15}>15</option>
					<option value={20}>20</option>
				</select>
			</div>
		</div>
	);
};

export default Todo;
