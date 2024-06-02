import React from "react";
import { connect } from "react-redux";
import { getLanguage } from '../../store/lang-data/selectors';
import { changeLanguage } from "../../store/lang-data/actions";

class SelectForm extends React.Component {

	render() {
		return (
			<select value={this.props.language} onChange={(event) => this.props.handleChange(event)}>
				<option value="ru">ru</option>
				<option value="en">en</option>
			</select>
		);
	}
}

const mapStateToProps = (state) => ({
	language: getLanguage(state),
});

const mapDispatchToProps = (dispatch) => ({
	handleChange(event) {
		dispatch(changeLanguage(event.target.value));
	},
});

export { SelectForm };
export default connect(mapStateToProps, mapDispatchToProps)(SelectForm);
