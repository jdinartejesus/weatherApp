import {UPDATE, NEXT_LOCATION, PREVIOUS_LOCATION } from '../actions'

const initialState = [
    {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n"
    }
]

export default function weatherApp(state = initialState, action) {
    switch (action.type) {
        case UPDATE:
            return state
        case NEXT_LOCATION:
            return state
        case PREVIOUS_LOCATION:
            return state
        default:
            return state
    }
}
