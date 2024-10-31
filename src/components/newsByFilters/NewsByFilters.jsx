import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';

import { useFetch } from '../../hooks/useFetch';
import { useDebounce } from '../../hooks/useDebounce';
import { useFilter } from '../../hooks/useFilters';

import { getNews } from '../../api/apiNews';

import NewsFilters from '../newsFilters/NewsFilters';
import NewsList from '../newsList/NewsList';
import PaginationWrapper from '../paginationWrapper/PaginationWrapper';

import classes from './style.module.css';

function NewsByFilters() {
	const { filters, changeFilter } = useFilter({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	});

	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	});

	const handlePrevPage = () => {
		if (filters.page_number > 1)
			changeFilter('page_number', filters.page_number - 1);
	};

	const handleChangePage = pageNumber => {
		changeFilter('page_number', pageNumber);
	};

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES)
			changeFilter('page_number', filters.page_number + 1);
	};

	return (
		<section className={classes.newsByFilters}>
			<NewsFilters filters={filters} changeFilter={changeFilter} />

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
