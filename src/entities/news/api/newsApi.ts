// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsApiResponse } from '../model/types';

import { ParamsType } from '@/shared/interfaces';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

// Define a service using a base URL and expected endpoints
export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getNews: builder.query<NewsApiResponse, ParamsType>({
			keepUnusedDataFor: 0,
			query: params => {
				const {
					page_number = 1,
					page_size = 10,
					category,
					keywords,
				} = params || {};

				return {
					url: 'search',
					params: {
						apiKey: API_KEY,
						page_number,
						page_size,
						category,
						keywords,
					},
				};
			},
		}),

		getLatestNews: builder.query<NewsApiResponse, null>({
			query: () => {
				return {
					url: 'latest-news',
					params: {
						apiKey: API_KEY,
					},
				};
			},
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
