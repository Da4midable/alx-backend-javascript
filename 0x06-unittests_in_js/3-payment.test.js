const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi leverages the calculateNumber method of Utils', () => {
    const espionage = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(espionage.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(espionage.calculateNumber.callCount).to.be.equal(1);
    espionage.calculateNumber.restore();
  });
});
