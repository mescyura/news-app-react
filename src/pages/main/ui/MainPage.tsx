import LatestNews from './latestNews/LatestNews';
import NewsByFilters from './newsByFilters/NewsByFilters';

import classes from './main.module.css';

function MainPage() {
	return (
		<main className={classes.main}>
			<LatestNews />
			<NewsByFilters />
		</main>
	);
}

export default MainPage;
