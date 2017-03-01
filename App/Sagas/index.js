import { takeLatest } from 'redux-saga'

/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'

/* ------------- Sagas ------------- */

import { login } from './LoginSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
  ]
}
