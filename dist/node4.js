"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/modules/es7.array.includes");

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  var _i, number;

  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // async function is ES2017 Feature
          if (numbers.includes(5)) {
            // Array.prototype.includes is ES2016 Feature
            console.log('array includes 5'); // trailing commas in function is ES2017 Feature
          }

          _i = 0;

        case 2:
          if (!(_i < numbers.length)) {
            _context.next = 9;
            break;
          }

          number = numbers[_i];
          _context.next = 6;
          return console.log(number);

        case 6:
          _i++;
          _context.next = 2;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}))();
