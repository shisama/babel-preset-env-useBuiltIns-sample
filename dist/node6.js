"use strict";

require("core-js/modules/es6.promise");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

_asyncToGenerator(function* () {
  // async function is ES2017 Feature
  if (numbers.includes(5)) {
    // Array.prototype.includes is ES2016 Feature
    console.log('array includes 5'); // trailing commas in function is ES2017 Feature
  }

  for (var _i = 0; _i < numbers.length; _i++) {
    const number = numbers[_i];
    // for..of.. is ES2015 Feature
    yield console.log(number);
  }
})();
