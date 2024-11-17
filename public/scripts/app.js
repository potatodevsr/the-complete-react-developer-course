"use strict";

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));
var user = {
  name: 'Chadapohn',
  cities: ['Chiang Mai', 'Phuket', 'Bangkok', 'Rayong', 'Surin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;
    var cityMessages = this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city + '!';
    });
    return cityMessages;
    // const that = this;
    // this.cities.forEach((city) => {
    //     console.log(that.name + ' has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());
var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;
    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
