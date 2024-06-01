import React from "react";
import { connect } from "react-redux";
import { getLanguage } from '../../store/lang-data/selectors';

class ReviewList extends React.Component {

	render() {
		console.log(this.props.language);
		console.log(this.props.reviews);

		const obj = this.props.reviews[this.props.language][Object.keys(this.props.reviews[this.props.language])[0]];
		return (
			<div>
				<table className="table">
					<thead className="table-head">
						<tr className="table-head-row">
							{Object.keys(obj).map(el =>
								<th key={el} scope="col">{el}</th>
							)}
						</tr>
					</thead>
					<tbody className="table-body">
						{Object.keys(this.props.reviews[this.props.language]).map(el =>
							<tr key={el} className="table-body-row">
								<td>{this.props.reviews[this.props.language][el].name}</td>
								<td>{this.props.reviews[this.props.language][el].review}</td>
								<td>{this.props.reviews[this.props.language][el].date}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	language: getLanguage(state),
});

export { ReviewList };
export default connect(mapStateToProps, null)(ReviewList);