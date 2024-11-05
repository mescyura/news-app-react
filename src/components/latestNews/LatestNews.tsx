import { useGetLatestNewsQuery } from '../../store/services/newsApi';

import BannersList from '../bannersList/BannersList';

import classes from './style.module.css';

function LatestNews() {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={classes.latestNews}>
			<h3 className={classes.title}>Latest news</h3>
			<BannersList bannersList={data && data.news} isLoading={isLoading} />
		</section>
	);
}

export default LatestNews;
