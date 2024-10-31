import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getLatestNews = async () => {
	const options = {
		params: {
			apiKey: API_KEY,
		},
	};
	try {
		const response = await axios.get(`${BASE_URL}latest-news`, options);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

export const getNews = async ({
	page_number = 1,
	page_size = 10,
	category,
	keywords,
}) => {
	const options = {
		params: {
			apiKey: API_KEY,
			page_number,
			page_size,
			category,
			keywords,
		},
	};

	try {
		const response = await axios.get(`${BASE_URL}search`, options);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};

export const getCategories = async () => {
	const options = {
		params: {
			apiKey: API_KEY,
		},
	};

	try {
		const response = await axios.get(
			`${BASE_URL}available/categories`,
			options
		);
		return response.data;
	} catch (e) {
		console.log(e);
	}
};
