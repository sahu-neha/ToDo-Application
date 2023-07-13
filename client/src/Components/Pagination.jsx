import React from "react";

const Pagination = ({ totalPage, currentPage, handlePagination }) => {
	const totalButtonNumber = new Array(totalPage)
		.fill(0)
		.map((_, index) => index + 1);

	return (
		<div
			style={{
				display: "flex",
				margin: "auto",
				justifyContent: "center",
				gap: "10px",
			}}
		>
			{totalButtonNumber.map((ele, index) => {
				return (
					<button
						style={{
							background: index + 1 === currentPage ? "teal" : "white",
							color: "black",
							borderRadius: "6px",
							padding: "10px",
							border: "1px solid teal",
						}}
						onClick={() => handlePagination(index + 1)}
						key={index + 1}
					>
						{index + 1}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
