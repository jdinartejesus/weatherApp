import {combineReducers} from 'redux'

import {
  REQUEST_DATA,
  RECEIVE_DATA,
  INVALIDE_DATA
} from '../constants/'


const initialState = {
  isFetching: false,
  isError: false,
  isLoaded: false,
  location: {
    data: {
      city: '',
      country: '',
      date: ''
    },
    weather: {
      id: '',
      icon: '',
      description: '',
      temp: '',
      humidity: '',
      pressure: '',
      wind: ''
    },
    background: ''
  }
};

export default function weatherApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        isLoaded: false
      });
      break;
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        isError: false,
        isLoaded: true,
        location: {
          data: {
            city: action.daily.name,
            country: action.daily.sys.country,
            date: action.daily.dt
          },
          weather: {
            id: action.daily.weather[0].id,
            icon: action.daily.weather[0].icon,
            description: action.daily.weather[0].description,
            temp: action.daily.main.temp,
            humidity: action.daily.main.humidity,
            pressure: action.daily.main.pressure,
            wind: action.daily.wind.speed
          },
          background: 'https://source.unsplash.com/category/buildings/?' + action.daily.name
        },
        lastUpdated: action.receivedAt
      })
      break;
    case INVALIDE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        isLoaded: true,
        error: action.error,
        message: action.message
      });
      break;
    default:
      return state
  }
}
