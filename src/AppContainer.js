import { connect } from 'react-redux'
import App from './App'

import { fetchCounters, addCounter, removeCounter } from "./store/counters/actions";
import { getCounterIdsList, getCountersLoading } from "./store/counters/selectors";

const mapStateToProps = state => ({
	counters: getCounterIdsList(state),
	loading: getCountersLoading(state)
});

const mapDispatchToProps = ({
	fetchCounters,
	addCounter,
	removeCounter
});

export default connect(mapStateToProps, mapDispatchToProps)(App)