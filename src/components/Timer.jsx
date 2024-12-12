import React, { useEffect, useState } from "react";

function Timer({ timeout, onTimeout }) {
	const [remainTime, setRemainTime] = useState(timeout);
	// console.log(remainTime);

	useEffect(() => {
		console.log("TIMEOUT");
		const interval = setTimeout(onTimeout, timeout);

		return () => {
			clearInterval(interval);
		};
	}, [timeout, onTimeout]);

	useEffect(() => {
		console.log("INTERVAL");
		const interval = setInterval(() => {
			setRemainTime((prev) => prev - 100);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <progress id="question-time" max={timeout} value={remainTime} />;
}

export default Timer;
