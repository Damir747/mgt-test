import React from "react";
import { formatFIO } from "../../utils/utils";
import { connect } from "react-redux";
import { getReviews } from "../../store/review-data/selectors";
import { RootState } from "../../store/root-reducer";

interface ReviewListProps {
	reviews: {
		[key: string]: {
			name: string;
			review: string;
			date: string;
		};
	};
}

class ReviewList extends React.Component<ReviewListProps> {
	render() {
		const { reviews } = this.props;
		const firstReview = reviews[Object.keys(reviews)[0]];

		if (!firstReview) {
			return <div>Нет данных</div>;
		}

		return (
			<div className="body-content">
				<table className="table">
					<thead className="table-head">
						<tr className="table-head-row">
							{Object.keys(firstReview).map((key) => (
								<th key={key} scope="col">{key}</th>
							))}
						</tr>
					</thead>
					<tbody className="table-body">
						{Object.keys(reviews).map((key) => (
							<tr key={key} className="table-body-row">
								<td>{formatFIO(reviews[key].name)}</td>
								<td>{reviews[key].review}</td>
								<td>{reviews[key].date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	reviews: getReviews(state),
});

export { ReviewList };
export default connect(mapStateToProps)(ReviewList);
