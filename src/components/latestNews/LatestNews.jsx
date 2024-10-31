import BannersList from '../bannersList/BannersList';

import classes from './style.module.css';

function LatestNews({ bannersList, isLoading }) {
	return (
		<section className={classes.latestNews}>
			<BannersList bannersList={bannersList} isLoading={isLoading} />
		</section>
	);
}

export default LatestNews;
