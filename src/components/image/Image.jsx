import classes from './style.module.css';

function Image({ image }) {
	return (
		<div className={classes.wrapper}>
			{image ? (
				<img src={image} alt='news' className={classes.image}></img>
			) : null}
		</div>
	);
}

export default Image;
