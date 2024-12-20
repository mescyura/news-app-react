import React, { useRef } from 'react';
import classes from './style.module.css';

interface Props {
	children: React.ReactElement;
	step?: number;
	isDark: boolean;
}

function Slider({ children, step = 150, isDark }: Props) {
	const sliderRef = useRef<HTMLElement | null>(null);

	const scrollLeft = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft -= step;
	};

	const scrollRight = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft += step;
	};

	return (
		<div
			className={`${classes.slider} ${isDark ? classes.dark : classes.light}`}
		>
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
