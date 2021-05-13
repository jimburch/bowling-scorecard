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

	function updateScorecard(currentFrame, currentTurn, currentScore) {
		let frame = boxScore[currentFrame];

		if (currentTurn === 1 && currentScore === '10') {
			frame[currentTurn] = 'X';
			setBoxScore({ ...boxScore, currentFrame: frame });
			console.log('strike!');
		} else if (
			currentTurn === 2 &&
			Number(frame[0]) + Number(currentScore) === 10
		) {
			frame[currentTurn - 1] = '/';
			setBoxScore({ ...boxScore, currentFrame: frame });
			console.log('spare!');
		} else {
			frame[currentTurn - 1] = currentScore;
			setBoxScore({ ...boxScore, currentFrame: frame });
			console.log('score!');
		}
	}

	function calculateScores() {
		for (let frame in boxScore) {
			// figure out how to do this shit
		}
	}

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
