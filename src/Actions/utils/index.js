export const actions = {
  asResolved: type => `${type}_RESOLVED`,
  asRejected: type => `${type}_REJECTED`
}

/**
 * Generates an Resolved Action
 * @param {string} type - Constant with the type of action to dispatch
 * @param {object} response - Response object
 */
export const ResolvedActionFactory = (type, response) => ({
  type: actions.asResolved(type),
  ...response
})

/**
 * Generates an Rejected Action
 * @param {string} type - Constant with the type of action to dispatch
 * @param {object} error - Error object
 */
export const RejectedActionFactory = (type, error) => ({
  type: actions.asRejected(type),
  ...error
})
