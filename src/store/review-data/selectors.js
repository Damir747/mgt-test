import { NameSpace } from '../root-reducer.ts';

const getReviews = (state) => state[NameSpace.REVIEW].reviews;
const getIsReviewListLoading = (state) => state[NameSpace.REVIEW].isReviewListLoading;

export { getReviews, getIsReviewListLoading };