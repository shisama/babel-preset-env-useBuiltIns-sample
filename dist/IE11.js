"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require("babel-polyfill/lib/regenerator-runtime/runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(0, _asyncToGenerator3.default)(
/*#__PURE__*/
_regenerator2.default.mark(function _callee() {
  var _i, number;

  return _regenerator2.default.wrap(function _callee$(_context) {
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
