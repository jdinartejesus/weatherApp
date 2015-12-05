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

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2de143494c0b295cca9337e1e96b00e0'

export function requestWeather(location) {
    return {
        type: REQUEST_DATA,
        location
    }
}

export function invalideWeather(err, msg) {
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
        return fetch(API_URL)
            .then(req => req.json())
            .then(fetchStatus)
            .then(function(data) {
                dispatch(receiveWeather(data))
            }).catch(function(error) {
                dispatch(invalideWeather(error.response.cod, error.message))
            })
    }
}

function fetchStatus(response){
    if(response.cod >= 200 && response.cod < 300){
        return response
    }else{
        var error = new Error(response.message)
        error.response = response
        throw error
    }
}
