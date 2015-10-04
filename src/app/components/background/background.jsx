import React from 'react';
import Radium from 'radium';

class Background extends React.Component {
    render() {
        return(
            <div className="mdl-layout mdl-js-layout mdl-grid" style={styles}>
                {this.props.children}
            </div>
        );
    }
}

var styles = {
    width: '100%',
    height: window.innerHeight,
    backgroundImage: 'url(http://www.zastavki.com/pictures/originals/2014/World___Germany_View_of_the_TV_tower_from_the_river_in_Berlin_058498_.jpg)',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0'
};

module.exports = Radium(Background);
