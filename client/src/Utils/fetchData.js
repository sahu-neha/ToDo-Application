export const fetchData = async (url) => {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		return { data, total: response.headers.get("X-Total-Count") };
	} catch (error) {
		console.log(error);
	}
};
