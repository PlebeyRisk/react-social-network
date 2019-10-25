export const getInitialized = (state) => {
  return state.app.initialized;
}
export const getInitializedStatus= (state) => {
  return state.app.initializedStatus;
}
export const getStartingIntervals = (state) => {
  return state.app.startingIntervals;
}

export const appSEL = {
  getInitialized,
  getInitializedStatus,
  getStartingIntervals
};