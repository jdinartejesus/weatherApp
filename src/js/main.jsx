var request = require('superagent')
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
      var url = "//api.openweathermap.org/data/2.5/weather";
      var query = {q: "Paris,fr"};

      request
        .get(url)
        .query(query)
        .end(function(err, res){
          if (err) throw err;
          _this.setState({
            temp: res.body.weather
          });
        });

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
