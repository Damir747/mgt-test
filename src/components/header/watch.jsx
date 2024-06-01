import React from "react";
import './watch.css';

class Watch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			seconds: new Date().getSeconds(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			seconds: new Date().getSeconds(),
		});
	}

	render() {
		return (
			<div className="watch">
				<div className="col-4">
					<div className="box">
						<p id="hour">{this.state.hours < 10 ? "0" + this.state.hours : this.state.hours}</p>
						<span className="text">Hours</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="minute">{this.state.minutes < 10 ? "0" + this.state.minutes : this.state.minutes}</p>
						<span className="text">Minutes</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="second">{this.state.seconds < 10 ? "0" + this.state.seconds : this.state.seconds}</p>
						<span className="text">Seconds</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Watch;