import { changeLanguage } from './actions';

const fetchChangeLanguage = () => (dispatch, _getState, _api) => {
	return dispatch(changeLanguage('ru'));
};

export {
	fetchChangeLanguage,
};
