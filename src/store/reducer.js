const initialState = {
	foo: 'foo',
	counters: [  ]
};

const reducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case 'ADD':
			return {
				...state,
				counters: [
					...state.counters,
					{ counter: 0 }
				]
			};

		case 'REMOVE':
			return {
				...state,
				counters: [
					...state.counters.slice(1)
				]
			};

		case 'INCREASE': {
			const counters = [...state.counters];
			counters[payload.index].counter++;
			return {
				...state,
				counters
			};
		}

		case 'DECREASE': {
			const counters = [...state.counters];
			counters[payload.index].counter--;
			return {
				...state,
				counters
			};
		}

		default:
			return state
	}
};

export default reducer