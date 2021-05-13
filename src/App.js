import React, { useState } from 'react';
import Input from './components/Input';
import Scorecard from './components/Scorecard';
import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [boxScore, setBoxScore] = useState({
		// frame: [turn 1, turn 2, (turn 3), game subtotal, frame total]
		0: ['', '', null, null, 1],
		1: ['', '', null, null, 0],
		2: ['', '', null, null, 0],
		3: ['', '', null, null, 0],
		4: ['', '', null, null, 0],
		5: ['', '', null, null, 0],
		6: ['', '', null, null, 0],
		7: ['', '', null, null, 0],
		8: ['', '', null, null, 0],
		9: ['', '', null, null, 0],
		10: ['', '', null, null, 0],
		11: ['', '', null, null, 0],
		12: ['', '', null, null, 0],
		13: ['', '', null, null, 0],
		14: ['', '', null, null, 0],
		15: ['', '', null, null, 0],
		16: ['', '', null, null, 0],
		// 10: ['', '', '', null, null],
	});

	return (
		<div className="App">
			<h1>Bowling Scorecard</h1>
			<Input boxScore={boxScore} setBoxScore={setBoxScore} />
			<Scorecard
				score={score}
				setScore={setScore}
				boxScore={boxScore}
				setBoxScore={setBoxScore}
			/>
		</div>
	);
}

export default App;
