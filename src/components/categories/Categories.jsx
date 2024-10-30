import classes from './style.module.css';

function Categories({ categories, selectedCategory, setSelectedCategory }) {
	return (
		<div className={classes.categories}>
			{categories.map(category => {
				console.log(category);

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
