import React, { Component } from 'react';

interface FooterProps {
	onNextPageClick: () => void;
	onPrevPageClick: () => void;
	disable: {
		left: boolean;
		right: boolean;
	};
	nav?: {
		current: number;
		total: number;
	};
}

class Footer extends Component<FooterProps> {
	handleNextPageClick = () => {
		this.props.onNextPageClick();
	};

	handlePrevPageClick = () => {
		this.props.onPrevPageClick();
	};

	render() {
		const { disable, nav } = this.props;

		return (
			<footer className="app-footer">
				<div className="pagination__div">
					<button
						className="pagination__left"
						type="button"
						onClick={this.handlePrevPageClick}
						disabled={disable.left}
					>
						{'<'}
					</button>
					{nav && (
						<span className="pagination__nav">
							{nav.current} / {nav.total}
						</span>
					)}
					<button
						className="pagination__right"
						type="button"
						onClick={this.handleNextPageClick}
						disabled={disable.right}
					>
						{'>'}
					</button>
				</div>
			</footer>
		);
	}
}

export default Footer;
