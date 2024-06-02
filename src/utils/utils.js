/**
 * Join classnames from array to string
 * @param {Array} arr
 * @return {string}
 */
const classname = (...arr) => arr.join(' ');

const formatFIO = (strFIO) => {
	if (!strFIO) {
		return strFIO;
	}
	const [familyName, firstName] = strFIO.split(' ');
	return familyName + ' ' + (firstName ? firstName[0] + '.' : '');
};

const getSliceAllLanguages = (data, begin, end) => {
	const keysOfData = Object.keys(data);
	const obj = {};
	for (let i = 0; i < keysOfData.length; i++) {
		// console.log(getSlice(data[keysOfData[i]], begin, end));
		Object.assign(obj, { [keysOfData[i]]: getSlice(data[keysOfData[i]], begin, end) });
	}
	console.log(obj);
	return obj;
};

const getSlice = (data, begin, end) => {
	const keysOfData = Object.keys(data).slice(begin, end);
	const obj = {};
	for (let i = 0; i < keysOfData.length; i++) {
		Object.assign(obj, { [keysOfData[i]]: data[keysOfData[i]] });
	}
	return obj;
};

const getLength = (data) => Object.keys(data).length;

const parseDate = (strDate) => {
	if (!strDate) {
		return null;
	}
	const [date, time] = strDate.split(' ');
	const [day, month, year] = date.split(/\./i).map(Number);
	const [hour, minute, second] = time.split(/:|\./i).map(Number);
	return new Date(year, month, day, hour, minute, second);
};

function convertDate(inputFormat) {
	function pad(s) { return (s < 10) ? '0' + s : s; }
	var d = new Date(inputFormat)
	return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.') + ' '
		+ [pad(d.getHours()), pad(d.getMinutes() + 1), d.getSeconds()].join(':')
}

export { classname, formatFIO, parseDate, convertDate, getSliceAllLanguages, getSlice, getLength };