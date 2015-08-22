'use strict';

jest.dontMock('../src/app/app.jsx');

describe('App', function(){
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var App = require('../src/app/app.jsx');

    beforeEach(function () {
        App = TestUtils.renderIntoDocument(<SelectDate date={new Date()}/>);
    });

    it('should exist', function () {
        expect(TestUtils.isCompositeComponent(App)).toBeTruthy();
    });

});
