import { NewsApiResponse } from '../../interfaces/index';
import { getLatestNews } from '../../api/apiNews';

import { useFetch } from '../../hooks/useFetch';

import BannersList from '../bannersList/BannersList';

import classes from './style.module.css';

function LatestNews() {
	const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

	return (
		<section className={classes.latestNews}>
			<h3 className={classes.title}>Latest news</h3>
			<BannersList bannersList={data && data.news} isLoading={isLoading} />
		</section>
	);
}

export default LatestNews;
