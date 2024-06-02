function Footer({ nav = null, disable, onNextPageClick, onPrevPageClick }) {

	const handleNextPageClick = () => {
		onNextPageClick();
	};
	const handlePrevPageClick = () => {
		onPrevPageClick();
	};

	return (
		<footer className="app-footer">
			<div className='pagination__div' >
				<button
					className='pagination__left'
					type="button"
					onClick={handlePrevPageClick}
					disabled={disable.left}>
					{'<'}
				</button>
				{
					nav && (
						<span className='pagination__nav' >
							{nav.current} / {nav.total}
						</span>
					)}
				<button
					className='pagination__right'
					type="button"
					onClick={handleNextPageClick}
					disabled={disable.right}>
					{'>'}
				</button>
			</div>
		</footer>);
}

// type FooterProps = {
// 	onNextPageClick: () => void;
// 	onPrevPageClick: () => void;
// 	disable: {
// 		left: boolean;
// 		right: boolean;
// 	};
// 	nav?: {
// 		current: number;
// 		total: number;
// 	};
// };

export default Footer;

