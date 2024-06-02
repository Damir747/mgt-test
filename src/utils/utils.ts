/**
 * Join classnames from array to string
 * @param {Array<string>} arr
 * @return {string}
 */
const classname = (...arr: string[]): string => arr.join(' ');

/**
 * Format full name to abbreviated form
 * @param {string} strFIO
 * @return {string}
 */
const formatFIO = (strFIO: string): string => {
	if (!strFIO) {
		return strFIO;
	}
	const [familyName, firstName] = strFIO.split(' ');
	return familyName + ' ' + (firstName ? firstName[0] + '.' : '');
};

interface Data {
	[key: string]: any;
}

/**
 * Get a slice of data for all languages
 * @param {Data} data
 * @param {number} begin
 * @param {number} end
 * @return {Data}
 */
const getSliceAllLanguages = (data: Data, begin: number, end: number): Data => {
	const keysOfData = Object.keys(data);
	const obj: Data = {};
	for (let i = 0; i < keysOfData.length; i++) {
		Object.assign(obj, { [keysOfData[i]]: getSlice(data[keysOfData[i]], begin, end) });
	}
	return obj;
};

/**
 * Get a slice of data
 * @param {Data} data
 * @param {number} begin
 * @param {number} end
 * @return {Data}
 */
const getSlice = (data: Data, begin: number, end: number): Data => {
	const keysOfData = Object.keys(data).slice(begin, end);
	const obj: Data = {};
	for (let i = 0; i < keysOfData.length; i++) {
		Object.assign(obj, { [keysOfData[i]]: data[keysOfData[i]] });
	}
	return obj;
};

/**
 * Get the length of an object
 * @param {Data} data
 * @return {number}
 */
const getLength = (data: Data): number => Object.keys(data).length;


export { classname, formatFIO, getSliceAllLanguages, getSlice, getLength };