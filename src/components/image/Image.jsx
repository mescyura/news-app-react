import classes from './style.module.css';
import noimg from '../../assets/noimg.jpg';

function Image({ image }) {
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
