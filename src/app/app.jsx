import 'material.css';
import 'material';

import React from 'react';
import Radium from 'radium';
import Daily from './components/daily/daily.jsx';
import DailyStore from './components/daily/dailyStore';

var App = React.createClass({
    getInitialState() {
        return {
        };
    },
    componentWillMount() {
        console.log('Hello Word');
    },
    componentDidMount() {
        console.log('Good Bye');
    },
    render () {
        return (
            <div className="mdl-layout mdl-js-layout mdl-grid" style={styles}>
                <section className="section--center mdl-grid mdl-cell--middle">
                    <Daily
                        location="Berlin, Germany"
                        lastCheck="20:00"
                        degrees="22"
                        icon="800"
                        humidity="60"
                        wind="4"
                        pressure="1212"
                    />
                </section>
            </div>
        );
    }
});

var styles = {
    width: '100%',
    height: window.innerHeight,
    backgroundImage: 'url(http://www.zastavki.com/pictures/originals/2014/World___Germany_View_of_the_TV_tower_from_the_river_in_Berlin_058498_.jpg)',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0'
};

App = Radium(App);

React.render(<App/>, document.body);
