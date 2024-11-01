import { ForwardedRef, forwardRef } from 'react';
import classes from './style.module.css';
import { CategoriesType } from '../../interfaces';

interface Props {
	categories: CategoriesType[];
	setSelectedCategory: (category: CategoriesType | null) => void;
	selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
	(
		{ categories, setSelectedCategory, selectedCategory }: Props,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		return (
			<div ref={ref} className={classes.categories}>
				<button
					onClick={() => setSelectedCategory(null)}
					className={
						!selectedCategory
							? classes.categoriesActiveItem
							: classes.categoriesItem
					}
				>
					All
				</button>
				{categories.map(category => {
					return (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={
								selectedCategory === category
									? classes.categoriesActiveItem
									: classes.categoriesItem
							}
						>
							{category}
						</button>
					);
				})}
			</div>
		);
	}
);

Categories.displayName = 'Categories';

export default Categories;
