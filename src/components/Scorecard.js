import React from 'react';

function Scorecard() {
	function renderScorecard() {
		const framesArray = [];
		for (let i = 1; i < 10; i++) {
			framesArray.push(i);
		}
		return framesArray.map((index, frame) => (
			<div className="frame" key={index} value={frame}>
				y<div className="frame-corner">x</div>
			</div>
		));
	}

	const frames = renderScorecard();

	return (
		<div className="scorecard">
			<h1>Scorecard</h1>
			<div className="frames-container">
				{frames}
				<div className="frame" value={10}>
					y<div className="frame-corner">x</div>
					<div className="frame-corner">x</div>
				</div>
			</div>
		</div>
	);
}

export default Scorecard;
