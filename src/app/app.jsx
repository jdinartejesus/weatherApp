'use strict';

import 'material.css';
import 'material';

import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div>
        <h2>Hello World</h2>
          <button className="mdl-button mdl-js-button mdl-button--raised">
            Button
          </button>
      </div>
    )
  }
}

React.render(<App/>, document.body);
