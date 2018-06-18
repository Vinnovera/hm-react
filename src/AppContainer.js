import { connect } from 'react-redux'
import App from './App'

import { addCounter, removeCounter } from "./store/actions";

const mapStateToProps = state => ({
	counters: state.counters
});

const mapDispatchToProps = ({
	addCounter,
	removeCounter
});

export default connect(mapStateToProps, mapDispatchToProps)(App)