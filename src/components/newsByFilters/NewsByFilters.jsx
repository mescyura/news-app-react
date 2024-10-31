import { TOTAL_PAGES } from '../../constants/constants';

import Pagination from '../pagination/Pagination';
import NewsList from '../newsList/NewsList';

import classes from './style.module.css';
import NewsFilters from '../newsFilters/NewsFilters';

function NewsByFilters({ isLoading, news, filters, changeFilter }) {
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

			<Pagination
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			/>
			<NewsList isLoading={isLoading} news={news} />
			<Pagination
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			/>
		</section>
	);
}

export default NewsByFilters;
