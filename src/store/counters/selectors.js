export const getCounters = state => state.counters
export const getCountersList = state => getCounters(state).counters
export const getCounterIdsList = state => getCountersList(state).map(({ id }) => id)
export const getCountersLoading = state => getCounters(state).loading
export const getCounterByIndex = (state, index) => getCountersList(state)[index]
export const getCounterById = (state, id) => getCountersList(state).find(counter => counter.id === id)
