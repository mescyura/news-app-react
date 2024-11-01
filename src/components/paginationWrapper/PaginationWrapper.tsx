import { IPaginationProps } from '../../interfaces';
import Pagination from '../pagination/Pagination';

interface Props {
	top?: boolean;
	bottom?: boolean;
	children: React.ReactNode;
}

function PaginationWrapper({
	top,
	bottom,
	children,
	...paginationProps
}: Props & IPaginationProps) {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	);
}

export default PaginationWrapper;
