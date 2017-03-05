import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/'
import configureStore from './store/'

let store = configureStore()

import 'weather-icons/css/weather-icons.css'

// Import Material Design Lite
import 'material-design-lite/material.min.css'
import 'material-design-lite/material.min.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
