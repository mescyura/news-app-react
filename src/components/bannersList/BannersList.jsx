import withSkeleton from '../../hocs/withSkeleton';

import NewsBanner from '../newsBanner/NewsBanner';

import classes from './style.module.css';

const BannersList = ({ bannersList }) => {
	return (
		<ul className={classes.bannersList}>
			{bannersList?.map(banner => {
				return <NewsBanner key={banner.id} banner={banner} />;
			})}
		</ul>
	);
};

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 12, 'row');

export default BannersListWithSkeleton;
