import 'material.css';
import 'material';

import React from 'react';

import Daily from './components/daily/daily.jsx';
import Background from './components/background/background.jsx';
import DailyStore from './components/daily/dailyStore';

import WeatherData from './utils/DailyWeatherData';
import DailyAPI from './utils/DailyAPI';

WeatherData.init();

DailyAPI.getWeatherData();

function getWeatherState() {
    return {
        weather: DailyStore.getDailyWeather(),
    };
};

var App = React.createClass({
    getInitialState() {
        return getWeatherState();
    },
    componentDidMount: function() {
        DailyStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        DailyStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(getWeatherState());
    },
    render () {
        return (
            <Background>
                <section className="section--center mdl-grid mdl-cell--middle">
                    <Daily
                        location={this.state.weather.location}
                        lastCheck="19:00"
                        degrees={this.state.weather.degrees}
                        icon={this.state.weather.icon}
                        humidity={this.state.weather.humidity}
                        wind={this.state.weather.wind}
                        pressure={this.state.weather.pressure}
                    />
                </section>
            </Background>
        );
    }
});

React.render(<App/>, document.body);
