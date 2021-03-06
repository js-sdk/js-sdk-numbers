(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isEven = isEven;
  exports.isOdd = isOdd;
  function isEven(n) {
    return n % 2 == 0;
  }

  function isOdd(n) {
    return n % 2 != 0;
  }

  var toChar = exports.toChar = String.fromCharCode;

  var fromChar = exports.fromChar = function fromChar(c) {
    return c.codePointAt(0);
  };
});
