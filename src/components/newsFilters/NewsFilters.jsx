import { getCategories } from '../../api/apiNews';

import { useFetch } from '../../hooks/useFetch';

import Categories from '../categories/Categories';
import Search from '../search/Search';

import classes from './style.module.css';

function NewsFilters({ filters, changeFilter }) {
	const { data: dataCategories } = useFetch(getCategories);

	return (
		<div className={classes.newsFilters}>
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
		</div>
	);
}

export default NewsFilters;
