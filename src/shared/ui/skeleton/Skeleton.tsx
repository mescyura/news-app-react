import { DirectionType, SkeletonType } from '../../interfaces';
import classes from './style.module.css';

interface Props {
	count?: number;
	type?: SkeletonType;
	direction?: DirectionType;
}

const Skeleton = ({
	count = 1,
	type = 'banner',
	direction = 'column',
}: Props) => {
	return (
		<>
			{count > 1 ? (
				<ul
					className={
						direction === 'column'
							? classes.skeletonColumnList
							: classes.skeletonRowList
					}
				>
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
