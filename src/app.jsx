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

function App() {
	const isReviewListLoading = useSelector(getIsReviewListLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isReviewListLoading) {
			setTimeout(() => {
				dispatch(loadReviews(data));
				dispatch(changeLanguage('ru'));
			}, 1000);
		}
	}, [isReviewListLoading, dispatch]);

	if (isReviewListLoading) {
		return (
			<Loading />
		);
	}

	return (
		<>
			<Header>

			</Header>
			<div className="app">

			</div>
			<ReviewList />
		</>
	);
}

export default App;
