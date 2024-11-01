import { formatDate } from '../../helpers/formatDate';
import classes from './style.module.css';
import { useTheme } from '../../context/ThemeContext';
import ToogleThemeSwitch from '../toogleThemeSwitch/ToogleThemeSwitch';

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
			<ToogleThemeSwitch />
		</header>
	);
}

export default Header;
