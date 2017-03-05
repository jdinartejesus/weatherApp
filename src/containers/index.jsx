import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Card from '../components/Card'
import Search from '../components/Search'
import { fetchLocations } from '../actions'

import './index.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.dispatchSearchLocation = this.dispatchSearchLocation.bind(this)
  }
  dispatchSearchLocation (location) {
    this.props.dispatch(
      fetchLocations(location)
    )
  }
  componentWillMount () {
    this.props.dispatch(
      fetchLocations('London')
    )
  }
  render () {
    const {
      isFetching,
      isLoaded,
      weatherData,
      backgroundUrl
    } = this.props

    return (
      <div className="background" style={{backgroundImage: 'url(' + backgroundUrl + ')'}} >
        <div className="mdl-layout">
          <div className="mdl-grid">
            <Search searchLocation={this.dispatchSearchLocation} />
          </div>
          <div className="mdl-grid">
            { (isFetching && !isLoaded)
                ? <div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" />
                : <Card dailyWeather={weatherData} />
            }
          </div>
        </div>
      </div>
    )
  }
}

const {
  func,
  object,
  bool,
  string
} = PropTypes

App.propTypes = {
  dispatch: func,
  weatherApp: object,
  backgroundUrl: string,
  isFetching: bool,
  isLoaded: bool
}

const weatherData = (state) => ({weatherData: state.location, backgroundUrl: state.background})

export default connect(weatherData)(App)
