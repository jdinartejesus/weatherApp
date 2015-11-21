import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">Update</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        View Updates
                    </a>
                </div>
            </div>
        );
    }
}
