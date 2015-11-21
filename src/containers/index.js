import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Card from '../components/'
import * as appActions from '../actions'

class Main extends Component {
    render() {
        const { weatherApp, dispatch } = this.props;
        const actions = bindActionCreators(appActions, dispatch);
        console.log(weatherApp);
        return (
            <Card dailyWeather={weatherApp} />
        );
    }
}

function select(state) {
  return {
    weatherApp: state.weatherApp
  }
}

export default connect(select)(Main);
