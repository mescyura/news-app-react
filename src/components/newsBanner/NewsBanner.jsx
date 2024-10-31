import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../image/Image';
import classes from './style.module.css';
import withSkeleton from '../../hocs/withSkeleton';

const NewsBanner = ({ news }) => {
	return (
		<div className={classes.newsBanner}>
			<Image image={news?.image} />
			<h3 className={classes.title}>{news.title}</h3>
			<p className={classes.extra}>
				{formatTimeAgo(news.published)} by {news.author}
			</p>
		</div>
	);
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
