import LatestNews from '../../components/latestNews/LatestNews';
import NewsByFilters from '../../components/newsByFilters/NewsByFilters';

import classes from './main.module.css';

function Main() {
	return (
		<main className={classes.main}>
			<LatestNews />
			<NewsByFilters />
		</main>
	);
}

export default Main;
