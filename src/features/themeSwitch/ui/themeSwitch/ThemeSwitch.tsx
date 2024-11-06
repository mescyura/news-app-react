import { useTheme } from '@/app/providers/ThemeProvider';

import classes from './style.module.css';

function ThemeSwitch() {
	const { isDark, toggleTheme } = useTheme();

	return (
		<label className={classes.toggleLabel}>
			<input
				type='checkbox'
				checked={isDark}
				onChange={toggleTheme}
				className={classes.toggleInput}
			/>
			<div className={`${classes.switch} ${isDark ? 'checked' : ''}`}>
				<div></div>
				<div></div>
				<span></span>
			</div>
		</label>
	);
}

export default ThemeSwitch;
