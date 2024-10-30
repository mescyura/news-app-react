import React from 'react';
import classes from './style.module.css';

interface SkeletonProps {
	count: number;
	type: 'banner' | 'item';
}

const Skeleton: React.FC<SkeletonProps> = ({ count = 1, type = 'banner' }) => {
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
};

export default Skeleton;
