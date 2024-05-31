import PropTypes, { shape } from 'prop-types';

export default shape({
	name: PropTypes.string.isRequired,
	review: PropTypes.string,
	date: PropTypes.string,
}).isRequired;
