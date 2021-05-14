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
		frame[4] = 1;
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
		frame[4] = 1;
	}

	function calculateScore(currentFrame) {
		let frame = boxScore[currentFrame];
		if (boxScore[currentFrame - 1]) {
			frame[2] = boxScore[currentFrame - 1][2] + frame[3];
		} else {
			frame[2] = frame[3];
		}
		frame[4] = 1;
	}

	function scoreLoop(currentFrame) {
		for (let i = 1; i <= currentFrame; i++) {
			if (boxScore[i][1] === 'X' && boxScore[i + 2][1]) {
				calculateStrike(i);
			} else if (boxScore[i][1] === '/' && boxScore[i + 1][1]) {
				calculateSpare(i);
			} else if (
				boxScore[i][1] &&
				boxScore[i][1] !== 'X' &&
				boxScore[i][1] !== '/' &&
				boxScore[i - 1][4]
			) {
				calculateScore(i);
			}
		}
	}

	function updateScorecard(currentFrame, currentTurn, currentScore) {
		let frame = boxScore[currentFrame];

		if (currentTurn === 1 && currentScore === '10') {
			frame[currentTurn] = 'X';
			frame[3] = 10;
			setBoxScore({ ...boxScore, currentFrame: frame });
		} else if (
			currentTurn === 2 &&
			Number(frame[0]) + Number(currentScore) === 10
		) {
			frame[currentTurn - 1] = '/';
			frame[3] = 10;
			setBoxScore({ ...boxScore, currentFrame: frame });
		} else {
			frame[currentTurn - 1] = currentScore;
			if (currentTurn === 2) {
				frame[3] = Number(frame[0]) + Number(frame[1]);
			}
			setBoxScore({ ...boxScore, currentFrame: frame });
		}

		scoreLoop(currentFrame);
	}

	function handleLastFrame(currentFrame, currentTurn, currentScore) {
		let frame = boxScore[currentFrame];

		if (currentFrame === 10) {
			if (currentScore === '10') {
				frame[1] = 'X';
				frame[3] = 10;
			} else {
				frame[1] = currentScore;
				frame[3] = Number(currentScore);
			}
			setBoxScore({ ...boxScore, currentFrame: frame });
		} else if (currentFrame === 11) {
			if (Number(boxScore[10][1]) + Number(currentScore) === 10) {
				frame[1] = '/';
				frame[3] = Number(currentScore);
			} else if (currentScore === '10') {
				frame[1] = 'X';
				frame[3] = 10;
			} else {
				frame[1] = currentScore;
				frame[3] = Number(currentScore);
			}
			setBoxScore({ ...boxScore, currentFrame: frame });
		} else {
			if (Number(boxScore[11][1]) + Number(currentScore) === 10) {
				frame[1] = '/';
				frame[3] = Number(currentScore);
			} else if (currentScore === '10') {
				frame[1] = 'X';
				frame[3] = 10;
			} else {
				frame[1] = currentScore;
				frame[3] = Number(currentScore);
			}
			setBoxScore({ ...boxScore, currentFrame: frame });
		}

		scoreLoop(currentFrame);
		console.log(boxScore);
	}

	function handleClick(e) {
		e.preventDefault();
		if (frame < 10) {
			updateScorecard(frame, turn, e.target.value);
			if (turn !== 1 || e.target.value === '10') {
				setPins(10);
				setTurn(1);
				setFrame(frame + 1);
			} else {
				setPins(10 - e.target.value);
				setTurn(turn + 1);
			}
		}
		if (frame === 10) {
			handleLastFrame(frame, turn, e.target.value);
			setTurn(1);
			setFrame(11);
			if (e.target.value !== '10') {
				setPins(10 - e.target.value);
			} else {
				setPins(10);
			}
		}
		if (frame === 11) {
			handleLastFrame(frame, turn, e.target.value);
			if (e.target.value === '10') {
				setPins(10);
				setFrame(12);
			} else if (
				boxScore[10][3] === 10 &&
				boxScore[10][3] + Number(e.target.value) !== 10
			) {
				console.log('open');
				setPins(10 - e.target.value);
				setFrame(12);
			} else if (
				boxScore[10][3] === 10 ||
				boxScore[10][3] + Number(e.target.value) === 10
			) {
				console.log('strike or spare');
				setPins(10);
				setFrame(12);
			} else {
				console.log('game over!');
			}
		}
		if (frame === 12) {
			handleLastFrame(frame, turn, e.target.value);
			console.log('game over');
			// create end game validation
		}
	}

	const pinChoices = renderPins(pins);

	return (
		<div className="input">
			<h3>How many pins did you knock down?</h3>
			{pinChoices}
		</div>
	);
}

export default Input;
