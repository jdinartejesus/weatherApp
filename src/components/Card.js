import React, {Component, PropTypes} from 'react'
//TODO: Change styles to sass or stlyus
import CardStyles from './Card.css'

export default class Card extends Component {
    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div className="card-location-content">
                    <h2 className="card-location-name">
                        {this.props.dailyWeather.name},
                        {this.props.dailyWeather.sys? this.props.dailyWeather.sys.country : '...'}
                        <span className="card-location-date">Last Updated: 4:00PM</span>
                    </h2>
                </div>
                <div className="card-location-temp">
                    <i className={this.props.dailyWeather.weather? 'card-temp-icon wi wi-owm-' +  this.props.dailyWeather.weather[0].id: '...'}></i>
                    <p className="card-temp-description">
                        {this.props.dailyWeather.weather? this.props.dailyWeather.weather[0].description : '...'}
                    </p>
                    <p className="card-temp-value">
                        {this.props.dailyWeather.main? Math.floor(this.props.dailyWeather.main.temp) : '...'}
                        <i className="wi wi-degrees"></i>
                    </p>
                </div>
                <div className="card-location-weather">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--4-col">
                            <p>Humidity</p>
                            {this.props.dailyWeather.main? this.props.dailyWeather.main.humidity : '...'}
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p>Pressure</p>
                            {this.props.dailyWeather.main? this.props.dailyWeather.main.pressure : '...'}
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p>Wind</p>
                            {this.props.dailyWeather.wind? this.props.dailyWeather.wind.speed : '...'}
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
