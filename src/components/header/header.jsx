import React from "react";
import SelectForm from "./select-form";
import Watch from "./watch";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.changeLanguage = props.changeLanguage;
	}

	render() {
		return (
			<header className="app-header" >
				<a href="https://дамир.рф/%d0%bc%d1%83%d0%bb%d1%8c%d1%82%d0%b8%d0%bc%d0%b5%d1%82%d1%80-%d0%b8-%d0%be%d0%bf%d1%82%d0%be%d0%b2%d0%be%d0%bb%d0%be%d0%ba%d0%be%d0%bd%d0%bd%d1%8b%d0%b9-%d0%ba%d0%b0%d0%b1%d0%b5%d0%bb%d1%8c/"
					target="_blank" rel="noreferrer"
				>
					<img src="https://xn--80ahnpv.xn--p1ai/wp-content/uploads/2022/01/engineer-testing-fiber-optic-cables-600w-328327886.jpg"
						className="app-header-img"
						alt="картинка из открытых источников" />
				</a>

				<SelectForm
					changeLanguage={this.props.changeLanguage}
				/>

				<Watch />

			</header>);
	}
}

export default Header;
