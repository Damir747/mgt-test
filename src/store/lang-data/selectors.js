import { NameSpace } from '../root-reducer';

const getLanguage = (state) => state[NameSpace.LANGUAGE].language;

export { getLanguage };