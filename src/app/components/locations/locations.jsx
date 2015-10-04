import React from 'react';
import Radium from 'radium';

class Locations extends React.Component {
    render() {
        return(
            <section className="section--center mdl-grid mdl-cell--middle">
                {this.props.children}
            </section>
        );
    }
};

module.exports = Radium(Locations);
