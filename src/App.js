import React, { Component, Fragment } from 'react';
import Counter from './Counter'

class App extends Component {
	state = {
		counters: [],
		base: 1
	}

	addCounter = () => this.setState(
		{
			counters: [
				...this.state.counters,
				Counter
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

	increaseBase = () => this.setState({base: this.state.base + 1})

	render() {
		return (
			<Fragment>
				{this.state.counters.map((Counter, i) => <Counter key={i} base={this.state.base}/>)}
				<button onClick={this.addCounter}>Add</button>
				<button onClick={this.removeCounter}>Remove</button>
				<button onClick={this.increaseBase}>Increase base</button>
			</Fragment>
		)
	}
}

export default App;