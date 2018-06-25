import { connect } from 'react-redux'
import Counter from './Counter'

import { increaseCounter, decreaseCounter } from "../../store/counters/actions";
import {getCounterByIndex} from "../../store/counters/selectors";

const mapStateToProps = (state, { index }) => ({
	counter: getCounterByIndex(state, index).counter
});

const mapDispatchToProps = (dispatch, { index }) => ({
	increaseCounter: () => dispatch(increaseCounter(index)),
	decreaseCounter: () => dispatch(decreaseCounter(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)