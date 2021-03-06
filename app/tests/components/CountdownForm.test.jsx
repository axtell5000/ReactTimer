var expect = require('expect');
var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exit', () => {
    expect('CountdownForm').toExist();
  });

  it('should call onSetCountdown if valid seconds entered', ()=>{
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDom.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '105';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(105);
  });

  it('should not call onSetCountdown if invalid seconds entered', ()=>{
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDom.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'yo';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
