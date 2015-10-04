import 'material.css';
import 'material';

import React from 'react';

import Daily from './components/daily/daily.jsx';
import Background from './components/background/background.jsx';
import Locations from './components/locations/locations.jsx';

import DailyStore from './components/daily/dailyStore';
import DailyActions from './components/daily/dailyActions';

function getWeatherState() {
    return {
        weather: DailyStore.getDailyWeather(),
    };
};

var App = React.createClass({
    getInitialState() {
        return getWeatherState();
    },
    componentDidMount () {
        DailyActions.receiveData('Berlin, de');
        DailyStore.addChangeListener(this._onChange);
    },
    componentWillUnmount () {
        DailyStore.removeChangeListener(this._onChange);
    },
    _onChange () {
        this.setState(getWeatherState());
    },
    render () {
        return (
            <Background>
                <Locations>
                    <Daily
                        location={this.state.weather.location}
                        lastCheck={this.state.weather.lastCheck}
                        degrees={this.state.weather.degrees}
                        icon={this.state.weather.icon}
                        humidity={this.state.weather.humidity}
                        wind={this.state.weather.wind}
                        pressure={this.state.weather.pressure}
                    />
                </Locations>
            </Background>
        );
    }
});

React.render(<App/>, document.body);
