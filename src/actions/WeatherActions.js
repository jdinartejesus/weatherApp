import {REQUEST_DATA, RECEIVE_DATA, INVALIDE_DATA} from '../constants/'

export function requestWeather () {
  return {
    type: REQUEST_DATA
  }
}

export function invalidWeather (err, msg) {
  return {
    type: INVALIDE_DATA,
    error: err,
    message: msg
  }
}

export function receiveWeather (json) {
  return {
    type: RECEIVE_DATA,
    daily: json,
    receivedAt: Date.now()
  }
}
