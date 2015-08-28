'use strict';

jest.dontMock('../../../src/app/components/daily/daily.jsx');

describe('daily', function() {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var Daily = require('../../../src/app/components/daily/daily.jsx');
    var dailyComponent;

    beforeEach(function () {
        dailyComponent = TestUtils.renderIntoDocument(<Daily/>);
    });

    it('Should exist', function(){
        expect(TestUtils.isCompositeComponent(dailyComponent)).toBeTruthy();
    });

    it('Should receive a temperature', function(){
        var Temp = dailyComponent.props.temperature;

        expect(Temp).toBeEqual(jasmine.any(Number));
        expect(Temp).toBeGreaterThan(-50)
        expect(Temp).toBeLessThan(60);

    });
    it('Should receive a icon', function(){

    });
});
