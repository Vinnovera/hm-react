import React, { Component } from 'react';
import Counter from './components/Counter/CounterContainer'
import './App.css'

class App extends Component {
	componentDidMount = () => {
		this.props.fetchCounters();
	}

	render = () => {
		const { loading, counters, addCounter, removeCounter } = this.props
		return (
			<section className="App">
				{counters.map((counterState, i) =>
					<Counter index={i} />
				)}
				<button onClick={addCounter}>Add</button>
				<button onClick={removeCounter}>Remove</button>
				{ loading && <div>LOADING</div>}
			</section>
		)
	}
}

export default App;