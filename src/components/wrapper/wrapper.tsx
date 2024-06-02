import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../app.css';

import Loading from '../loading/loading';
import Header from '../header/header';
import ReviewList from '../review-list/review-list';
import Footer from '../footer/footer';
import data from '../../store/mock/data';

import { loadReviews } from '../../store/review-data/actions';
import { changeLanguage } from '../../store/lang-data/actions';
import { getLanguage } from '../../store/lang-data/selectors';
import { getLength, getSliceAllLanguages } from '../../utils/utils';
import { RootState } from '../../store/root-reducer';

interface WrapperProps {
	language: string;
	loadReviews: (reviews: any) => void;
	changeLanguage: (language: string) => void;
}

interface WrapperState {
	isLoading: boolean;
	currentPage: number;
	totalPageCount: number;
}

const REVIEWS_PER_PAGE = 10;

class Wrapper extends Component<WrapperProps, WrapperState> {
	constructor(props: WrapperProps) {
		super(props);
		this.state = {
			isLoading: true,
			currentPage: 1,
			totalPageCount: 1
		};
		this.handleNextPageClick = this.handleNextPageClick.bind(this);
		this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
	}

	componentDidMount() {
		this.loadData(this.props.language, this.state.currentPage);
	}

	componentDidUpdate(prevProps: WrapperProps, prevState: WrapperState) {
		if (this.props.language !== prevProps.language || this.state.currentPage !== prevState.currentPage) {
			this.loadReviews(this.props.language, this.state.currentPage);
		}
	}

	loadData(language: string, currentPage: number) {
		setTimeout(() => {
			this.props.changeLanguage(language);
			this.loadReviews(language, currentPage);
			this.setState({
				isLoading: false,
				totalPageCount: Math.ceil(getLength(data[language]) / REVIEWS_PER_PAGE)
			});
		}, 2000);
	}

	loadReviews(language: string, currentPage: number) {
		this.props.loadReviews(getSliceAllLanguages(data, (currentPage - 1) * REVIEWS_PER_PAGE, currentPage * REVIEWS_PER_PAGE)[language]);
	};

	handleNextPageClick() {
		const next = this.state.currentPage + 1;
		this.setState({
			currentPage: next <= this.state.totalPageCount ? next : this.state.currentPage
		});
	}

	handlePrevPageClick() {
		const prev = this.state.currentPage - 1;
		this.setState({
			currentPage: prev > 0 ? prev : this.state.currentPage
		});
	}

	render() {
		const { isLoading, currentPage, totalPageCount } = this.state;

		if (isLoading) {
			return <Loading />;
		}

		return (
			<>
				<Header />
				<ReviewList />
				<Footer
					nav={{
						current: currentPage,
						total: totalPageCount
					}}
					disable={{
						left: currentPage === 1,
						right: currentPage === totalPageCount
					}}
					onNextPageClick={this.handleNextPageClick}
					onPrevPageClick={this.handlePrevPageClick}
				/>
			</>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	language: getLanguage(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	loadReviews: (reviews: any) => dispatch(loadReviews(reviews)),
	changeLanguage: (language: string) => dispatch(changeLanguage(language))
});

export { Wrapper };
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
