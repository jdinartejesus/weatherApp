import AppDispatcher from './dailyDispatcher';
import DailyConstants from './dailyConstants';

var DailyActions = {

    receiveData (data) {
        AppDispatcher.handleAction({
            actionType: DailyConstants.RECEIVE_DATA,
            data: data
        });
    },
};

module.exports = DailyActions;
