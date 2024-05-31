import { LANGUAGE_CHANGE } from "./action-types";

const initialState = {
	language: 'ru',
};

const languageReducer = (state = initialState, action) => {
	switch (action.type) {
		case LANGUAGE_CHANGE: {
			return {
				...state,
				language: action.payload,
			};
		}
		default: {
			// console.log(`Неизвестный action.type: ${action.type}`);
		}
	}
	return state;
};

export default languageReducer;
