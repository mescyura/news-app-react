import classes from './style.module.css';
import noimg from '../../assets/noimg.jpg';

interface Props {
	image: string;
}

function Image({ image }: Props) {
	return (
		<div className={classes.wrapper}>
			{image ? (
				<img
					src={image === 'None' ? noimg : image}
					alt='news'
					className={classes.image}
				></img>
			) : null}
		</div>
	);
}

export default Image;
