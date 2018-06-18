import React from 'react';
import Counter from './components/Counter/CounterContainer'
import './App.css'

const App = ({ counters, addCounter, removeCounter }) => (
	<section className="App">
		{counters.map((counterState, i) =>
			<Counter index={i} />
		)}
		<button onClick={addCounter}>Add</button>
		<button onClick={removeCounter}>Remove</button>
	</section>
);

export default App;