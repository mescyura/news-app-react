import NewsListItem from '../newsListItem/NewsListItem';
import classes from './style.module.css';

function NewsList({ news }) {
	return (
		<ul className={classes.newsList}>
			{news.map(item => (
				<NewsListItem key={item.id} item={item} />
			))}
		</ul>
	);
}

export default NewsList;
