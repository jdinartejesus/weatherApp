import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Card from '../components/Card'
import Search from '../components/Search'
import * as appActions from '../actions'
import './background-location.scss'

class Main extends Component {
  componentDidMount() {
    const {weatherApp, dispatch} = this.props;
    dispatch(appActions.fetchLocations('London'))
  }
  render () {
    const {isFetching, isError, isLoaded, weatherApp, dispatch} = this.props;
    var location = weatherApp.background
    return (
      <div className="backgound-location" style={{backgroundImage: 'url(' + location + ')'}}>
        <div className="mdl-layout">
          <div className="mdl-grid">
            <Search searchLocation={location => dispatch(appActions.fetchLocations(location))}/>
          </div>
          <div className="mdl-grid">
            {!isFetching && <Card dailyWeather={weatherApp}/>}
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {weatherApp: state.location }
}

export default connect(select)(Main);
