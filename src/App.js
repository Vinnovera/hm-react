import React, { Component, Fragment } from 'react';
import Counter from './components/Counter/Counter'
import './App.css'

class App extends Component {
	state = {
		counters: [],
		base: 1
	}

	addCounter = () => this.setState(
		{
			counters: [
				...this.state.counters,
				{ counter: 0 }
			]
		}
	);

	removeCounter = () => this.setState(
		{
			counters: [
				...this.state.counters.slice(1)
			]
		}
	);

	decreaseCounter = index => {
		const counters = [...this.state.counters];
		counters[index].counter--;

		this.setState({ counters })
	};

	increaseCounter = index => {
		const counters = [...this.state.counters];
		counters[index].counter++;

		this.setState({ counters })
	};

	increaseBase = () => this.setState({base: this.state.base + 1})

	render() {
		return (
			<section className="App">
				{this.state.counters.map((counterState, i) =>
					<Counter
						counter={counterState.counter}
						key={i}
						base={this.state.base}
						increaseCounter={() => this.increaseCounter(i)}
						decreaseCounter={() => this.decreaseCounter(i)}
					/>
				)}
				<button onClick={this.addCounter}>Add</button>
				<button onClick={this.removeCounter}>Remove</button>
				<button onClick={this.increaseBase}>Increase base</button>
			</section>
		)
	}
}

export default App;