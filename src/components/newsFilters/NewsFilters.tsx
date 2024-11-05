import { useTheme } from '../../context/ThemeContext';
import { useGetCategoriesQuery } from '../../store/services/newsApi';

import { IFilters } from '../../interfaces';
import Categories from '../categories/Categories';
import Search from '../search/Search';
import Slider from '../slider/Slider';

import classes from './style.module.css';
import { useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

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
