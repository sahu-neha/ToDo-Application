import React, { useEffect, useState, useContext } from "react";
import { fetchData } from "../Utils/fetchData";
import { useNavigate } from "react-router-dom";
import { addData } from "../Utils/addData";

import { AuthContext } from "../Components/HOC/AuthContextProvider";

const Login = () => {
	const navigate = useNavigate();

	const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

	const [loading, setLoading] = useState(false);

	const initialUserDetails = {
		email: "",
		password: "",
	};

	const [userDetails, setUserDetails] = useState(initialUserDetails);

	const [users, setUsers] = useState([]);

	const handleUserDetails = (e) => {
		setUserDetails({
			...userDetails,
			[e.target.name]: e.target.value,
		});
	};

	const signupHandler = () => {
		if (
			userDetails.email.trim().length === 0 ||
			userDetails.password.trim().length === 0
		)
			alert("Please enter valid details");

		const user = users.find((ele) => ele.email === userDetails.email);

		if (user) {
			alert("User already exists");
			return;
		}
		const newUser = {
			email: userDetails.email,
			password: userDetails.password,
		};

		addData("http://localhost:8080/user", newUser).then((res) => {
			setIsAuthenticated(true);
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				navigate("/todo", { replace: true });
			}, 4000);
			alert("User added successfully");
		});

		setUserDetails(initialUserDetails);
	};

	const loginHandler = () => {
		if (
			userDetails.email.trim().length === 0 ||
			userDetails.password.trim().length === 0
		)
			alert("Please enter valid details");

		const user = users.find((ele) => ele.email === userDetails.email);

		if (!user) {
			alert("User not found");
			return;
		}
		if (user.password !== userDetails.password) {
			alert("Password is incorrect");
			return;
		}
		alert("Login successful");
		navigate("/todo", { replace: true });
		setUserDetails(initialUserDetails);
	};

	useEffect(() => {
		fetchData("http://localhost:8080/user").then((res) => {
			setUsers(res.data);
		});
	}, []);

	const buttonStyle = {
		padding: "12px 26px",
		color: "white",
		background: "teal",
		borderRadius: "6px",
		border: "none",
		cursor: "pointer",
		marginRight: "20px",
	};

	const inputStyle = {
		padding: "10px 26px",
		borderRadius: "6px",
		border: "2px solid teal",
		opacity: "0.8",
		marginRight: "15px",
		outline: "none",
	};

	return (
		<div>
			<input
				style={inputStyle}
				type="email"
				placeholder="Enter your email"
				value={userDetails.email}
				onChange={handleUserDetails}
				name="email"
			/>
			<br />
			<br />
			<input
				style={inputStyle}
				type="password"
				placeholder="Enter your password"
				value={userDetails.password}
				onChange={handleUserDetails}
				name="password"
			/>
			<br />
			<br />
			<button style={buttonStyle} onClick={loginHandler}>
				Login
			</button>
			<button style={buttonStyle} onClick={signupHandler}>
				Sign up
			</button>
		</div>
	);
};

export default Login;
