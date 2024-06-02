import { NameSpace } from '../root-reducer.ts';

const getLanguage = (state) => state[NameSpace.LANGUAGE].language;

export { getLanguage };