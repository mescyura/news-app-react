import classes from './style.module.css';

function Pagination({
	currentPage,
	totalPages,
	handlePrevPage,
	handleChangePage,
	handleNextPage,
}) {
	return (
		<div className={classes.pagination}>
			<button
				className={classes.paginationArrow}
				disabled={currentPage <= 1}
				onClick={handlePrevPage}
			>
				{'<'}
			</button>

			{[...Array(totalPages)].map((_, index) => {
				return (
					<button
						key={index}
						className={classes.paginationBtn}
						disabled={index + 1 === currentPage}
						onClick={() => handleChangePage(index + 1)}
					>
						{index + 1}
					</button>
				);
			})}

			<button
				className={classes.paginationArrow}
				disabled={currentPage >= 10}
				onClick={handleNextPage}
			>
				{'>'}
			</button>
		</div>
	);
}

export default Pagination;
