import { REVIEW_LIST } from "./action-types";

const initialState = {
	reviews: {},
	isReviewListLoading: true,
};

const reviewReducer = (state = initialState, action) => {
	switch (action.type) {
		case REVIEW_LIST: {
			return {
				...state,
				reviews: action.payload,
				isReviewListLoading: false,
			};
		}
		default: {
			// console.log(`Неизвестный action.type: ${action.type}`);
		}
	}
	return state;
};

export default reviewReducer;
