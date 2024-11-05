import { TOTAL_PAGES } from '../../constants/constants';

import { useGetNewsQuery } from '../../store/services/newsApi';
import { useDebounce } from '../../hooks/useDebounce';

import NewsFilters from '../newsFilters/NewsFilters';
import NewsList from '../newsList/NewsList';
import PaginationWrapper from '../paginationWrapper/PaginationWrapper';

import classes from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

function NewsByFilters() {
	const dispatch = useAppDispatch();

	const filters = useAppSelector(state => state.news.filters);

	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	});

	const handlePrevPage = () => {
		if (filters.page_number > 1)
			dispatch(
				setFilters({ key: 'page_number', value: filters.page_number - 1 })
			);
	};

	const handleChangePage = (pageNumber: number) => {
		dispatch(setFilters({ key: 'page_number', value: pageNumber }));
	};

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES)
			dispatch(
				setFilters({ key: 'page_number', value: filters.page_number + 1 })
			);
	};

	return (
		<section className={classes.newsByFilters}>
			<NewsFilters filters={filters} />

			<PaginationWrapper
				top
				bottom
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	);
}

export default NewsByFilters;
