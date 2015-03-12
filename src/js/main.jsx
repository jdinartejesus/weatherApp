var React = require('react');

var App = React.createClass({
    getInitialState: function(){
      return({
        country: '',
        temp: []
      });
    },
    componentDidMount: function(){
      var _this = this;
      var today = Date.now();
      var script = document.createElement("script");
      script.src = "//api.openweathermap.org/data/2.5/weather?q=Paris,fr";

      window[today] = function(jsonData) {
        _this.setState({
          temp: jsonData.weather
        });
        delete window[today];
      };

      document.head.appendChild(script);
    },
    render: function(){
      return(
        <div>
          <h2>Weather in Paris</h2>
          <p>{this.state.temp}</p>
        </div>
      );
    }
});

React.render(<App/>, document.getElementById('main'));
