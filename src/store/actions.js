export const addCounter = () => ({
	type: 'ADD'
});

export const removeCounter = () => ({
	type: 'REMOVE'
});

export const increaseCounter = index => ({
	type: 'INCREASE',
	payload: {
		index
	}
});

export const decreaseCounter = index => ({
	type: 'DECREASE',
	payload: {
		index
	}
});