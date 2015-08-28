import React from 'react';
import Radium from 'radium';

class Daily extends React.Component {
    getDefaultProps() {
        return {
            location: undefined,
            lastCheck: undefined,
            degrees: NULL,
            icon: undefined,
            humidity: NULL,
            pressure: NULL,
            wind: NULL,
        };
    }
    render() {
        return (
            <section className="section--center mdl-grid mdl-cell--middle">
                <div className="mdl-card dailyWeather mdl-cell mdl-cell--12-col mdl-shadow--2dp">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col" style={styles.location}>
                            <h4 style={styles.location.place}>
                                {this.props.location}
                            </h4>
                            <p style={styles.location.lastCheck}>
                                Last Check: {this.props.lastCheck}
                            </p>
                        </div>
                        <div className="mdl-cell mdl-cell--12-col" style={styles.weather}>
                            <i className={'wi wi-owm-' + this.props.icon} style={styles.weather.icon}></i>
                            <h3 style={styles.weather.degrees}>
                                {this.props.degrees}
                                <i className="wi wi-degrees"></i>
                            </h3>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col mdl-grid" style={styles.information}>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p style={styles.information.values}>
                                <i className="wi wi-raindrop" style={styles.information.icons}></i>
                                {this.props.humidity}
                                <span style={styles.information.unit}> %</span>
                            </p>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p style={styles.information.values}>
                                <i className="wi wi-barometer" style={styles.information.icons}></i>
                                {this.props.pressure}
                                <span style={styles.information.unit}> pHa</span>
                            </p>
                        </div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <p style={styles.information.values}>
                                <i className="wi wi-strong-wind" style={styles.information.icons}></i>
                                {this.props.wind}
                                <span style={styles.information.unit}> km/h</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

var styles = {
    location: {
        padding: '1em 0',
        textAlign: 'center',
        color: '#616161',
        place: {
            margin: '0',
            padding: '0',

            lineHeight: '1.1em'
        },
        lastCheck: {
            margin: '0',
            padding: '0',

            fontSize: '1.1em',
            lineHeight: '1.1em'
        }
    },
    weather: {
        color: '#999',
        textAlign: 'center',
        icon: {
            fontSize: '5em',
            padding: '0.2em 0',
            display: 'block'
        },
        degrees: {
            fontSize: '4em'
        }
    },
    information: {
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        textAlign: 'center',
        color: '#616161',
        icons: {
            display: 'block',
            fontSize: '1.25em',
            padding: '0.25em',
        },
        values: {
            fontSize: '1.25em',
        },
        unit: {
            fontSize: '0.75em',
        }
    }
};

module.exports = Radium(Daily);
