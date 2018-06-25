import { connect } from 'react-redux'
import App from './App'

import { fetchCounters, addCounter, removeCounter } from "./store/counters/actions";
import {getCountersList, getCountersLoading} from "./store/counters/selectors";

const mapStateToProps = state => ({
	counters: getCountersList(state),
	loading: getCountersLoading(state)
});

const mapDispatchToProps = ({
	fetchCounters,
	addCounter,
	removeCounter
});

export default connect(mapStateToProps, mapDispatchToProps)(App)