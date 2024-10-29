import { useEffect, useState } from 'react';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import Skeleton from '../../components/skeleton/Skeleton';
import classes from './main.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/newsList/NewsList';

function Main() {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true);
				const response = await getNews();
				setNews(response.news);
				console.log(response.news);
			} catch (e) {
				console.log(e);
			} finally {
				setIsLoading(!isLoading);
			}
		};
		fetchNews();
	}, []);

	return (
		<main className={classes.main}>
			{news.length > 0 && !isLoading ? (
				<NewsBanner news={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}

			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={'item'} />
			)}
		</main>
	);
}

export default Main;
