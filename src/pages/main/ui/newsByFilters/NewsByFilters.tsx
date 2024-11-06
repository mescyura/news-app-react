import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { setFilters } from '@/entities/news/model/newsSlice';

import { TOTAL_PAGES } from '@/shared/constants/constants';
import { useDebounce } from '@/shared/hooks/useDebounce';

import { NewsList } from '@/widgets/news/ui';
import { Pagination } from '@/features/pagination';
import NewsFilters from '../newsFilters/NewsFilters';

import classes from './style.module.css';

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

			<Pagination
				top
				bottom
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</Pagination>
		</section>
	);
}

export default NewsByFilters;
