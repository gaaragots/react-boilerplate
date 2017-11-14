export const types = {
  LOADER_START: 'LOADER_START',
  LOADER_FINISH: 'LOADER_FINISH'
}

export const actions = {
  /**
   * Start the loader
   * @returns {Object} Action
   */
  LoaderStart() {
    return { type: types.LOADER_START }
  },

  /**
   * Ends the loader
   * @returns {Object} Action
   */
  LoaderEnd() {
    return { type: types.LOADER_FINISH }
  }
}
