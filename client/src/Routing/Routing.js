import { Routes, Route } from "react-router-dom";

import React from "react";
import Login from "../Page/Login";
import Todopage from "../Page/Todopage";

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/todo" element={<Todopage />} />
		</Routes>
	);
};

export default Routing;
