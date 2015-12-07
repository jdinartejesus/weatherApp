import { combineReducers } from 'redux'
import {REQUEST_DATA, RECEIVE_DATA, INVALIDE_DATA} from '../actions'

//TODO: Immutable
const initialState = {
    isFetching: false,
    isError: false,
    isLoaded: false,
    weather: {}
}

export default function weatherApp(state = initialState, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                isError: false,
                isLoaded: false
            });
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                isError: false,
                isLoaded: true,
                weather: action.daily,
                lastUpdated: action.receivedAt
            })
        case INVALIDE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                isError: true,
                isLoaded: true,
                error: action.error,
                message: action.message
            });
        default:
            return state
    }
}
