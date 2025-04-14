import { useState, useEffect } from "react";

export function useFetch(url) {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

    async function getPost() {
		try {
			setLoading(true);
			const response = await fetch(url);
			const json = await response.json();
			setPosts(json);
		} catch (error) {
			console.error("Error fetching posts:", error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getPost(); // calling the custom hook
	}, [url]);

	{/*this'll re-fetch the details if the data at the backend changes
	this could happer in real time applications i.e. stock exchange webs */}
	// useEffect(() => { 
	// 	setInterval(getPost, 10 * 1000);
	// })

	return {
		posts,
		loading
	};
}

export default useFetch;