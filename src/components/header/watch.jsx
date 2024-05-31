import { useState, useEffect } from "react";
import './watch.css';

function Watch() {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const getTime = () => {
		const time = Date.now();

		setHours(Math.floor((time / (1000 * 60 * 60)) % 24) + 3);	//!
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};
	useEffect(() => {
		const interval = setInterval(() => getTime(), 1000);

		return () => clearInterval(interval);
	}, []);

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

export default Watch;