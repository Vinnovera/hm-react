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

		default:
			return state
	}
};

export default reducer