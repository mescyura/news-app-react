import { INews, NewsBanner } from '@/entities/news';
import withSkeleton from '@/shared/hocs/withSkeleton';

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
