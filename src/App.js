import React, { useState } from 'react';
import Input from './components/Input';
import Scorecard from './components/Scorecard';
import './App.css';

function App() {
	const [boxScore, setBoxScore] = useState({
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
	});
	const [toggle, setToggle] = useState(false);
	const [reset, setReset] = useState(false);

	function resetScorecard() {
		setBoxScore({
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
		});
		setToggle(false);
		setReset(true);
	}

	return (
		<div className="App">
			<h1>JIM'S BOWL-O-RAMA 🎳</h1>
			<div className="subtitle">Fire this up on desktop for best results</div>
			<Input
				boxScore={boxScore}
				setBoxScore={setBoxScore}
				toggle={toggle}
				setToggle={setToggle}
				reset={reset}
				setReset={setReset}
			/>
			<Scorecard boxScore={boxScore} setBoxScore={setBoxScore} />
			<div className="reset">
				{toggle ? (
					<div>
						<h3>Great game! How about another?</h3>
						<button onClick={resetScorecard}>New Game</button>
					</div>
				) : (
					<button onClick={resetScorecard}>Reset Game</button>
				)}
			</div>
			<footer>
				<a
					href="https://www.wikihow.com/Score-Bowling"
					target="_blank"
					rel="noreferrer"
				>
					Learn how to keep score
				</a>
				<div>
					Developed by{' '}
					<a
						href="https://github.com/JimBurch/bowling-scorecard"
						target="_blank"
						rel="noreferrer"
					>
						Jim
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
