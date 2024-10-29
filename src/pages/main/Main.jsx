import { useEffect, useState } from 'react';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import Skeleton from '../../components/skeleton/Skeleton';
import classes from './main.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/newsList/NewsList';
import Pagination from '../../components/pagination/Pagination';

function Main() {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState();
	const [currentPage, setCurrentPage] = useState(1);
	const totalPage = 10;
	const pageSize = 10;

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true);
			const response = await getNews(currentPage, pageSize);
			setNews(response.news);
			console.log(response.news);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchNews(currentPage);
	}, [currentPage]);

	const handlePrevPage = () => {
		if (currentPage > 1) setCurrentPage(currentPage - 1);
	};

	const handleChangePage = pageNumber => {
		setCurrentPage(pageNumber);
	};

	const handleNextPage = () => {
		if (currentPage < totalPage) setCurrentPage(currentPage + 1);
	};

	return (
		<main className={classes.main}>
			{news.length > 0 && !isLoading ? (
				<NewsBanner news={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPage}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			/>
			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={'item'} />
			)}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPage}
				handlePrevPage={handlePrevPage}
				handleChangePage={handleChangePage}
				handleNextPage={handleNextPage}
			/>
		</main>
	);
}

export default Main;
