import axios from 'axios';

async function quortGenerator() {
	try {
		const response = await axios.get('https://api.quotable.io/random/quotes/random');
		return response.data;
	} catch (error) {
		console.log(`We got an error: ${error}`);
		return null;
	}
}

export default quortGenerator;
