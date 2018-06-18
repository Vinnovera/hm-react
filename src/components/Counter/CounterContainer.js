import { connect } from 'react-redux'
import Counter from './Counter'

import { increaseCounter, decreaseCounter } from "../../store/actions";

const mapStateToProps = (state, { index }) => ({
	counter: state.counters[index].counter
});

const mapDispatchToProps = (dispatch, { index }) => ({
	increaseCounter: () => dispatch(increaseCounter(index)),
	decreaseCounter: () => dispatch(decreaseCounter(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)