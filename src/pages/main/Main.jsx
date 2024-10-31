import { PAGE_SIZE } from '../../constants/constants';

import { getNews } from '../../api/apiNews';

import { useDebounce } from '../../hooks/useDebounce';
import { useFetch } from '../../hooks/useFetch';
import { useFilter } from '../../hooks/useFilters';

import LatestNews from '../../components/latestNews/LatestNews';
import NewsByFilters from '../../components/newsByFilters/NewsByFilters';

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

	return (
		<main className={classes.main}>
			<LatestNews isLoading={isLoading} bannersList={data && data.news} />
			<NewsByFilters
				isLoading={isLoading}
				news={data?.news}
				filters={filters}
				changeFilter={changeFilter}
			/>
		</main>
	);
}

export default Main;
