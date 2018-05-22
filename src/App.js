import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0,
		input: 'bleh',
		valid: true
	}

	decreaseCounter = () => this.setState({ counter: this.state.counter - 1 });
	increaseCounter = () => this.setState({ counter: this.state.counter + 1 });

	handleInputChange = e => {
		const value = e.target.value;


		this.setState({
			input: value,
			valid: value === 'hey'
		});
	}

	render() {
		return (<Fragment>
			<Button onClick={this.increaseCounter}>+</Button>
			<Counter number={this.state.counter} />
			<Button onClick={this.decreaseCounter}>-</Button>
			<Input value={this.state.input} onChange={this.handleInputChange} valid={this.state.valid} />
			{this.state.input}
		</Fragment>);
	}
}

const Button = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;

const Counter = ({ number }) => <span>{number}</span>;

const Input = ({ value, onChange, valid }) => <input type="text" value={value} onChange={onChange} style={{
	color: valid ? 'black' : 'red'
}}/>;

export default App;