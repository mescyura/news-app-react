import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../image/Image';
import classes from './style.module.css';

const NewsBanner = ({ banner }) => {
	return (
		<div className={classes.newsBanner}>
			<Image image={banner?.image} />
			<h3 className={classes.title}>{banner.title}</h3>
			<p className={classes.extra}>
				{formatTimeAgo(banner.published)} by {banner.author}
			</p>
		</div>
	);
};

export default NewsBanner;
