import FloatButton from "./Components/FloatButton";
import { AuthContext } from "./Components/HOC/AuthContextProvider";
import Routing from "./Routing/Routing";

import { useContext } from "react";

function App() {
	const { isAuthenticated } = useContext(AuthContext);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				textAlign: "center",
				alignItems: "center",
				marginBottom: "70px",
				marginTop: "50px",
			}}
		>
			{isAuthenticated ? <FloatButton /> : <></>}
			<Routing />
		</div>
	);
}

export default App;
