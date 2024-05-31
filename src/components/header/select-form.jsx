import React from "react";
import { changeLanguage } from "../../store/lang-data/actions";

class SelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.dispatch = props['dispatch'];
		this.state = { value: 'ru' };
		this.handleChange = this.handleChange.bind(this);
	}


	handleChange(event) {
		this.setState({ value: event.target.value });
		this.dispatch(changeLanguage(event.target.value));
	}

	render() {
		return (
			<select value={this.state.value} onChange={this.handleChange}>
				<option value="ru" >ru</option>
				<option value="en">en</option>
			</select>
		);
	}
}

export default SelectForm;