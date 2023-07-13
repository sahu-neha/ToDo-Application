import React from "react";
import { useNavigate } from "react-router-dom";

const FloatButton = () => {
	const navigate = useNavigate();

	const buttonStyle = {
		padding: "10px 22px",
		color: "white",
		background: "teal",
		border: "none",
		cursor: "pointer",
		position: "fixed",
		zIndex: 200,
		top: 20,
		left: 40,
		borderRadius: "7px",
	};

	return (
		<button
			style={buttonStyle}
			onClick={() => {
				navigate("/", { replace: true });
			}}
		>
			{" "}
			Log out
		</button>
	);
};

export default FloatButton;
