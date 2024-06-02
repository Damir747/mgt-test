import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Loading from './components/loading/loading';
import Header from './components/header/header';
import ReviewList from './components/review-list/review-list';
// import { getIsReviewListLoading, getReviews } from './store/review-data/selectors';
import data from './store/mock/data';
// import { loadReviews } from './store/review-data/actions';
// import { changeLanguage } from './store/lang-data/actions';
import Footer from './components/footer/footer';
import { getLength, getSliceAllLanguages } from './utils/utils';
// import { getLanguage } from './store/lang-data/selectors';

function App() {
	const ROWS_PER_PAGE = 5;
	const dispatch = useDispatch();

	const [reviews, setReviews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPageCount, setTotalPageCount] = useState(1);
	const [lang, setLang] = useState('ru');

	// const stateReviews = useSelector(getReviews);

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				// dispatch(loadReviews(getSliceAllLanguages(data, ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage)[lang]));
				// dispatch(changeLanguage(lang));
				setIsLoading(false);
				setLang('ru');
				setReviews(getSliceAllLanguages(data, ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage)[lang]);
				setTotalPageCount(Math.ceil(getLength(data[lang]) / ROWS_PER_PAGE));
			}, 500);
		} else {
			// dispatch(loadReviews(getSliceAllLanguages(data, ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage)[lang]));
			// dispatch(changeLanguage(lang));
		}
	}, [isLoading, currentPage, lang]);

	useEffect(() => {
		// dispatch(getLanguage);
		setReviews(getSliceAllLanguages(data, ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage)[lang]);
		setTotalPageCount(Math.ceil(getLength(data[lang]) / ROWS_PER_PAGE));
	}, [currentPage, lang]);

	const handleNextPageClick = useCallback(() => {
		const next = currentPage + 1;

		setCurrentPage(next <= totalPageCount ? next : currentPage);
	}, [currentPage, totalPageCount]);

	const handlePrevPageClick = useCallback(() => {
		const prev = currentPage - 1;

		setCurrentPage(prev > 0 ? prev : currentPage);
	}, [currentPage]);

	useEffect(() => {
		if (currentPage > totalPageCount) {
			setCurrentPage(totalPageCount);
		}
	}, [currentPage, totalPageCount]);

	if (isLoading) {
		return (
			<Loading />
		);
	}

	return (
		<>
			<Header
				changeLanguage={setLang}
				language={lang}
			/>

			<ReviewList
				reviews={reviews}
			/>

			<Footer
				nav={{
					current: currentPage,
					total: totalPageCount,
				}}
				disable={{
					left: currentPage === 1,
					right: currentPage === totalPageCount
				}}
				onNextPageClick={handleNextPageClick}
				onPrevPageClick={handlePrevPageClick}
			/>
		</>
	);
}

export default App;
