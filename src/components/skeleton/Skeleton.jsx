import classes from './style.module.css';

function Skeleton({ count = 1, type = 'banner' }) {
	return (
		<>
			{count > 1 ? (
				<ul className={classes.skeletonList}>
					{[...Array(count)].map((_, index) => (
						<li
							key={index}
							className={type === 'item' ? classes.item : classes.banner}
						></li>
					))}
				</ul>
			) : (
				<li className={type === 'item' ? classes.item : classes.banner}></li>
			)}
		</>
	);
}

export default Skeleton;
