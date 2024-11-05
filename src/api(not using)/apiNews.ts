import axios from 'axios';
import {
	CategoriesApiResponse,
	NewsApiResponse,
	ParamsType,
} from '../interfaces';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

export const getLatestNews = async (): Promise<NewsApiResponse> => {
	const options = {
		params: {
			apiKey: API_KEY,
		},
	};
	try {
		const response = await axios.get<NewsApiResponse>(
			`${BASE_URL}latest-news`,
			options
		);
		return response.data;
	} catch (e) {
		console.log(e);
		return { news: [], page: 1, status: 'error' };
	}
};

export const getNews = async (
	params?: ParamsType
): Promise<NewsApiResponse> => {
	const { page_number = 1, page_size = 10, category, keywords } = params || {};

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
		const response = await axios.get<NewsApiResponse>(
			`${BASE_URL}search`,
			options
		);
		return response.data;
	} catch (e) {
		console.log(e);
		return { news: [], page: 1, status: 'error' };
	}
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
	const options = {
		params: {
			apiKey: API_KEY,
		},
	};

	try {
		const response = await axios.get<CategoriesApiResponse>(
			`${BASE_URL}available/categories`,
			options
		);
		return response.data;
	} catch (e) {
		console.log(e);
		return { categories: [], description: '', status: 'error' };
	}
};
