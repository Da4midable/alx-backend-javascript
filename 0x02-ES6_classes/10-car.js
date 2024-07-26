export default class Car {
  static get [Symbol.species]() {
    return this;
  }

  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
