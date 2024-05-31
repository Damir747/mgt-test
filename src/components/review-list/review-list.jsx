import { connect } from "react-redux";
import { getReviews } from "../../store/review-data/selectors";
import { getLanguage } from "../../store/lang-data/selectors";

function ReviewList({ reviews, language }) {
	const obj = reviews[language][Object.keys(reviews[language])[0]];

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
					{Object.keys(reviews[language]).map(el =>
						<tr key={el} className="table-body-row">
							<td>{reviews[language][el].name}</td>
							<td>{reviews[language][el].review}</td>
							<td>{reviews[language][el].date}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

const mapStateToProps = (state) => ({
	reviews: getReviews(state),
	language: getLanguage(state),
});

export { ReviewList };
export default connect(mapStateToProps, null)(ReviewList);
// export default ReviewList;