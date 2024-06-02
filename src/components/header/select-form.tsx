import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getLanguage } from '../../store/lang-data/selectors';
import { changeLanguage } from '../../store/lang-data/actions';
import { RootState } from '../../store/root-reducer';

type PropsFromRedux = ConnectedProps<typeof connector>;

interface SelectFormProps extends PropsFromRedux { }

class SelectForm extends React.Component<SelectFormProps> {
	render() {
		return (
			<select value={this.props.language} onChange={this.props.handleChange}>
				<option value="ru">ru</option>
				<option value="en">en</option>
			</select>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	language: getLanguage(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	handleChange(event: ChangeEvent<HTMLSelectElement>) {
		dispatch(changeLanguage(event.target.value));
	},
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export { SelectForm };
export default connector(SelectForm);
