import axios from 'axios'
import {getCounterById, getCounterIdsList} from "./selectors";

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
	axios.post('/api/counters', { counter: 0 })
		.then(() => dispatch(fetchCounters()))
);

export const removeCounter = () => (dispatch, getState) => {
	const lastId = getCounterIdsList(getState()).pop()
	axios.delete(`/api/counters/${lastId}`)
		.then(() => dispatch(fetchCounters()))
}

export const increaseCounter = id => (dispatch, getState) => {
	const counter = getCounterById(getState(), id).counter
	axios.patch(
		`/api/counters/${id}`,
		{ counter: counter + 1 }
	).then(() => dispatch(fetchCounters()))
}

export const decreaseCounter = id => (dispatch, getState) => {
	const counter = getCounterById(getState(), id).counter
	axios.patch(
		`/api/counters/${id}`,
		{ counter: counter - 1 }
	).then(() => dispatch(fetchCounters()))
}