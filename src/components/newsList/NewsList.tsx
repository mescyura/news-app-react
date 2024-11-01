import withSkeleton from '../../hocs/withSkeleton';
import { INews } from '../../interfaces';

import NewsListItem from '../newsListItem/NewsListItem';

import classes from './style.module.css';

interface Props {
	news?: INews[];
}

const NewsList = ({ news }: Props) => {
	return (
		<ul className={classes.newsList}>
			{news?.map(item => (
				<NewsListItem key={item.id} item={item} />
			))}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton<Props>(
	NewsList,
	'item',
	10,
	'column'
);

export default NewsListWithSkeleton;
