import { useCallback, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import '../../app.css';
import Loading from '../loading/loading';
import Header from '../header/header';
import ReviewList from '../review-list/review-list';
import Footer from '../footer/footer';
// import { getIsReviewListLoading, getReviews } from '../../store/review-data/selectors';
import data from '../../store/mock/data';
import { loadReviews } from '../../store/review-data/actions';
import { changeLanguage } from '../../store/lang-data/actions';
import { getLanguage } from '../../store/lang-data/selectors';
import { getLength, getSliceAllLanguages } from '../../utils/utils';

function Wrapper({ language }) {
	const ROWS_PER_PAGE = 10;
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPageCount, setTotalPageCount] = useState(1);

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => {
				dispatch(changeLanguage('ru'));
				dispatch(loadReviews(getSliceAllLanguages(data, ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage)[language]));
				setIsLoading(false);
				setTotalPageCount(Math.ceil(getLength(data[language]) / ROWS_PER_PAGE));
			}, 1000);
		}
	}, [isLoading, currentPage, language, dispatch]);

	useEffect(() => {
		dispatch(loadReviews(getSliceAllLanguages(data, ROWS_PER_PAGE * (currentPage - 1), ROWS_PER_PAGE * currentPage)[language]));
		setTotalPageCount(Math.ceil(getLength(data[language]) / ROWS_PER_PAGE));
	}, [currentPage, dispatch, language]);

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
			<Header />

			<ReviewList />

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

const mapStateToProps = (state) => ({
	language: getLanguage(state),
});

export { Wrapper };
export default connect(mapStateToProps, null)(Wrapper);