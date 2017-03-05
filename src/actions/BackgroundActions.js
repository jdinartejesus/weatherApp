import {REQUEST_BACKGROUND, RECEIVE_BACKGROUND, INVALIDE_BACKGROUND} from '../constants/'

export function requestBackground () {
  return {
    type: REQUEST_BACKGROUND
  }
}

export function invalidBackground (err, msg) {
  return {
    type: INVALIDE_BACKGROUND,
    error: err,
    message: msg
  }
}

export function receiveBackground (background) {
  return {
    type: RECEIVE_BACKGROUND,
    background,
    receivedAt: Date.now()
  }
}
