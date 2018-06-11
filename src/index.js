import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

/*
function foo(arg1, arg2) {
	return 'bar';
}

var foo = function(arg1, arg2) {
	return 'bar';
}

// Arrow functions
var subtract = (num1 = 1, num2 = 2) => num1 - num2;

suctract(undef);

// New cariables
const foo = 'bar';
let foo = 'bar';

() => {
	if (true) {
		let foo = '';
	}

}

// Destructuring
const foo = {
	key1: { subKey1: 'bar'},
	key2: 'baz'
}

const { key1, key2 } = foo;

const bar = ({ key1 }) => key1;

bar(foo);*/