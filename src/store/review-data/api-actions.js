import { loadReviews } from './actions';
import data from '../mock/data';

const fetchReviewsList = () => (dispatch, _getState, _api) => {
	return dispatch(loadReviews(data));
};

export {
	fetchReviewsList,
};
