import React from 'react';

function Scorecard({ boxScore, setBoxScore }) {
	function renderScorecard() {
		const frameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return frameArray.map((frame, index) => (
			<div className="frame" key={index}>
				<div className="frame-number">{frame}</div>
				<div className="frame-top-row">
					<div className="turn-one">{boxScore[frame][0]}</div>
					<div className="turn-two">{boxScore[frame][1]}</div>
				</div>
				<div className="subtotal">{boxScore[frame][2]}</div>
			</div>
		));
	}

	const frames = renderScorecard();

	function renderFinalScore() {
		// open
		if (boxScore[11][1] && boxScore[10][3] + boxScore[11][3] < 10) {
			return boxScore[11][2];
		}
		// spare -> open
		// spare -> strike
		if (boxScore[10][3] + boxScore[11][3] === 10 && boxScore[12]) {
			return boxScore[11][2];
		}
		// strike -> open
		// strike -> spare
		if (boxScore[10][3] === 10 && boxScore[12][3] < 10) {
			return boxScore[10][2];
		}
		// three strikes
		if (boxScore[10][3] + boxScore[11][3] + boxScore[12][3] === 30) {
			return boxScore[10][2];
		}
	}

	const finalScore = renderFinalScore();

	return (
		<div className="scorecard">
			<div className="frames-container">
				{frames}
				<div className="last-frame" value={10}>
					<div className="frame-number">10</div>
					<div className="last-frame-top-row">
						<div className="last-turn-one">{boxScore[10][1]}</div>
						<div className="last-turn-two">{boxScore[11][1]}</div>
						<div className="last-turn-three">{boxScore[12][1]}</div>
					</div>
					<div className="last-subtotal">{finalScore}</div>
				</div>
			</div>
		</div>
	);
}

export default Scorecard;
