import React, {Component, PropTypes} from 'react'
import './Card.scss'

export default class Card extends Component {
    render() {
        let time = new Date(this.props.dailyWeather.location.date*1000)
        let formatTime = time.getHours() + ':' + time.getMinutes();
        let isDay = this.props.dailyWeather.weather.icon.indexOf('d') !== -1? 'day-' : 'night-' ;
        return (
            <div className="mdl-card card-location mdl-shadow--2dp">
                <div className="card-location-content">
                    <h2 className="card-location-content__name">
                        {this.props.dailyWeather.location.city},
                        {this.props.dailyWeather.location.country}
                        <span className="card-location-content__date">
                            Last Updated: {formatTime}
                        </span>
                    </h2>
                </div>
                <div className="card-location-temp">
                    <i className={'card-location-temp__icon wi wi-owm-' + isDay + this.props.dailyWeather.weather.id}></i>
                    <p className="card-location-temp__description">
                        {this.props.dailyWeather.weather.description}
                    </p>
                    <p className="card-location-temp__value">
                        {Math.floor(this.props.dailyWeather.weather.temp)}
                        <i className="wi wi-degrees"></i>
                    </p>
                </div>
                <div className="card-location-weather">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--4-col">
                            <p>Humidity</p>
                            {this.props.dailyWeather.weather.humidity}
                            <span> %</span>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p>Pressure</p>
                            {this.props.dailyWeather.weather.pressure}
                            <span> hpa</span>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p>Wind</p>
                            {this.props.dailyWeather.weather.wind}
                            <span> m/s</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
  dailyWeather: PropTypes.object.isRequired
}
