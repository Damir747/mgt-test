import SelectForm from "./select-form";
import Watch from "./watch";

function Header({ dispatch }) {

	return (
		<header className="app-header">
			<img src="https://xn--80ahnpv.xn--p1ai/wp-content/uploads/2022/01/engineer-testing-fiber-optic-cables-600w-328327886.jpg"
				className="app-header-img"
				alt="картинка из открытых источников" />

			<SelectForm
				dispatch={dispatch}
			/>

			<Watch>

			</Watch>
		</header>);
}

export default Header;