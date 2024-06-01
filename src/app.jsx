import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import Header from './components/header/header';
import Loading from './components/loading/loading';
import { getIsReviewListLoading } from './store/review-data/selectors';
import ReviewList from './components/review-list/review-list';
import data from './store/mock/data';
import { loadReviews } from './store/review-data/actions';
import { changeLanguage } from './store/lang-data/actions';
import { getLanguage } from './store/lang-data/selectors';

function App() {
	const isReviewListLoading = useSelector(getIsReviewListLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isReviewListLoading) {
			setTimeout(() => {
				dispatch(loadReviews(data));
				dispatch(changeLanguage('ru'));
			}, 500);
		}
	}, [isReviewListLoading, dispatch]);

	if (isReviewListLoading) {
		return (
			<Loading />
		);
	}

	return (
		<>
			<Header
				changeLanguage={changeLanguage}
			/>
			<div className="app">

			</div>
			<ReviewList
				reviews={data}
				language={getLanguage}
			/>
		</>
	);
}

export default App;
