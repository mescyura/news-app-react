import React, { useRef } from 'react';
import classes from './style.module.css';

function Slider({ children, step = 150 }) {
	const sliderRef = useRef(null);

	const scrollLeft = () => {
		sliderRef.current.scrollLeft -= step;
	};

	const scrollRight = () => {
		sliderRef.current.scrollLeft += step;
		// console.log(sliderRef);
	};

	return (
		<div className={classes.slider}>
			<button onClick={scrollLeft} className={classes.arrow}>
				{'<'}
			</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button onClick={scrollRight} className={classes.arrow}>
				{'>'}
			</button>
		</div>
	);
}

export default Slider;
