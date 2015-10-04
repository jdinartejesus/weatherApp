var AppDispatcher = require('./dailyDispatcher');
var DailyConstants = require('./dailyConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _dailyWeather = {};

function loadProductData(data) {
  _dailyWeather = data;
}

var DailyStore = assign({}, EventEmitter.prototype, {
    emitChange () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getDailyWeather () {
        return _dailyWeather;
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        case DailyConstants.RECEIVE_DATA:
         loadProductData(action.data);
         break;

        default:
            return true;
    }

    DailyStore.emitChange();

    return true;
});


module.exports = DailyStore;
