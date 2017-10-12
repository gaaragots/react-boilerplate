import { ResolvedActionFactory, RejectedActionFactory } from './utils'

export const types = {
  LOGOUT_INTENT: 'LOGOUT_INTENT',
  USER_CREATE_INTENT: 'USER_CREATE_INTENT',
  AUTHENTICATE_INTENT: 'AUTHENTICATE_INTENT',
  USER_UPDATE_INTENT: 'USER_UPDATE_INTENT',
  USER_ACTIVATE_INTENT: 'USER_ACTIVATE_INTENT'
}

export const actions = {
  /**
   * Generates an Logout Action
   */
  Logout() {
    return { type: types.LOGOUT_INTENT }
  },

  /**
   * Generates an Authentication Action
   * @param {string} email - Email to log into the application
   * @param {string} password - Password to log into the application
   */
  Authenticate(email, password) {
    return {
      type: types.AUTHENTICATE_INTENT,
      data: { email, password }
    }
  },

  /**
   * Generates an Authentication Resolved Action
   * @param {object} response - Fetch API response
   */
  AuthenticateResolved(response) {
    return ResolvedActionFactory(types.AUTHENTICATE_INTENT, response)
  },

  /**
   * Generates an Authentication Rejected Action
   * @param {object} error - Fetch API response
   */
  AuthenticateRejected(error) {
    return RejectedActionFactory(types.AUTHENTICATE_INTENT, error)
  },

  /**
   * Generates an User Create Action
   * @param {string} email - Email of the new user
   * @param {string} password - Password of the new user
   * @param {string} firstname - first name of the new user
   * @param {string} lastname - last name of the new user
   */
  UserCreate(email, password, firstname, lastname) {
    return {
      type: types.USER_CREATE_INTENT,
      data: { email, password, firstname, lastname }
    }
  },

  /**
   * Generates an User Create Resolved Action
   * @param {object} response - Fetch API response
   */
  UserCreateResolved(response) {
    return ResolvedActionFactory(types.USER_CREATE_INTENT, response)
  },

  /**
   * Generates an User Create Rejected Action
   * @param {object} error - Fetch API response
   */
  UserCreateRejected(error) {
    return RejectedActionFactory(types.USER_CREATE_INTENT, error)
  },

  /**
   * Generates an User Update Action
   * @param {object} data - Data required to update an user
   */
  UserUpdate(data) {
    return {
      type: types.USER_UPDATE_INTENT,
      data
    }
  },

  /**
   * Generates an User Update Resolved Action
   * @param {object} response - Fetch API response
   */
  UserUpdateResolved(response) {
    return ResolvedActionFactory(types.USER_UPDATE_INTENT, response)
  },

  /**
   * Generates an User Update Rejected Action
   * @param {object} error - Fetch API response
   */
  UserUpdateRejected(error) {
    return RejectedActionFactory(types.USER_UPDATE_INTENT, error)
  },

  /**
   * Generates an User Activate Action
   * @param {object} token - Token to activate an user
   */
  UserActivate(token) {
    return {
      type: types.USER_ACTIVATE_INTENT,
      token
    }
  },

  /**
   * Generates an User Activate Resolved Action
   * @param {object} response - Fetch API response
   */
  UserActivateResolved(response) {
    return ResolvedActionFactory(types.USER_ACTIVATE_INTENT, response)
  },

  /**
   * Generates an User Update Rejected Action
   * @param {object} error - Fetch API response
   */
  UserActivateRejected(error) {
    return RejectedActionFactory(types.USER_ACTIVATE_INTENT, error)
  }
}

export const selectors = {
  GetUser: state => state.User,
  GetToken: state => state.User.token
}
