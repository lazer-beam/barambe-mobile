import decode from 'jwt-decode'
import axios from 'axios'
import Config from 'react-native-config'
import Reactotron from 'reactotron-react-native'

export function getTokenExpirationDate(token) {
  const decoded = decode(token)
  if (!decoded.exp) {
    return null
  }

  const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp)
  return date
}

export function isTokenExpired(token) {
  if(!token) return true
  const date = getTokenExpirationDate(token)
  const offsetSeconds = 0
  if (date === null) {
    return false
  }
  return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
}

export function axiosPrivate(token) {
  return axios.create({
    baseURL: Config.DEV_MODE === 'DEVELOPMENT' ? 'http://localhost:1337/' : Config.API_URL,
    headers: {'Authorization': `Bearer ${token}`},

  })
}

export function axiosPublic() {
  return axios.create({
    baseURL: Config.DEV_MODE === 'DEVELOPMENT' ? 'http://localhost:1337/' : Config.API_URL,
  })
}

export function axiosAuth(refresh_token) {
  return {
    headers: {'Content-Type': 'application/json'},
    client_id: Config.LOGIN_CLIENTID,
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    api_type: 'app',
    refresh_token,
  }
}