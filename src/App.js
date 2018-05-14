import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0
	}

	decreaseCounter = () => this.setState({ counter: this.state.counter - 1 });
	increaseCounter = () => this.setState({ counter: this.state.counter + 1 });

	getStyles = () => ({
		color: this.props.redButton ? 'red' : 'black'
	})

	render() {
		return (<Fragment>
			<button onClick={this.decreaseCounter} style={this.getStyles()}>-</button>
			<Counter number={this.state.counter} />
			<button onClick={this.increaseCounter} style={this.getStyles()}>+</button>
		</Fragment>);
	}
}

const Counter = (props) => <span>{props.number}</span>;

export default App;