import AppDispatcher from './dailyDispatcher';
import DailyConstants from './dailyConstants';
import Request from 'superagent';

var DailyActions = {
    receiveData (location) {
        Request
        .get('//api.openweathermap.org/data/2.5/weather')
        .query({q: location, units: 'metric'})
        .end(function(err, res){
            if (err) throw err;
                AppDispatcher.handleAction({
                    actionType: DailyConstants.RECEIVE_DATA,
                    data: {
                        location: res.body.name,
                        lastCheck: new Date(res.body.dt*1000).toLocaleString('de-DE', {hour: '2-digit', minute: '2-digit'} ),
                        degrees: Math.round(res.body.main.temp),
                        icon: res.body.weather[0].id,
                        humidity: res.body.main.humidity,
                        wind: res.body.wind.speed,
                        pressure: res.body.main.pressure
                    }
              });
        });
    }
};

module.exports = DailyActions;
