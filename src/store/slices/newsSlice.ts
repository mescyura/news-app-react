import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilters, INews } from '../../interfaces';
import { PAGE_SIZE } from '../../constants/constants';

// Define a type for the slice state
export interface State {
	news: INews[];
	filters: IFilters;
}

// Define the initial state using that type
const initialState: State = {
	news: [],
	filters: {
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	},
};

export const newsSlice = createSlice({
	name: 'news',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setNews: (state, action: PayloadAction<INews[]>) => {
			state.news = action.payload;
		},

		setFilters: (
			state,
			action: PayloadAction<{ key: string; value: string | number | null }>
		) => {
			const { key, value } = action.payload;
			state.filters = { ...state.filters, [key]: value };
		},
	},
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
