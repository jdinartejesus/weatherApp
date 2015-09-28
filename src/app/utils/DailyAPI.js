import DailyActions from '../components/daily/dailyActions';

module.exports = {
    getWeatherData () {
        var data = JSON.parse(localStorage.getItem('weather'));
        DailyActions.receiveData(data);
    }
};
