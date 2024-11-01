import { INews } from '../../interfaces';

import { formatTimeAgo } from '../../helpers/formatTimeAgo';

import noimg from '../../assets/noimg.jpg';
import classes from './style.module.css';

interface Props {
	item: INews;
}

function NewsListItem({ item }: Props) {
	return (
		<li className={classes.newsItem}>
			<div
				className={classes.imageWrapper}
				style={{
					backgroundImage: `url(${item.image === 'None' ? noimg : item.image})`,
				}}
			></div>
			<div className={classes.info}>
				<h3 className={classes.title}>{item.title}</h3>
				<p className={classes.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
}

export default NewsListItem;
