import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';

import BannersListWithSkeleton from '@/widgets/news/ui/bannersList/BannersList';

import classes from './style.module.css';

function LatestNews() {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={classes.latestNews}>
			<h3 className={classes.title}>Latest news</h3>
			<BannersListWithSkeleton
				bannersList={data && data.news}
				isLoading={isLoading}
			/>
		</section>
	);
}

export default LatestNews;
