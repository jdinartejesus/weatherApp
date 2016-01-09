import request from 'axios';
import fetch from 'isomorphic-fetch'

/*
 * action types
 */

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const INVALIDE_DATA = 'INVALIDE_DATA'

/*
 * action creators
 */

export function requestWeather(location) {
  return {
    type: REQUEST_DATA,
    location
  }
}

export function invalidWeather(err, msg) {
  return {
    type: INVALIDE_DATA,
    error: err,
    message: msg
  }
}

export function receiveWeather(json) {
  return {
    type: RECEIVE_DATA,
    daily: json,
    receivedAt: Date.now()
  }
}

export function fetchLocations(location) {
  return dispatch => {
    dispatch(requestWeather(location))
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2de143494c0b295cca9337e1e96b00e0`)
      .then(req => req.json())
      .then(fetchStatus)
      .then(function(data) {
        dispatch(receiveWeather(data))
      }).catch(function(error) {
        dispatch(invalidWeather(error.response.cod, error.message))
      })
  }
}

export function fetchStatus(response) {
  if (response.cod >= 200 && response.cod < 300) {
    return response
  } else {
    var error = new Error(response.message)
    error.response = response
    throw error
  }
}
