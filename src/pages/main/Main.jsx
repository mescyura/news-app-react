import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';

import { getCategories, getNews } from '../../api/apiNews';

import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useFilter } from '../../hooks/useFilters';

import NewsBanner from '../../components/newsBanner/NewsBanner';
import NewsList from '../../components/newsList/NewsList';
import Pagination from '../../components/pagination/Pagination';
import Categories from '../../components/categories/Categories';
import Search from '../../components/search/Search';

import classes from './main.module.css';

function Main() {
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

	const { data: dataCategories } = useFetch(getCategories);

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
		<main className={classes.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategory={filters.category}
					setSelectedCategory={category => changeFilter('category', category)}
				/>
			) : null}
			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>

			<NewsBanner
				isLoading={isLoading}
				news={data && data.news.length > 0 && data.news[0]}
			/>
			<Pagination
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			/>
			<NewsList isLoading={isLoading} news={data?.news} />
			<Pagination
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			/>
		</main>
	);
}

export default Main;
