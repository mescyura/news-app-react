import { useEffect, useState } from 'react';

import { getCategories, getNews } from '../../api/apiNews';
import { useDebounce } from '../../hooks/useDebounce';

import Skeleton from '../../components/skeleton/Skeleton';
import NewsBanner from '../../components/newsBanner/NewsBanner';
import NewsList from '../../components/newsList/NewsList';
import Pagination from '../../components/pagination/Pagination';
import Categories from '../../components/categories/Categories';

import classes from './main.module.css';
import Search from '../../components/search/Search';

function Main() {
	const [news, setNews] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [isLoading, setIsLoading] = useState();
	const [keywords, setKeywords] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const totalPage = 10;
	const pageSize = 10;

	const debouncedKeywords = useDebounce(keywords, 1500);

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true);
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory,
				keywords: debouncedKeywords,
			});
			setNews(response.news);
			console.log(response.news);
			setIsLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	const fetchCategories = async () => {
		try {
			const response = await getCategories();
			setCategories(['All', ...response.categories]);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		fetchNews(currentPage);
	}, [currentPage, selectedCategory, debouncedKeywords]);

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
			<Categories
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<Search keywords={keywords} setKeywords={setKeywords} />
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
