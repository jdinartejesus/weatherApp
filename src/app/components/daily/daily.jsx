import React from 'react';
import Radium from 'radium';

class Daily extends React.Component {
    render() {
        return (
            <div className="mdl-card dailyWeather mdl-cell mdl-cell--12-col mdl-shadow--2dp">
                <div className="dailyTemperature mdl-grid" style={styles.dailyTemperature}>
                    <div className="mdl-cell mdl-cell--12-col">
                        <h4 style={styles.currentLocation}>
                            {this.props.location}
                        </h4>
                        <p style={styles.lastCheck}>
                            Last Check: {this.props.lastCheck}
                        </p>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col">
                        <i className={'wi wi-owm-' + this.props.icon} style={styles.weatherIcon}></i>
                        <h3 key="degrees" style={styles.degrees}>
                            {this.props.degrees}
                            <i className="wi wi-degrees"></i>
                        </h3>
                    </div>
                </div>
                <div className="dailyDetails mdl-cell mdl-cell--12-col mdl-grid" style={styles.dailyDetails}>
                    <div className="mdl-cell mdl-cell--4-col">
                        <h5>
                            <i className="wi wi-raindrop" style={styles.icons}></i>
                            {this.props.humidity}
                            <span style={styles.unit}> %</span>
                        </h5>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col">
                        <h5>
                            <i className="wi wi-barometer" style={styles.icons}></i>
                            {this.props.pressure}
                            <span style={styles.unit}> pHa</span>
                        </h5>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col">
                        <h5>
                            <i className="wi wi-strong-wind" style={styles.icons}></i>
                            {this.props.wind}
                            <span style={styles.unit}> km/h</span>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
};
// Global settings
var fontColor = '#999';

var styles = {
    dailyTemperature: {
        padding: '1em',

        textAlign: 'center',
        color: fontColor
    },
    currentLocation: {
        margin: '0',
        padding: '0',

        lineHeight: '1.1em'
    },
    lastCheck: {
        margin: '0',
        padding: '0',

        fontSize: '1.1em',
        lineHeight: '1.1em'
    },
    weatherIcon: {
        padding: '0.2em 0',
        display: 'block',

        fontSize: '5em'
    },
    degrees: {
        fontSize: '4em'
    },
    dailyDetails: {
        padding: '0',

        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        color: fontColor,
        textAlign: 'center'
    },
    icons: {
        display: 'block',
        fontSize: '1.25em',
        padding: '0.25em',
    },
    unit: {
        fontSize: '0.75em',
    }
};

module.exports = Radium(Daily);
