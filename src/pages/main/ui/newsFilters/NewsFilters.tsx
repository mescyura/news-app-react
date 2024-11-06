import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useGetCategoriesQuery } from '@/entities/categories/api/categoriesApi';
import { setFilters } from '@/entities/news/model/newsSlice';

import { Categories } from '@/features/categories';
import { Search } from '@/features/search';
import { Slider } from '@/features/slider';

import { IFilters } from '@/shared/interfaces';
import classes from './style.module.css';

interface Props {
	filters: IFilters;
}

function NewsFilters({ filters }: Props) {
	const { isDark } = useTheme();
	const { data } = useGetCategoriesQuery(null);
	const dispatch = useAppDispatch();

	return (
		<div className={classes.newsFilters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category =>
							dispatch(setFilters({ key: 'category', value: category }))
						}
					/>
				</Slider>
			) : null}
			<Search
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}
			/>
		</div>
	);
}

export default NewsFilters;
