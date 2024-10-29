import { useEffect, useState } from 'react';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import classes from './main.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/newsList/NewsList';

function Main() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews();
				setNews(response.news);
				console.log(response.news);
			} catch (e) {
				console.log(e);
			}
		};
		fetchNews();
	}, []);

	return (
		<main className={classes.main}>
			{news.length > 0 ? <NewsBanner news={news[0]} /> : null}

			<NewsList news={news} />
		</main>
	);
}

export default Main;
