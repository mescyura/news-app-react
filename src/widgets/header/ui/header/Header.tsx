import { useTheme } from '@/app/providers/ThemeProvider';

import { ThemeSwitch } from '@/features/themeSwitch';

import { formatDate } from '@/shared/utils/formatDate';
import classes from './style.module.css';

function Header() {
	const { isDark } = useTheme();

	return (
		<header
			className={`${classes.header} ${isDark ? classes.dark : classes.light}`}
		>
			<div>
				<h1 className={classes.title}>News App React</h1>
				<p className={classes.date}>{formatDate(new Date())}</p>
			</div>
			<ThemeSwitch />
		</header>
	);
}

export default Header;
