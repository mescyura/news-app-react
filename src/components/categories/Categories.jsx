import { forwardRef } from 'react';
import classes from './style.module.css';

const Categories = forwardRef(
	({ categories, setSelectedCategory, selectedCategory }, ref) => {
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
