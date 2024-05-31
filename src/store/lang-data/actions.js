import { LANGUAGE_CHANGE } from "./action-types";

const changeLanguage = (language) => ({
	type: LANGUAGE_CHANGE,
	payload: language,
});

export {
	changeLanguage,
};
