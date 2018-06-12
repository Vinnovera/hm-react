import React, {Fragment} from 'react';
import Button from "./Button/Button";
import Number from "./Number/Number";

const CounterWrapper = ({ counter, increaseCounter, decreaseCounter }) => (
	<Fragment>
		<Button onClick={increaseCounter}>+</Button>
		<Number number={counter} />
		<Button onClick={decreaseCounter}>-</Button>
	</Fragment>
)

export default CounterWrapper;