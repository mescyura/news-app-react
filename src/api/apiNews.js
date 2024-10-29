import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

const options = {
	params: {
		apiKey: API_KEY,
	},
};

export const getNews = async () => {
	try {
		const response = await axios.get(`${BASE_URL}latest-news`, options);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
