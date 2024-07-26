import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = new Currency('USD', 'Dollars')) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    this.conversionRate = conversionRate;
    this.amount = amount;
    return this.amount * this.conversionRate;
  }
}
