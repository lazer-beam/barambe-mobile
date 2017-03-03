// @flow

import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginSuccess: ['user', 'refreshToken', 'idToken', 'accessToken'],
  tokenAuthSuccess: ['idToken'],
  loginFailure: ['error'],
  logout: null,
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  accessToken: null,
  refreshToken: null,
  idToken: null,
  error: null,
  init: false,
  loggedIn: false,
  fetchingLogin: false,
})

/* ------------- Reducers ------------- */


export const loginSuccessR = (state = INITIAL_STATE, user, refreshToken, idToken, accessToken) =>
  Immutable.merge(state, [{ loggedIn: true, error: null}, user, refreshToken, idToken, accessToken ])

export const tokenSuccess = (state = INITIAL_STATE, idToken) =>
  Immutable.merge(state, {idToken, loggedIn: true})
  
export const failure = (state = INITIAL_STATE, error) =>
  Immutable.merge(state, { fetching: false, error })

export const logout = (state = INITIAL_STATE) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccessR,
  [Types.TOKEN_AUTH_SUCCESS]: tokenSuccess,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = (loginState: Object) => loginState.username !== null
