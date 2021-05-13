import React, { useState } from 'react';
import Input from './components/Input';
import Scorecard from './components/Scorecard';
import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [boxScore, setBoxScore] = useState({
		// frame: [turn 1, turn 2, (turn 3), subtotal, frame total]
		1: ['', '', null, null],
		2: ['', '', null, null],
		3: ['', '', null, null],
		4: ['', '', null, null],
		5: ['', '', null, null],
		6: ['', '', null, null],
		7: ['', '', null, null],
		8: ['', '', null, null],
		9: ['', '', null, null],
		10: ['', '', '', null, null],
	});

	return (
		<div className="App">
			<h1>Bowling Scorecard</h1>
			<h3>Score: {score}</h3>
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
