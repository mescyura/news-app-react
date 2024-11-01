import { INews } from '../../interfaces/index';

import withSkeleton from '../../hocs/withSkeleton';

import NewsBanner from '../newsBanner/NewsBanner';

import classes from './style.module.css';

interface Props {
	bannersList?: INews[] | null;
}

const BannersList = ({ bannersList }: Props) => {
	return (
		<ul className={classes.bannersList}>
			{bannersList?.map(banner => {
				return <NewsBanner key={banner.id} banner={banner} />;
			})}
		</ul>
	);
};

const BannersListWithSkeleton = withSkeleton<Props>(
	BannersList,
	'banner',
	12,
	'row'
);

export default BannersListWithSkeleton;
