import { combineReducers } from 'redux';
import reviewReducer from './review-data/reducer';
import languageReducer from './lang-data/reducer';


const NameSpace = {
	REVIEW: 'REVIEW',
	LANGUAGE: 'LANGUAGE',
};

export default combineReducers({
	[NameSpace.REVIEW]: reviewReducer,
	[NameSpace.LANGUAGE]: languageReducer,
});

export { NameSpace };
