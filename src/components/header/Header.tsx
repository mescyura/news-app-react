import { formatDate } from '../../helpers/formatDate';
import classes from './style.module.css';

function Header() {
	return (
		<header className={classes.header}>
			<h1 className={classes.title}>News App React</h1>
			<p className={classes.date}>{formatDate(new Date())}</p>
		</header>
	);
}

export default Header;
