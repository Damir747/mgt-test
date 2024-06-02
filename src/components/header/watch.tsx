import React from 'react';
import './watch.css';

interface WatchState {
	hours: number;
	minutes: number;
	seconds: number;
}

class Watch extends React.Component<{}, WatchState> {
	private timerID: NodeJS.Timeout | null = null;

	constructor(props: {}) {
		super(props);
		this.state = {
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			seconds: new Date().getSeconds(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		if (this.timerID) {
			clearInterval(this.timerID);
		}
	}

	tick() {
		this.setState({
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			seconds: new Date().getSeconds(),
		});
	}

	render() {
		const { hours, minutes, seconds } = this.state;

		return (
			<div className="watch">
				<div className="col-4">
					<div className="box">
						<p id="hour">{hours < 10 ? "0" + hours : hours}</p>
						<span className="text">Hours</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
						<span className="text">Minutes</span>
					</div>
				</div>
				<div className="col-4">
					<div className="box">
						<p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
						<span className="text">Seconds</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Watch;
