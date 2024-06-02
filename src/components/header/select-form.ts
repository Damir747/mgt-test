import React, { ChangeEvent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getLanguage } from '../../store/lang-data/selectors';
import { RootState } from '../../store/rootReducer';
import { Dispatch } from 'redux';

// Описание пропсов компонента
interface SelectFormProps extends PropsFromRedux {
	changeLanguage: (language: string) => any;
}

class SelectForm extends React.Component<SelectFormProps> {
	constructor(props: SelectFormProps) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: ChangeEvent<HTMLSelectElement>) {
		return this.props.dispatch(this.props.changeLanguage(event.target.value));
	}

	render() {
		return (
			<select value= { this.props.language } onChange = { this.handleChange } >
				<option value="ru" > ru < /option>
					< option value = "en" > en < /option>
						< /select>
    );
	}
}

const mapStateToProps = (state: RootState) => ({
	language: getLanguage(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export { SelectForm };
export default connector(SelectForm);
