import React, {Component, PropTypes} from 'react'
import './Card.scss'

class Card extends Component {
  render () {
    const {
      dailyWeather
    } = this.props

    let time = new Date(dailyWeather.data.date * 1000)
    let formatTime = `${time.getHours()}:${time.getMinutes()}`
    let isDay = dailyWeather.weather.icon.indexOf('d') !== -1 ? 'day' : 'night';
    
    return (
      <div className="mdl-card card-location mdl-shadow--2dp">
        <div className="card-location-content">
          <h2 className="card-location-content__name">
            {dailyWeather.data.city},
            {dailyWeather.data.country}
            <span className="card-location-content__date">
              Last Updated: {formatTime}
            </span>
          </h2>
        </div>
        <div className="card-location-temp">
          <i className={`card-location-temp__icon wi wi-${isDay}-${dailyWeather.weather.description}`} />
          <p className="card-location-temp__description">
            {dailyWeather.weather.description}
          </p>
          <p className="card-location-temp__value">
            {Math.floor(dailyWeather.weather.temp)}
            <i className="wi wi-degrees"></i>
          </p>
        </div>
        <div className="card-location-weather">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
              <p>Humidity</p>
              {dailyWeather.weather.humidity}
              <span>%</span>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <p>Pressure</p>
              {dailyWeather.weather.pressure}
              <span>hpa</span>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <p>Wind</p>
              {dailyWeather.weather.wind}
              <span>m/s</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const {
  object
} = PropTypes

Card.propTypes = {
  dailyWeather: object.isRequired
}

export default Card
