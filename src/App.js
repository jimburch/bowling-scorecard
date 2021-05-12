import React, { useState } from 'react';
import Input from './components/Input';
import Scorecard from './components/Scorecard';
import './App.css';

function App() {
	const [score, setScore] = useState(0);
	const [boxScore, setBoxScore] = useState({
		1: ['', '', null],
		2: ['', '', null],
		3: ['', '', null],
		4: ['', '', null],
		5: ['', '', null],
		6: ['', '', null],
		7: ['', '', null],
		8: ['', '', null],
		9: ['', '', null],
		10: ['', '', '', null],
	});

	return (
		<div className="App">
			<h1>Bowling Scorecard</h1>
			<h3>Score: {score}</h3>
			<Input boxScore={boxScore} setBoxScore={setBoxScore} />
			<Scorecard boxScore={boxScore} />
		</div>
	);
}

export default App;
