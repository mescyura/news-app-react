import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../image/Image';
import classes from './style.module.css';

function NewsBanner({ news }) {
	return (
		<div className={classes.newsBanner}>
			<Image image={news?.image} />
			<h3 className={classes.title}>{news.title}</h3>
			<p className={classes.extra}>
				{formatTimeAgo(news.published)} by {news.author}
			</p>
		</div>
	);
}

export default NewsBanner;
