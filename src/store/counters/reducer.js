const initialState = {
	loading: false,
	counters: [  ]
};

const reducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case 'FETCH':
			return {
				...state,
				loading: true
			};

		case 'FETCH_SUCCESS':
			return {
				...state,
				counters: payload.counters,
				loading: false
			};

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