import React from "react";
import { formatFIO } from "../../utils/utils";
import { connect } from "react-redux";
import { getReviews } from "../../store/review-data/selectors";

class ReviewList extends React.Component {
	render() {
		console.log(this.props.reviews);
		const obj = this.props.reviews[Object.keys(this.props.reviews)[0]];
		console.log(obj);
		if (!obj) {
			return (<></>);
		}
		return (
			<div className="body-content">
				<table className="table">
					<thead className="table-head">
						<tr className="table-head-row">
							{Object.keys(obj).map(el =>
								<th key={el} scope="col">{el}</th>
							)}
						</tr>
					</thead>
					<tbody className="table-body">
						{Object.keys(this.props.reviews).map(el =>
							<tr key={el} className="table-body-row">
								<td>{formatFIO(this.props.reviews[el].name)}</td>
								<td>{this.props.reviews[el].review}</td>
								<td>{this.props.reviews[el].date}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	reviews: getReviews(state),
});

export { ReviewList };
export default connect(mapStateToProps, null)(ReviewList);
// export default ReviewList;