import { combineReducers } from 'redux';
import reviewReducer from './review-data/reducer';
import languageReducer from './lang-data/reducer';

// Создание namespace для редьюсеров
const NameSpace = {
	REVIEW: 'REVIEW',
	LANGUAGE: 'LANGUAGE',
};

// Комбинирование редьюсеров
const rootReducer = combineReducers({
	[NameSpace.REVIEW]: reviewReducer,
	[NameSpace.LANGUAGE]: languageReducer,
});

// Определение типа RootState
export type RootState = ReturnType<typeof rootReducer>;

// Экспорт комбинированного редьюсера
export default rootReducer;
export { NameSpace };
