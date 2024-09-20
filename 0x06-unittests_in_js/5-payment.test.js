const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let espionage;

  beforeEach(() => {
    if (!espionage) {
      espionage = sinon.spy(console);
    }
  });

  afterEach(() => {
    espionage.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) outputs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(espionage.log.calledWith('The total is: 120')).to.be.true;
    expect(espionage.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) outputs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(espionage.log.calledWith('The total is: 20')).to.be.true;
    expect(espionage.log.calledOnce).to.be.true;
  });
});
