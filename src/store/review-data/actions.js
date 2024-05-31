import { REVIEW_LIST } from "./action-types";

const loadReviews = (reviews) => ({
	type: REVIEW_LIST,
	payload: reviews,
});

export {
	loadReviews,
};
