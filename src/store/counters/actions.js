import axios from 'axios'

export const fetchCounters = () => dispatch => {
	dispatch(fetchStart())

	axios.get('/api/counters').then(({ data }) => {
		dispatch(fetchSuccess(data))
	});
};

export const fetchStart = counters => ({
	type: 'FETCH',
})

export const fetchSuccess = counters => ({
	type: 'FETCH_SUCCESS',
	payload: { counters }
})

export const addCounter = () => dispatch => (
	axios.post('/api/counters', { counter: 0 }).then(({ data }) => {
		dispatch(fetchCounters())
	})
);

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