import { TOTAL_PAGES } from '@/shared/constants/constants';

import { Pagination } from '@/features/pagination';
import { NewsList } from '@/widgets/news';
import { IFilters } from '@/shared/interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
	filters: IFilters;
	news?: INews[];
	isLoading: boolean;
}

function NewsListWithPagination({ filters, news, isLoading }: Props) {
	const { handleNextPage, handleChangePage, handlePrevPage } =
		usePaginationNews(filters);

	return (
		<Pagination
			top
			bottom
			currentPage={filters.page_number}
			totalPages={TOTAL_PAGES}
			handlePrevPage={handlePrevPage}
			handleChangePage={handleChangePage}
			handleNextPage={handleNextPage}
		>
			<NewsList
				isLoading={isLoading}
				type='item'
				direction='column'
				news={news}
			/>
		</Pagination>
	);
}

export default NewsListWithPagination;
