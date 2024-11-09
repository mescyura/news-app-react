import { INews, NewsCard } from '@/entities/news';
import classes from './style.module.css';
import withSkeleton from '@/shared/hocs/withSkeleton';

interface Props {
	news?: INews[];
	type?: 'banner' | 'item';
	direction?: 'row' | 'column';
}

const NewsList = ({ news, type = 'item' }: Props) => {
	return (
		<ul
			className={`${type === 'item' ? classes.newsItems : classes.newsBanners}`}
		>
			{news?.map(item => (
				<NewsCard key={item.id} item={item} type={type} />
			))}
		</ul>
	);
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
