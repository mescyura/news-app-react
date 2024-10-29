import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

// const options = {
// 	params: {
// 		apiKey: API_KEY,
// 	},
// };

export const getNews = async (page_number = 1, page_size = 10) => {
	const options = {
		params: {
			apiKey: API_KEY,
			page_number,
			page_size,
		},
	};

	try {
		const response = await axios.get(`${BASE_URL}search`, options);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
