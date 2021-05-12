import React from 'react';

function Input(props) {
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
		if (props.frame < 10) {
			if (props.turn !== 1 || e.target.value === '10') {
				props.setPins(10);
				props.setTurn(1);
				props.setFrame(props.frame + 1);
			} else {
				props.setPins(10 - e.target.value);
				props.setTurn(props.turn + 1);
			}
		}
	}

	const pinChoices = renderPins(props.pins);

	return (
		<div className="input">
			<div>How many pins did you knock down?</div>
			{pinChoices}
		</div>
	);
}

export default Input;
