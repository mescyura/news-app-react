import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';

import { NewsList } from '@/widgets/news';

import classes from './style.module.css';

function LatestNews() {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={classes.latestNews}>
			<h3 className={classes.title}>Latest news</h3>
			<NewsList
				news={data && data.news}
				type='banner'
				direction='row'
				isLoading={isLoading}
			/>
		</section>
	);
}

export default LatestNews;
