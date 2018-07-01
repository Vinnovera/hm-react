import { connect } from 'react-redux'
import Counter from './Counter'

import { increaseCounter, decreaseCounter } from "../../store/counters/actions";
import { getCounterById } from "../../store/counters/selectors";

const mapStateToProps = (state, { id }) => ({
	counter: getCounterById(state, id).counter
});

const mapDispatchToProps = (dispatch, { id }) => ({
	increaseCounter: () => dispatch(increaseCounter(id)),
	decreaseCounter: () => dispatch(decreaseCounter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)