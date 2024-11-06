export interface IPaginationProps {
	currentPage: number;
	totalPages: number;
	handlePrevPage: () => void;
	handleChangePage: (page: number) => void;
	handleNextPage: () => void;
}
