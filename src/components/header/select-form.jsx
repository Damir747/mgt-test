import React from "react";
import { connect } from "react-redux";
import { getLanguage } from '../../store/lang-data/selectors';

class SelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.dispatch = props.dispatch;
		this.language = props.language;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.dispatch(this.props.changeLanguage(event.target.value));
	}

	render() {
		return (
			<select value={this.props.language} onChange={this.handleChange}>
				<option value="ru" >ru</option>
				<option value="en">en</option>
			</select>
		);
	}
}

const mapStateToProps = (state) => ({
	language: getLanguage(state),
});

export { SelectForm };
export default connect(mapStateToProps, null)(SelectForm);