jest.dontMock('../src/app/app.jsx');
jest.dontMock('../src/app/components/daily/daily.jsx');


describe('App', function(){
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var App = require('../src/app/app.jsx');
    var AppComponent;

    beforeEach(function () {
        AppComponent = TestUtils.renderIntoDocument(<App/>);
    });
});
