import { INews, NewsListItem } from '@/entities/news';
import classes from './style.module.css';
import withSkeleton from '@/shared/hocs/withSkeleton';

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
