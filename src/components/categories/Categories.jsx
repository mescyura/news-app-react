import classes from './style.module.css';

function Categories({ categories, selectedCategory, setSelectedCategory }) {
	return (
		<div className={classes.categories}>
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

export default Categories;
