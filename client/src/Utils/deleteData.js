export const deleteData = async (url, id) => {
	try {
		const response = await fetch(`${url}/${id}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
