export const getCounters = state => state.counters
export const getCountersList = state => getCounters(state).counters
export const getCountersLoading = state => getCounters(state).loading
export const getCounterByIndex = (state, index) => getCountersList(state)[index]
