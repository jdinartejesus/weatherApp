/* global fetch  */
import { requestWeather, invalidWeather, receiveWeather } from './weatherActions'
import { requestBackground, invalidBackground, receiveBackground } from './BackgroundActions'
import { config } from '../../config'

const APIWeather = 'http://api.openweathermap.org'
const APIUnplash = 'https://api.unsplash.com'

export function fetchLocations (location) {
  const units = 'metric'
  const appID = config.API_OPEN_WEATHER_ID

  return dispatch => {
    dispatch(requestWeather())
    return fetch(`${APIWeather}/data/2.5/weather?q=${location}&units=${units}&appid=${appID}`)
      .then(req => req.json())
      .then(data => {
        if (data.cod === 200 || data.cod < 300) {
          dispatch(receiveWeather(data))
          dispatch(fetchBackground(location, data.weather[0].description))
        } else {
          const error = new Error(data.statusText)
          error.data = data
          dispatch(invalidWeather(data.cod, data.message))
          throw error
        }
      }).catch(error => {
        console.log('request failed', error)
      })
  }
}

export function fetchBackground (location, weather) {
  console.log('fetch Background image')
  const appID = config.API_UNPLASH_ID

  return dispatch => {
    dispatch(requestBackground())
    return fetch(`${APIUnplash}/search/photos/?client_id=${appID}&query=${location}`)
      .then(req => {
        if (req.status === 200 || req.status < 300) {
          return req.json()
        } else {
          const error = new Error(req.statusText)
          error.data = req
          dispatch(invalidBackground(req.status, req.message))
          throw error
        }
      })
      .then(data => {
        dispatch(receiveBackground(getRandomPhoto(data.results)))
      }).catch(error => {
        console.log('request failed', error)
      })
  }
}

function getRandomPhoto (photos) {
  const randomIndex = Math.floor(Math.random() * (photos.length - 0) + 0)
  console.log(randomIndex)
  return photos[randomIndex]
}
