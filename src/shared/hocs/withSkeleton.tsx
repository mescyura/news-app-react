import React from 'react';
import Skeleton from '../ui/skeleton/Skeleton';
import { SkeletonType, DirectionType } from '../interfaces';

interface Props {
	isLoading: boolean;
	type?: SkeletonType;
	direction?: DirectionType;
}

function withSkeleton<P extends object>(
	Component: React.ComponentType<P>,

	count?: number
) {
	return function WithSkeleton(props: Props & P) {
		const { isLoading, type, direction = 'column', ...restProps } = props;
		if (isLoading) {
			return <Skeleton count={count} type={type} direction={direction} />;
		}

		return <Component type={type} {...(restProps as P)} />;
	};
}

export default withSkeleton;
