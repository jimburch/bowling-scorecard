import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Scorecard from './components/Scorecard';
import './App.css';

function App() {
	const [frame, setFrame] = useState(1);
	const [turn, setTurn] = useState(1);
	const [pins, setPins] = useState(10);

	return (
		<div className="App">
			<h1>Bowling Scorecard</h1>
			<Input
				frame={frame}
				turn={turn}
				setTurn={setTurn}
				pins={pins}
				setPins={setPins}
			/>
			<Scorecard
				frame={frame}
				turn={turn}
				setTurn={setTurn}
				pins={pins}
				setPins={setPins}
			/>
		</div>
	);
}

export default App;
