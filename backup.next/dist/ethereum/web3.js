'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get the current provider used by metamask.
// "window" is a global variable only in browser.
// Next.js will complain about it is undefined.
//const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;
// If the brower is process this .js file
// window will be a valid value.
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  // We are in the browser and Metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are in the Next server or Metamask is not running.
  // We create our own provider.
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/0FYTWZYFYrhgxg2fQkt9');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFlBQUo7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxBQUFQLFNBQWdCLEFBQXJELGFBQWtFLEFBQ2hFO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBSEQsT0FHTyxBQUNMO0FBQ0E7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUdEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUva2VuaW5nL3R1dG9yaWFsL2V0aGVyZXVtL0V0aGVyZXVtLUtpY2tTdGFydCJ9