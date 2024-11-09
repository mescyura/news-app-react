import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import { setFilters } from '@/entities/news/model/newsSlice';

import { Categories } from '@/features/categories';
import { Search } from '@/features/search';
import { Slider } from '@/features/slider';

import { IFilters } from '@/shared/interfaces';
import classes from './style.module.css';
import { CategoriesType } from '@/entities/categories';

interface Props {
	filters: IFilters;
	categories: CategoriesType[];
}

function NewsFilters({ filters, categories }: Props) {
	const { isDark } = useTheme();

	const dispatch = useAppDispatch();

	return (
		<div className={classes.newsFilters}>
			{categories ? (
				<Slider isDark={isDark}>
					<Categories
						categories={categories}
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
