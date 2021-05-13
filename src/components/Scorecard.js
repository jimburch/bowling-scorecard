import React from 'react';

function Scorecard({ boxScore }) {
	function renderScorecard() {
		const frameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return frameArray.map((frame, index) => (
			<div className="frame" key={index} value={frame}>
				<div className="turn-one">{boxScore[frame][0]}</div>
				<div className="turn-two">{boxScore[frame][1]}</div>
				<div className="subtotal">{boxScore[frame][2]}</div>
			</div>
		));
	}

	const frames = renderScorecard();

	return (
		<div className="scorecard">
			<div className="frames-container">
				{frames}
				<div className="frame" value={10}>
					<div className="turn-one">{boxScore[10][0]}</div>
					<div className="turn-two">{boxScore[10][1]}</div>
					<div className="turn-three">{boxScore[10][2]}</div>
					<div className="subtotal">{boxScore[10][3]}</div>
				</div>
			</div>
		</div>
	);
}

export default Scorecard;
