import { formatTimeAgo } from '@/shared/utils/formatTimeAgo';
import { INews } from '../../model/types';

import noimg from '@/shared/assets/noimg.jpg';

import classes from './style.module.css';
import Image from '@/shared/ui/image/Image';

interface Props {
	item: INews;
	type: 'banner' | 'item';
}

function NewsCard({ item, type = 'item' }: Props) {
	return (
		<li className={`${classes.card} ${type === 'banner' && classes.banner}`}>
			{type === 'banner' ? (
				<Image image={item?.image} />
			) : (
				<div
					className={classes.cardImageWrapper}
					style={{
						backgroundImage: `url(${
							item.image === 'None' ? noimg : item.image
						})`,
					}}
				></div>
			)}

			<div className={classes.cardInfo}>
				<h3 className={classes.cardTitle}>{item.title}</h3>
				<p className={classes.cardExtra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	);
}

export default NewsCard;
