import React, { useState } from 'react';

function Input({ boxScore, setBoxScore }) {
	const [frame, setFrame] = useState(1);
	const [turn, setTurn] = useState(1);
	const [pins, setPins] = useState(10);

	function renderPins(pins) {
		const pinArray = [];
		for (let i = 0; i <= pins; i++) {
			pinArray.push(i);
		}
		return pinArray.map((index, pin) => (
			<button key={index} value={pin} onClick={handleClick}>
				{pin}
			</button>
		));
	}

	function calculateStrike(currentFrame) {
		let frame = boxScore[currentFrame];
		if (boxScore[currentFrame - 1]) {
			frame[2] =
				boxScore[currentFrame - 1][2] +
				frame[3] +
				boxScore[currentFrame + 1][3] +
				boxScore[currentFrame + 2][3];
		} else {
			frame[2] =
				frame[3] +
				boxScore[currentFrame + 1][3] +
				boxScore[currentFrame + 2][3];
		}
	}

	function calculateSpare(currentFrame) {
		let frame = boxScore[currentFrame];
		if (boxScore[currentFrame - 1]) {
			frame[2] =
				boxScore[currentFrame - 1][2] +
				frame[3] +
				boxScore[currentFrame + 1][3];
		} else {
			frame[2] = frame[3] + boxScore[currentFrame + 1][3];
		}
	}

	function calculateScore(currentFrame) {
		let frame = boxScore[currentFrame];
		if (boxScore[currentFrame - 1]) {
			frame[2] = boxScore[currentFrame - 1][2] + frame[3];
		} else {
			frame[2] = frame[3];
		}
		console.log(frame);
	}

	function scoreLoop(currentFrame) {
		for (let i = 1; i <= currentFrame; i++) {
			if (boxScore[i][1] === 'X' && boxScore[i + 2][3]) {
				calculateStrike(i);
				console.log('calc strike!');
			} else if (boxScore[i][1] === '/' && boxScore[i + 1][3]) {
				calculateSpare(i);
				console.log('calc spare!');
			} else if (
				boxScore[i][1] &&
				boxScore[i][1] !== 'X' &&
				boxScore[i][1] !== '/'
			) {
				calculateScore(i);
				console.log('calc score!');
			}
		}
	}

	function updateScorecard(currentFrame, currentTurn, currentScore) {
		let frame = boxScore[currentFrame];

		if (currentTurn === 1 && currentScore === '10') {
			frame[currentTurn] = 'X';
			frame[3] = 10;
			setBoxScore({ ...boxScore, currentFrame: frame });
			console.log('strike!');
		} else if (
			currentTurn === 2 &&
			Number(frame[0]) + Number(currentScore) === 10
		) {
			frame[currentTurn - 1] = '/';
			frame[3] = 10;
			setBoxScore({ ...boxScore, currentFrame: frame });
			console.log('spare!');
		} else {
			frame[currentTurn - 1] = currentScore;
			if (currentTurn === 2) {
				frame[3] = Number(frame[0]) + Number(frame[1]);
			}
			setBoxScore({ ...boxScore, currentFrame: frame });
			console.log('score!');
		}

		scoreLoop(currentFrame);
	}

	function handleClick(e) {
		e.preventDefault();
		updateScorecard(frame, turn, e.target.value);
		if (frame < 10) {
			if (turn !== 1 || e.target.value === '10') {
				setPins(10);
				setTurn(1);
				setFrame(frame + 1);
			} else {
				setPins(10 - e.target.value);
				setTurn(turn + 1);
			}
		}
	}

	const pinChoices = renderPins(pins);

	return (
		<div className="input">
			<h3>
				Frame {frame}, Turn {turn}
			</h3>
			<div>How many pins did you knock down?</div>
			{pinChoices}
		</div>
	);
}

export default Input;
