import { useAppSelector } from '@/app/appStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useDebounce } from '@/shared/hooks/useDebounce';

import { NewsFilters } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/categories/api/categoriesApi';

import classes from './style.module.css';
import NewsListWithPagination from '../newsListWithPagination/newsListWithPagination';

function NewsByFilters() {
	const filters = useAppSelector(state => state.news.filters);

	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	});

	const { data: categories } = useGetCategoriesQuery(null);

	return (
		<section className={classes.newsByFilters}>
			<NewsFilters
				filters={filters}
				categories={categories?.categories || []}
			/>

			<NewsListWithPagination
				filters={filters}
				news={data && data.news}
				isLoading={isLoading}
			/>
		</section>
	);
}

export default NewsByFilters;
