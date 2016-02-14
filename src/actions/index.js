import {requestWeather, invalidWeather, receiveWeather} from './WeatherActions'

const APIWeather = 'http://api.openweathermap.org/data/2.5/weather?q='
// const APIImage = 'https://api.unsplash.com/'

export function fetchLocations(location) {
  const appID = '44db6a862fba0b067b1930da0d769e98'
  const units =  'metric'
  return dispatch => {
    dispatch(requestWeather(location))
    return fetch(APIWeather + location + `&units=${units}&appid=${appID}`)
      .then(req => req.json())
      .then(data => {
        if (data.cod == 200 && data.cod < 300) {
          dispatch(receiveWeather(data))
        }else{
          const error = new Error(data.statusText)
          error.data = data
          dispatch(invalidWeather(data.cod, data.message))
          throw error;
        }
      }).catch(error => {
        console.log('request failed', error);
      })
  }
}
