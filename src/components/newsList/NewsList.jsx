import withSkeleton from '../../hocs/withSkeleton';

import NewsListItem from '../newsListItem/NewsListItem';

import classes from './style.module.css';

const NewsList = ({ news }) => {
	return (
		<ul className={classes.newsList}>
			{news.map(item => (
				<NewsListItem key={item.id} item={item} />
			))}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10, 'column');

export default NewsListWithSkeleton;
